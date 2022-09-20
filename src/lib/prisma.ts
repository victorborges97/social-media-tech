import { PrismaClient as NormalPrisma } from '@prisma/client';
import { PrismaClient as APIPrisma } from '@prisma/client/edge';

let prisma: NormalPrisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new APIPrisma();
} else {
  prisma = new NormalPrisma();
}

export default prisma;
