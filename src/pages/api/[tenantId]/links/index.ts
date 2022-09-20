import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

interface Data<T> {
  result: T;
}

interface Error {
  error: string;
}

interface LinkCreate {
  appLink?: string;
  destination: string;
  name: string;
  publicName: string;
  slug: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data<any>[] | Error | any>
) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(404).json({
      error: 'unauthorized user',
    });
  }

  switch (req.method) {
    case 'POST':
      return await post(req, res);

    case 'GET':
      return await get(req, res);

    default:
      return res.status(404).json({
        error: 'method is not implementeds',
      });
  }
};

async function get(
  req: NextApiRequest,
  res: NextApiResponse<Data<any>[] | Error | any>
) {
  try {
    //TODO: check se tenho acesso ao tenant

    const tenantId = req.query.tenantId;
    const link = await prisma.link.findMany({});

    return res.status(200).json({
      result: link,
    });
  } catch (e) {
    console.log(`try catch: ${e}`);
    return res.status(500).json({
      error: e,
    });
  }
}

async function post(
  req: NextApiRequest,
  res: NextApiResponse<Data<any>[] | Error | any>
) {
  try {
    //TODO: check se tenho acesso ao tenant

    const tenantId = req.query.tenantId;
    const dataBody = {
      name: String(req.body.name),
      publicName: String(req.body.publicName),
      slug: String(req.body.slug),
      destination: String(req.body.destination),
      appLink: String(req.body.appLink),
      tenantId: String(tenantId),
    };

    console.log(dataBody);

    const link = await prisma.link.create({
      data: dataBody,
    });

    ///LOGICA

    return res.status(200).json({
      result: link,
    });
  } catch (e) {
    console.log(`try catch: ${e}`);
    return res.status(500).json({
      error: e,
    });
  }
}
