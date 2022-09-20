/*
  Warnings:

  - You are about to drop the `tenent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tenent";

-- CreateTable
CREATE TABLE "tenant" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "plan" STRING NOT NULL,
    "image" STRING NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tenant_pkey" PRIMARY KEY ("id")
);
