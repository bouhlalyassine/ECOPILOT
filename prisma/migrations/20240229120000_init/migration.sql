-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SUPER_USER', 'USER', 'AGENT_SAISIE');

CREATE TYPE "Status" AS ENUM ('DRAFT', 'PENDING_REVIEW', 'APPROVED', 'REJECTED');

CREATE TYPE "EmissionModule" AS ENUM ('energy', 'waste');

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "settings" JSONB DEFAULT json_build_object('campaignStartMonth', 9, 'defaultLocale', 'fr'),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Site" (
    "id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL REFERENCES "Organization"("id") ON DELETE CASCADE,
    "societe" TEXT,
    "bu" TEXT,
    "activite" TEXT,
    "filiere" TEXT,
    "region" TEXT
);

CREATE TABLE "User" (
    "id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "role" "Role" NOT NULL,
    "passwordHash" TEXT,
    "organizationId" TEXT NOT NULL REFERENCES "Organization"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Implicit many-to-many SiteUsers join table
CREATE TABLE "_SiteUsers" (
    "A" TEXT NOT NULL REFERENCES "Site"("id") ON DELETE CASCADE,
    "B" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
    CONSTRAINT "_SiteUsers_AB_unique" UNIQUE ("A", "B")
);
CREATE INDEX "_SiteUsers_B_index" ON "_SiteUsers" ("B");

CREATE TABLE "EnergyRecord" (
    "id" TEXT PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "period" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" TEXT NOT NULL REFERENCES "Site"("id") ON DELETE CASCADE,
    "type" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" NUMERIC(18,4) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL REFERENCES "User"("id") ON DELETE RESTRICT,
    "validatedById" TEXT REFERENCES "User"("id") ON DELETE SET NULL,
    "validatedAt" TIMESTAMPTZ,
    "source" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "WaterRecord" (
    "id" TEXT PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "period" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" TEXT NOT NULL REFERENCES "Site"("id") ON DELETE CASCADE,
    "familleCulture" TEXT NOT NULL,
    "variete" TEXT NOT NULL,
    "eau_m3" NUMERIC(18,4) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL REFERENCES "User"("id") ON DELETE RESTRICT,
    "validatedById" TEXT REFERENCES "User"("id") ON DELETE SET NULL,
    "validatedAt" TIMESTAMPTZ,
    "source" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "WasteRecord" (
    "id" TEXT PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "period" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" TEXT NOT NULL REFERENCES "Site"("id") ON DELETE CASCADE,
    "categorie" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" NUMERIC(18,4) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL REFERENCES "User"("id") ON DELETE RESTRICT,
    "validatedById" TEXT REFERENCES "User"("id") ON DELETE SET NULL,
    "validatedAt" TIMESTAMPTZ,
    "source" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "SocialAction" (
    "id" TEXT PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "period" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" TEXT NOT NULL REFERENCES "Site"("id") ON DELETE CASCADE,
    "action" TEXT NOT NULL,
    "budget" NUMERIC(18,2) NOT NULL,
    "beneficiaries" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL REFERENCES "User"("id") ON DELETE RESTRICT,
    "validatedById" TEXT REFERENCES "User"("id") ON DELETE SET NULL,
    "validatedAt" TIMESTAMPTZ,
    "source" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "ProductionRecord" (
    "id" TEXT PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "period" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "siteId" TEXT NOT NULL REFERENCES "Site"("id") ON DELETE CASCADE,
    "familleCulture" TEXT NOT NULL,
    "variete" TEXT NOT NULL,
    "sup_ha" NUMERIC(18,4) NOT NULL,
    "prod_kg" NUMERIC(18,4) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL REFERENCES "User"("id") ON DELETE RESTRICT,
    "validatedById" TEXT REFERENCES "User"("id") ON DELETE SET NULL,
    "validatedAt" TIMESTAMPTZ,
    "source" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "EmissionFactor" (
    "id" TEXT PRIMARY KEY,
    "organizationId" TEXT NOT NULL REFERENCES "Organization"("id") ON DELETE CASCADE,
    "module" "EmissionModule" NOT NULL,
    "sourceType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "kgco2ePerUnit" NUMERIC(18,6) NOT NULL,
    "validFrom" TIMESTAMPTZ,
    "validTo" TIMESTAMPTZ,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Scenario" (
    "id" TEXT PRIMARY KEY,
    "organizationId" TEXT NOT NULL REFERENCES "Organization"("id") ON DELETE CASCADE,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "applyFromCampaign" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "ScenarioReduction" (
    "id" TEXT PRIMARY KEY,
    "scenarioId" TEXT NOT NULL REFERENCES "Scenario"("id") ON DELETE CASCADE,
    "module" "EmissionModule" NOT NULL,
    "siteId" TEXT REFERENCES "Site"("id") ON DELETE SET NULL,
    "filterField" TEXT NOT NULL,
    "filterValue" TEXT NOT NULL,
    "reductionType" TEXT NOT NULL,
    "reductionValue" NUMERIC(18,4) NOT NULL
);

-- NextAuth tables
CREATE TABLE "Account" (
    "id" TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_provider_providerAccountId_key" UNIQUE ("provider", "providerAccountId")
);

CREATE TABLE "Session" (
    "id" TEXT PRIMARY KEY,
    "sessionToken" TEXT NOT NULL UNIQUE,
    "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
    "expires" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMPTZ NOT NULL,
    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier", "token"),
    CONSTRAINT "VerificationToken_token_key" UNIQUE ("token")
);
