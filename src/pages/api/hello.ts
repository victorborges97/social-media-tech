// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface IAccount {
  id: string;
  name: string;
  slug: string;
  plan: string;
  image: string;
  createdAt: string;
}

export default async function hello(
  req: NextApiRequest,
  res: NextApiResponse<IAccount[]>
) {
  const accounts = await prisma.account.findMany();
  res.status(200).json(accounts);
}
