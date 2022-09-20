/*
  Warnings:

  - You are about to alter the column `id` on the `account` table. The data in that column will be cast from `Int` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_account" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "plan" STRING NOT NULL,
    "image" STRING NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_account" ("createdAt","id","image","name","plan","slug") SELECT "createdAt","id","image","name","plan","slug" FROM "account";
DROP TABLE "account" CASCADE;
ALTER TABLE "_prisma_new_account" RENAME TO "account";
