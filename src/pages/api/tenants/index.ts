import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

interface Data {
  id: string;
  image: string;
  name: string;
  slug: string;
}

interface Error {
  error: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Error>
) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(404).json({
      error: 'unauthorized user',
    });
  }

  const tenants = await prisma.tenant.findMany({
    where: {
      userOnTenant: {
        every: {
          userId: session.user.id,
        },
      },
    },
  });

  ///LOGICA

  return res.status(200).json(tenants);
};
