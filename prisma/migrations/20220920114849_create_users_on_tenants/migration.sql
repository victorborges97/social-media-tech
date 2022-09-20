/*
  Warnings:

  - You are about to drop the column `userId` on the `tenant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tenant" DROP CONSTRAINT "tenant_userId_fkey";

-- AlterTable
ALTER TABLE "tenant" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "UserOnTenant" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "tenantId" STRING NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" STRING NOT NULL,

    CONSTRAINT "UserOnTenant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserOnTenant" ADD CONSTRAINT "UserOnTenant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnTenant" ADD CONSTRAINT "UserOnTenant_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
