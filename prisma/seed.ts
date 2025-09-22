import { PrismaClient, Role, Status } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.scenarioReduction.deleteMany();
  await prisma.scenario.deleteMany();
  await prisma.emissionFactor.deleteMany();
  await prisma.productionRecord.deleteMany();
  await prisma.socialAction.deleteMany();
  await prisma.wasteRecord.deleteMany();
  await prisma.waterRecord.deleteMany();
  await prisma.energyRecord.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
  await prisma.site.deleteMany();
  await prisma.organization.deleteMany();

  const organization = await prisma.organization.create({
    data: {
      name: 'Ecopilot Demo',
      settings: { campaignStartMonth: 9, defaultLocale: 'fr' }
    }
  });

  const sites = await prisma.$transaction([
    prisma.site.create({
      data: {
        name: 'Ferme Nord',
        organizationId: organization.id,
        region: 'Hauts-de-France',
        activite: 'Céréales'
      }
    }),
    prisma.site.create({
      data: {
        name: 'Domaine Sud',
        organizationId: organization.id,
        region: 'Occitanie',
        activite: 'Maraîchage'
      }
    }),
    prisma.site.create({
      data: {
        name: 'Usine Centre',
        organizationId: organization.id,
        region: 'Centre-Val de Loire',
        activite: 'Transformation'
      }
    })
  ]);

  const password = await hash('Password123!', 10);

  const [admin, superUser, user, agent] = await prisma.$transaction([
    prisma.user.create({
      data: {
        name: 'Alice Admin',
        email: 'admin@ecopilot.test',
        role: Role.ADMIN,
        passwordHash: password,
        organizationId: organization.id,
        siteAccesses: { connect: sites.map((site) => ({ id: site.id })) }
      }
    }),
    prisma.user.create({
      data: {
        name: 'Samuel Super',
        email: 'super@ecopilot.test',
        role: Role.SUPER_USER,
        passwordHash: password,
        organizationId: organization.id,
        siteAccesses: { connect: [{ id: sites[0].id }, { id: sites[1].id }] }
      }
    }),
    prisma.user.create({
      data: {
        name: 'Ursula User',
        email: 'user@ecopilot.test',
        role: Role.USER,
        passwordHash: password,
        organizationId: organization.id,
        siteAccesses: { connect: [{ id: sites[0].id }] }
      }
    }),
    prisma.user.create({
      data: {
        name: 'Agathe Agent',
        email: 'agent@ecopilot.test',
        role: Role.AGENT_SAISIE,
        passwordHash: password,
        organizationId: organization.id,
        siteAccesses: { connect: [{ id: sites[1].id }] }
      }
    })
  ]);

  const makeDate = (year: number, month: number) => new Date(year, month - 1, 1);

  await prisma.energyRecord.createMany({
    data: [
      {
        id: 'energy-202308',
        year: 2023,
        month: 8,
        period: makeDate(2023, 8),
        siteId: sites[0].id,
        type: 'Electricite',
        unit: 'kWh',
        value: 12000,
        status: Status.APPROVED,
        createdById: admin.id,
        validatedById: superUser.id,
        validatedAt: new Date()
      },
      {
        id: 'energy-202409',
        year: 2024,
        month: 9,
        period: makeDate(2024, 9),
        siteId: sites[1].id,
        type: 'Electricite',
        unit: 'kWh',
        value: 9000,
        status: Status.PENDING_REVIEW,
        createdById: agent.id
      },
      {
        id: 'energy-202408',
        year: 2024,
        month: 8,
        period: makeDate(2024, 8),
        siteId: sites[1].id,
        type: 'Gaz naturel',
        unit: 'kWh',
        value: 4000,
        status: Status.DRAFT,
        createdById: agent.id
      }
    ]
  });

  await prisma.waterRecord.createMany({
    data: [
      {
        id: 'water-202308',
        year: 2023,
        month: 8,
        period: makeDate(2023, 8),
        siteId: sites[0].id,
        familleCulture: 'Blé',
        variete: 'Variété A',
        eau_m3: 500,
        status: Status.APPROVED,
        createdById: admin.id,
        validatedById: user.id,
        validatedAt: new Date()
      },
      {
        id: 'water-202409',
        year: 2024,
        month: 9,
        period: makeDate(2024, 9),
        siteId: sites[1].id,
        familleCulture: 'Tomates',
        variete: 'Rouge',
        eau_m3: 350,
        status: Status.DRAFT,
        createdById: agent.id
      }
    ]
  });

  await prisma.wasteRecord.createMany({
    data: [
      {
        id: 'waste-202308',
        year: 2023,
        month: 8,
        period: makeDate(2023, 8),
        siteId: sites[2].id,
        categorie: 'Déchets organiques',
        unit: 'kg',
        value: 1500,
        status: Status.APPROVED,
        createdById: admin.id,
        validatedById: superUser.id,
        validatedAt: new Date()
      },
      {
        id: 'waste-202409',
        year: 2024,
        month: 9,
        period: makeDate(2024, 9),
        siteId: sites[1].id,
        categorie: 'Déchets organiques',
        unit: 'kg',
        value: 800,
        status: Status.PENDING_REVIEW,
        createdById: agent.id
      }
    ]
  });

  await prisma.socialAction.createMany({
    data: [
      {
        id: 'social-202402',
        year: 2024,
        month: 2,
        period: makeDate(2024, 2),
        siteId: sites[0].id,
        action: 'Formation sécurité',
        budget: 3000,
        beneficiaries: 25,
        status: Status.APPROVED,
        createdById: admin.id,
        validatedById: user.id,
        validatedAt: new Date()
      }
    ]
  });

  await prisma.productionRecord.createMany({
    data: [
      {
        id: 'prod-202309',
        year: 2023,
        month: 9,
        period: makeDate(2023, 9),
        siteId: sites[0].id,
        familleCulture: 'Blé',
        variete: 'Variété A',
        sup_ha: 120,
        prod_kg: 450000,
        status: Status.APPROVED,
        createdById: admin.id,
        validatedById: superUser.id,
        validatedAt: new Date()
      },
      {
        id: 'prod-202409',
        year: 2024,
        month: 9,
        period: makeDate(2024, 9),
        siteId: sites[1].id,
        familleCulture: 'Tomates',
        variete: 'Rouge',
        sup_ha: 25,
        prod_kg: 68000,
        status: Status.DRAFT,
        createdById: agent.id
      }
    ]
  });

  await prisma.emissionFactor.createMany({
    data: [
      {
        id: 'factor-energy-electricite',
        organizationId: organization.id,
        module: 'energy',
        sourceType: 'Electricite',
        unit: 'kWh',
        kgco2ePerUnit: 0.05
      },
      {
        id: 'factor-energy-gaz',
        organizationId: organization.id,
        module: 'energy',
        sourceType: 'Gaz naturel',
        unit: 'kWh',
        kgco2ePerUnit: 0.18
      },
      {
        id: 'factor-waste-organic',
        organizationId: organization.id,
        module: 'waste',
        sourceType: 'Déchets organiques',
        unit: 'kg',
        kgco2ePerUnit: 0.6
      }
    ]
  });

  const scenario = await prisma.scenario.create({
    data: {
      organizationId: organization.id,
      name: 'Réduction 2025',
      description: 'Objectif -10% énergie, -5% déchets organiques',
      applyFromCampaign: '24/25',
      active: true,
      reductions: {
        create: [
          {
            module: 'energy',
            filterField: 'type',
            filterValue: 'Electricite',
            reductionType: 'percentage',
            reductionValue: 0.1
          },
          {
            module: 'waste',
            siteId: sites[1].id,
            filterField: 'categorie',
            filterValue: 'Déchets organiques',
            reductionType: 'percentage',
            reductionValue: 0.05
          }
        ]
      }
    }
  });

  await prisma.scenario.create({
    data: {
      organizationId: organization.id,
      name: 'Sobriété gaz',
      applyFromCampaign: '25/26',
      active: false,
      reductions: {
        create: [
          {
            module: 'energy',
            filterField: 'type',
            filterValue: 'Gaz naturel',
            reductionType: 'absolute',
            reductionValue: 500
          }
        ]
      }
    }
  });

  console.log('Seed completed with scenario', scenario.name);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
