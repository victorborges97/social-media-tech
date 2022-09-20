-- CreateTable
CREATE TABLE "link" (
    "id" STRING NOT NULL,
    "appLink" STRING NOT NULL DEFAULT '',
    "destination" STRING NOT NULL,
    "name" STRING NOT NULL,
    "publicName" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantId" STRING NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
