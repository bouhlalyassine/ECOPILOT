const uiText = {
  fr: {
    welcomeTitle: 'Bienvenue',
    welcomeSubtitle: 'Accédez à vos modules RSE en un clin d\'œil.',
    userRole: 'Responsable RSE',
    modulesTitle: 'Modules',
    logout: 'Déconnexion',
    submodulesTitle: 'Sous-modules clés',
    highlightTitle: 'Actions principales',
    kpiTitle: 'KPIs en direct',
    refresh: 'Actualiser',
    emptySubmodules: 'Aucun sous-module configuré pour le moment.',
    emptyHighlights: 'Ajoutez des actions à ce module pour les retrouver ici.',
    breadcrumbPrefix: 'Pilotage',
    lastUpdated: 'Dernière mise à jour :',
    themeLight: 'Mode clair',
    themeDark: 'Mode sombre',
    languageToFrench: 'Basculer l\'interface en français',
    languageToEnglish: 'Switch interface to English',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    collapseSidebar: 'Réduire la barre latérale',
    expandSidebar: 'Développer la barre latérale',
    userGreeting: 'Bienvenue Yassine Bouhlal, voici votre synthèse ESG.'
  },
  en: {
    welcomeTitle: 'Welcome',
    welcomeSubtitle: 'Access your ESG modules at a glance.',
    userRole: 'ESG Manager',
    modulesTitle: 'Modules',
    logout: 'Log out',
    submodulesTitle: 'Key sub-modules',
    highlightTitle: 'Priority actions',
    kpiTitle: 'Live KPIs',
    refresh: 'Refresh',
    emptySubmodules: 'No sub-modules configured yet.',
    emptyHighlights: 'Add actions to this module to track them here.',
    breadcrumbPrefix: 'Workspace',
    lastUpdated: 'Last updated:',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    languageToFrench: 'Afficher l\'interface en français',
    languageToEnglish: 'Switch interface to English',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    collapseSidebar: 'Collapse sidebar',
    expandSidebar: 'Expand sidebar',
    userGreeting: 'Welcome Yassine Bouhlal, here is your ESG summary.'
  }
};

const modules = [
  {
    id: 'main-kpis',
    icon: '📈',
    label: { fr: 'Main KPIs', en: 'Main KPIs' },
    tagline: { fr: 'Vue d’ensemble', en: 'Overview' },
    description: {
      fr: 'Visualisez vos KPIs clés en temps réel et pilotez vos alertes.',
      en: 'Visualise key KPIs in real time and manage alerts.'
    },
    highlights: [
      {
        fr: 'Consolidation E / S / G sur un tableau unique',
        en: 'Consolidated E / S / G on a single board'
      },
      {
        fr: 'Alertes en temps réel sur les dérives',
        en: 'Real-time alerts on deviations'
      },
      {
        fr: 'Widgets personnalisables par profil',
        en: 'Customisable widgets per profile'
      }
    ],
    subModules: [
      {
        id: 'kpi-env',
        label: { fr: 'Vue environnement', en: 'Environmental view' },
        description: {
          fr: 'Suivi des émissions, énergie et eau en un coup d’œil.',
          en: 'Track emissions, energy and water at a glance.'
        }
      },
      {
        id: 'kpi-social',
        label: { fr: 'Vue sociale', en: 'Social view' },
        description: {
          fr: 'Suivi des collaborateurs, formations et diversité.',
          en: 'Track employees, training and diversity.'
        }
      },
      {
        id: 'kpi-gov',
        label: { fr: 'Vue gouvernance', en: 'Governance view' },
        description: {
          fr: 'Tableaux de bord sur conformité et risques.',
          en: 'Dashboards on compliance and risks.'
        }
      },
      {
        id: 'kpi-targets',
        label: { fr: 'Comparatif objectifs', en: 'Targets comparison' },
        description: {
          fr: 'Comparez la trajectoire à vos objectifs annuels.',
          en: 'Compare trajectory to annual targets.'
        }
      }
    ],
    lastUpdated: '2024-06-12T06:20:00Z'
  },
  {
    id: 'data-entry',
    icon: '📝',
    label: { fr: 'Saisie de données', en: 'Data entry' },
    tagline: { fr: 'Workflow de collecte', en: 'Collection workflow' },
    description: {
      fr: 'Centralisez la collecte de données extra-financières via un workflow guidé.',
      en: 'Centralise ESG data collection with a guided workflow.'
    },
    highlights: [
      {
        fr: 'Suivi du workflow Agent → Super User → Admin',
        en: 'Track the Agent → Super User → Admin workflow'
      },
      {
        fr: 'Temps de saisie estimé : 10 à 20 min/mois',
        en: 'Estimated input time: 10 to 20 min/month'
      },
      {
        fr: 'Connexion possible avec vos ERP existants',
        en: 'Connect with existing ERP systems'
      }
    ],
    subModules: [
      {
        id: 'agent-entry',
        label: { fr: 'Agent de saisie', en: 'Data entry agent' },
        description: {
          fr: 'Capture des données brutes et pièces justificatives.',
          en: 'Capture raw data and supporting documents.'
        }
      },
      {
        id: 'super-user',
        label: { fr: 'Super User', en: 'Super user validation' },
        description: {
          fr: 'Vérifie, corrige et valide les données collectées.',
          en: 'Reviews, corrects and validates collected data.'
        }
      },
      {
        id: 'integration',
        label: { fr: 'Intégration ERP', en: 'ERP integration' },
        description: {
          fr: 'Synchronisation automatique avec vos systèmes externes.',
          en: 'Automatic synchronisation with external systems.'
        }
      },
      {
        id: 'imports',
        label: { fr: 'Imports normalisés', en: 'Standardised imports' },
        description: {
          fr: 'Importez des fichiers CSV/XLSX harmonisés en quelques clics.',
          en: 'Import harmonised CSV/XLSX files in a few clicks.'
        }
      }
    ],
    lastUpdated: '2024-06-12T08:30:00Z'
  },
  {
    id: 'filters',
    icon: '🎯',
    label: { fr: 'Filtres', en: 'Filters' },
    tagline: { fr: 'Affinez vos vues', en: 'Refine your views' },
    description: {
      fr: 'Affinez vos analyses par entité, périmètre et période.',
      en: 'Refine your analytics by entity, scope and period.'
    },
    highlights: [
      {
        fr: 'Filtrage par Business Unit, Activité, Filiale et Site',
        en: 'Filter by business unit, activity, subsidiary and site'
      },
      {
        fr: 'Sauvegarde de vues personnalisées',
        en: 'Save personalised views'
      },
      {
        fr: 'Application instantanée sur les rapports et tableaux de bord',
        en: 'Instant application on reports and dashboards'
      }
    ],
    subModules: [
      {
        id: 'filter-bu',
        label: { fr: 'Business Unit', en: 'Business unit' },
        description: {
          fr: 'Comparez vos performances par ligne d’activité.',
          en: 'Compare performance by line of business.'
        }
      },
      {
        id: 'filter-activity',
        label: { fr: 'Activité', en: 'Activity' },
        description: {
          fr: 'Analysez les indicateurs selon vos métiers.',
          en: 'Analyse indicators by core activities.'
        }
      },
      {
        id: 'filter-entity',
        label: { fr: 'Filiale', en: 'Subsidiary' },
        description: {
          fr: 'Suivez la contribution de chaque entité.',
          en: 'Track each legal entity’s contribution.'
        }
      },
      {
        id: 'filter-site',
        label: { fr: 'Site', en: 'Site' },
        description: {
          fr: 'Zoomez sur un site ou une usine spécifique.',
          en: 'Zoom in on a specific plant or site.'
        }
      },
      {
        id: 'filter-period',
        label: { fr: 'Période', en: 'Period' },
        description: {
          fr: 'Sélectionnez la période de reporting à comparer.',
          en: 'Select the reporting period to compare.'
        }
      }
    ],
    lastUpdated: '2024-06-11T15:10:00Z'
  },
  {
    id: 'data-management',
    icon: '🗂️',
    label: { fr: 'Gestion des données', en: 'Data management' },
    tagline: { fr: 'Consolidation automatique', en: 'Automated consolidation' },
    description: {
      fr: 'Croisez les données saisies avec vos référentiels et API internes.',
      en: 'Cross-check captured data with your internal references and APIs.'
    },
    highlights: [
      {
        fr: 'Croisement des données saisies et des ERP',
        en: 'Cross analysis between inputs and ERP data'
      },
      {
        fr: 'Contrôles qualité automatisés & alertes',
        en: 'Automated quality checks and alerts'
      },
      {
        fr: 'Exports API, CSV, PDF et Word',
        en: 'API, CSV, PDF and Word exports'
      }
    ],
    subModules: [
      {
        id: 'enrichment',
        label: { fr: 'Données complémentaires', en: 'Additional data' },
        description: {
          fr: 'Ajoutez des pièces jointes et données contextuelles.',
          en: 'Attach supporting documents and context data.'
        }
      },
      {
        id: 'workflow',
        label: { fr: 'Workflow', en: 'Workflow' },
        description: {
          fr: 'Visualisez les étapes de validation et les responsabilités.',
          en: 'Visualise validation steps and responsibilities.'
        }
      },
      {
        id: 'interop',
        label: { fr: 'Interopérabilité', en: 'Interoperability' },
        description: {
          fr: 'Connecteurs API vers vos outils métiers.',
          en: 'API connectors to your business tools.'
        }
      },
      {
        id: 'exports',
        label: { fr: 'Exports & API', en: 'Exports & APIs' },
        description: {
          fr: 'Automatisez les exports et la diffusion des rapports.',
          en: 'Automate exports and report distribution.'
        }
      }
    ],
    lastUpdated: '2024-06-09T09:15:00Z'
  },
  {
    id: 'indicators-e',
    icon: '🌿',
    label: { fr: 'Indicateurs E', en: 'E indicators' },
    tagline: { fr: 'Performance environnementale', en: 'Environmental performance' },
    description: {
      fr: 'Suivez vos KPIs environnementaux et leur alignement aux référentiels.',
      en: 'Monitor environmental KPIs and their alignment with standards.'
    },
    highlights: [
      {
        fr: 'Empreinte carbone multi-scopes',
        en: 'Multi-scope carbon footprint tracking'
      },
      {
        fr: 'Suivi énergie et eau quasi temps réel',
        en: 'Near real-time energy and water monitoring'
      },
      {
        fr: 'Alertes sur les dépassements d’objectifs',
        en: 'Alerts on objective deviations'
      }
    ],
    subModules: [
      {
        id: 'carbon',
        label: { fr: 'Empreinte carbone', en: 'Carbon footprint' },
        description: {
          fr: 'Mesure des scopes 1, 2 et 3 avec suivi mensuel.',
          en: 'Measure scopes 1, 2 and 3 with monthly tracking.'
        }
      },
      {
        id: 'energy',
        label: { fr: 'Gestion de l\'énergie', en: 'Energy management' },
        description: {
          fr: 'Suivi de la consommation, des économies et du mix énergétique.',
          en: 'Track consumption, savings and energy mix.'
        }
      },
      {
        id: 'water',
        label: { fr: 'Gestion de l\'eau', en: 'Water management' },
        description: {
          fr: 'Contrôlez les volumes prélevés et retraités.',
          en: 'Control withdrawal and treatment volumes.'
        }
      },
      {
        id: 'waste',
        label: { fr: 'Gestion des déchets', en: 'Waste management' },
        description: {
          fr: 'Suivez le tri, le recyclage et la valorisation.',
          en: 'Monitor sorting, recycling and recovery.'
        }
      }
    ],
    lastUpdated: '2024-06-13T07:55:00Z'
  },
  {
    id: 'indicators-s',
    icon: '🤝',
    label: { fr: 'Indicateurs S', en: 'S indicators' },
    tagline: { fr: 'Impact social', en: 'Social impact' },
    description: {
      fr: 'Mesurez l’engagement social et RH de vos collaborateurs.',
      en: 'Measure your teams’ social and HR engagement.'
    },
    highlights: [
      {
        fr: 'Suivi des formations et compétences clés',
        en: 'Track key trainings and skills'
      },
      {
        fr: 'Monitoring santé, sécurité et bien-être',
        en: 'Monitor health, safety and wellbeing'
      },
      {
        fr: 'Analyse de la diversité & inclusion',
        en: 'Analyse diversity and inclusion'
      }
    ],
    subModules: [
      {
        id: 'engagement',
        label: { fr: 'Engagement collaborateurs', en: 'Employee engagement' },
        description: {
          fr: 'Mesurez la satisfaction et l\'adhésion aux initiatives RSE.',
          en: 'Measure satisfaction and buy-in to ESG initiatives.'
        }
      },
      {
        id: 'training',
        label: { fr: 'Formation & compétences', en: 'Training & skills' },
        description: {
          fr: 'Suivi des plans de formation et des certifications.',
          en: 'Track training plans and certifications.'
        }
      },
      {
        id: 'health-safety',
        label: { fr: 'Santé & sécurité', en: 'Health & safety' },
        description: {
          fr: 'Taux de fréquence, gravité et actions préventives.',
          en: 'Frequency & severity rates and preventive actions.'
        }
      },
      {
        id: 'diversity',
        label: { fr: 'Diversité & inclusion', en: 'Diversity & inclusion' },
        description: {
          fr: 'Suivez la mixité, l\'égalité salariale et l\'inclusion.',
          en: 'Monitor parity, pay equity and inclusion.'
        }
      }
    ],
    lastUpdated: '2024-06-10T11:05:00Z'
  },
  {
    id: 'indicators-g',
    icon: '🛡️',
    label: { fr: 'Indicateurs G', en: 'G indicators' },
    tagline: { fr: 'Gouvernance responsable', en: 'Responsible governance' },
    description: {
      fr: 'Pilotez vos indicateurs de gouvernance et de conformité.',
      en: 'Steer your governance and compliance indicators.'
    },
    highlights: [
      {
        fr: 'Suivi des incidents d’éthique et de conformité',
        en: 'Track ethics and compliance incidents'
      },
      {
        fr: 'Cartographie des risques et plans d’actions',
        en: 'Risk mapping and action plans'
      },
      {
        fr: 'Gestion des parties prenantes clés',
        en: 'Stakeholder management overview'
      }
    ],
    subModules: [
      {
        id: 'ethics',
        label: { fr: 'Éthique & conformité', en: 'Ethics & compliance' },
        description: {
          fr: 'Suivi des codes de conduite et incidents déclarés.',
          en: 'Monitor codes of conduct and reported incidents.'
        }
      },
      {
        id: 'risks',
        label: { fr: 'Gestion des risques', en: 'Risk management' },
        description: {
          fr: 'Évaluez et priorisez vos risques ESG.',
          en: 'Assess and prioritise ESG risks.'
        }
      },
      {
        id: 'stakeholders',
        label: { fr: 'Parties prenantes', en: 'Stakeholders' },
        description: {
          fr: 'Cartographie et suivi des engagements clés.',
          en: 'Map and follow key stakeholder commitments.'
        }
      },
      {
        id: 'governance',
        label: { fr: 'Comités & décisions', en: 'Committees & decisions' },
        description: {
          fr: 'Suivi des comités, résolutions et décisions.',
          en: 'Track committees, resolutions and decisions.'
        }
      }
    ],
    lastUpdated: '2024-06-08T14:20:00Z'
  },
  {
    id: 'alignment',
    icon: '📚',
    label: { fr: 'Alignement RSE', en: 'ESG alignment' },
    tagline: { fr: 'Référentiels & ODD', en: 'Frameworks & SDGs' },
    description: {
      fr: 'Cartographiez vos actions aux référentiels GRI, CSRD et ODD.',
      en: 'Map your actions to the GRI, CSRD and SDG frameworks.'
    },
    highlights: [
      {
        fr: 'Matrice d’alignement aux indicateurs GRI',
        en: 'Alignment matrix with GRI indicators'
      },
      {
        fr: 'Couverture des objectifs de développement durable',
        en: 'Coverage of the Sustainable Development Goals'
      },
      {
        fr: 'Plan d’actions recommandé selon les écarts',
        en: 'Recommended action plan based on gaps'
      }
    ],
    subModules: [
      {
        id: 'gri',
        label: { fr: 'Référentiel GRI', en: 'GRI framework' },
        description: {
          fr: 'Visualisez la conformité à chaque indicateur GRI.',
          en: 'Visualise compliance for each GRI indicator.'
        }
      },
      {
        id: 'sdg',
        label: { fr: 'ODD / SDG', en: 'SDGs' },
        description: {
          fr: 'Mesurez la contribution aux objectifs de l’ONU.',
          en: 'Measure contribution to UN goals.'
        }
      },
      {
        id: 'csrd',
        label: { fr: 'CSRD', en: 'CSRD' },
        description: {
          fr: 'Préparez la conformité aux exigences européennes.',
          en: 'Prepare compliance with EU requirements.'
        }
      },
      {
        id: 'action-plan',
        label: { fr: 'Plans d’actions', en: 'Action plans' },
        description: {
          fr: 'Priorisez vos initiatives correctives.',
          en: 'Prioritise corrective initiatives.'
        }
      }
    ],
    lastUpdated: '2024-06-07T10:40:00Z'
  },
  {
    id: 'rse-report',
    icon: '📄',
    label: { fr: 'Rapport RSE', en: 'ESG annual report' },
    tagline: { fr: 'Rapports annuels', en: 'Annual reports' },
    description: {
      fr: 'Générez vos rapports extra-financiers personnalisés en PDF ou Word.',
      en: 'Generate customised ESG reports in PDF or Word.'
    },
    highlights: [
      {
        fr: 'Templates adaptatifs par référentiel (GRI, CSRD, ODD)',
        en: 'Adaptive templates per framework (GRI, CSRD, SDGs)'
      },
      {
        fr: 'Exports PDF et Word prêts à partager',
        en: 'PDF and Word exports ready to share'
      },
      {
        fr: 'Automatisation des mises à jour annuelles',
        en: 'Automated yearly updates'
      }
    ],
    subModules: [
      {
        id: 'report-framework',
        label: { fr: 'Choix du référentiel', en: 'Framework selection' },
        description: {
          fr: 'Sélectionnez GRI, CSRD ou autre référentiel.',
          en: 'Select GRI, CSRD or another framework.'
        }
      },
      {
        id: 'report-period',
        label: { fr: 'Période de couverture', en: 'Coverage period' },
        description: {
          fr: 'Définissez la période Mois/Année à Mois/Année.',
          en: 'Define the period Month/Year to Month/Year.'
        }
      },
      {
        id: 'report-template',
        label: { fr: 'Template personnalisable', en: 'Custom template' },
        description: {
          fr: 'Adaptez vos sections, graphiques et commentaires.',
          en: 'Adapt sections, charts and narratives.'
        }
      },
      {
        id: 'report-export',
        label: { fr: 'Export automatique', en: 'Automatic export' },
        description: {
          fr: 'Générez des livrables PDF et Word instantanément.',
          en: 'Generate PDF and Word deliverables instantly.'
        }
      }
    ],
    lastUpdated: '2024-06-05T16:25:00Z'
  },
  {
    id: 'performance-report',
    icon: '📊',
    label: { fr: 'Rapport de performances', en: 'Performance report' },
    tagline: { fr: 'Comparatifs N / N-1', en: 'Year-over-year comparisons' },
    description: {
      fr: 'Comparez vos performances RSE sur les périodes clés et exportez vos analyses.',
      en: 'Compare ESG performance across key periods and export analyses.'
    },
    highlights: [
      {
        fr: 'Tableaux comparatifs prêts à l’emploi',
        en: 'Ready-to-use comparison tables'
      },
      {
        fr: 'Analyse des écarts entre N et N-1',
        en: 'Gap analysis between current and previous periods'
      },
      {
        fr: 'Exports multi-formats (PDF & TXT)',
        en: 'Multi-format exports (PDF & TXT)'
      }
    ],
    subModules: [
      {
        id: 'perf-filters',
        label: { fr: 'Sélection des filtres', en: 'Filter selection' },
        description: {
          fr: 'Choisissez les axes de comparaison pertinents.',
          en: 'Choose the relevant comparison axes.'
        }
      },
      {
        id: 'perf-tables',
        label: { fr: 'Tableaux comparatifs', en: 'Comparison tables' },
        description: {
          fr: 'Visualisez les écarts par indicateur et module.',
          en: 'Visualise gaps per indicator and module.'
        }
      },
      {
        id: 'perf-analysis',
        label: { fr: 'Analyse des écarts', en: 'Gap analysis' },
        description: {
          fr: 'Identifiez les leviers d’amélioration prioritaires.',
          en: 'Identify priority improvement levers.'
        }
      },
      {
        id: 'perf-export',
        label: { fr: 'Exports', en: 'Exports' },
        description: {
          fr: 'Exportez vos rapports en PDF ou TXT comparatifs.',
          en: 'Export comparative reports in PDF or TXT.'
        }
      }
    ],
    lastUpdated: '2024-06-04T13:45:00Z'
  },
  {
    id: 'settings',
    icon: '⚙️',
    label: { fr: 'Paramètres', en: 'Settings' },
    tagline: { fr: 'Configuration', en: 'Configuration' },
    description: {
      fr: 'Administrez les accès, objectifs et notifications de votre organisation.',
      en: 'Manage access, targets and notifications for your organisation.'
    },
    highlights: [
      {
        fr: 'Gestion des utilisateurs et rôles',
        en: 'Manage users and roles'
      },
      {
        fr: 'Paramétrage des objectifs et indicateurs clés',
        en: 'Configure objectives and key indicators'
      },
      {
        fr: 'Notifications ciblées par profil',
        en: 'Targeted notifications by profile'
      }
    ],
    subModules: [
      {
        id: 'profile',
        label: { fr: 'Profil', en: 'Profile' },
        description: {
          fr: 'Mettez à jour vos informations et préférences.',
          en: 'Update your information and preferences.'
        }
      },
      {
        id: 'organisation',
        label: { fr: 'Organisation', en: 'Organisation' },
        description: {
          fr: 'Définissez l’arborescence sites / filiales / BU.',
          en: 'Define the structure of sites / subsidiaries / BUs.'
        }
      },
      {
        id: 'subscription',
        label: { fr: 'Abonnements', en: 'Subscriptions' },
        description: {
          fr: 'Pilotez vos accès et modules souscrits.',
          en: 'Manage access and subscribed modules.'
        }
      },
      {
        id: 'notifications',
        label: { fr: 'Notifications', en: 'Notifications' },
        description: {
          fr: 'Choisissez vos alertes mails & in-app.',
          en: 'Select email and in-app alerts.'
        }
      },
      {
        id: 'objectives',
        label: { fr: 'Objectifs', en: 'Targets' },
        description: {
          fr: 'Créez des objectifs par indicateur et suivez-les.',
          en: 'Create targets per indicator and track them.'
        }
      }
    ],
    lastUpdated: '2024-06-03T12:00:00Z'
  }
];

const kpis = [
  {
    id: 'carbon-kpi',
    icon: '🌿',
    value: '-12%',
    label: { fr: 'Empreinte carbone', en: 'Carbon footprint' },
    detail: {
      fr: 'vs N-1 (Scopes 1 & 2)',
      en: 'vs previous year (Scopes 1 & 2)'
    },
    trend: 'positive'
  },
  {
    id: 'energy-kpi',
    icon: '⚡',
    value: '245 MWh',
    label: { fr: 'Énergie optimisée', en: 'Energy optimised' },
    detail: {
      fr: 'Économie cumulée',
      en: 'Cumulative savings'
    },
    trend: 'positive'
  },
  {
    id: 'training-kpi',
    icon: '🎓',
    value: '92%',
    label: { fr: 'Formation complétée', en: 'Training completion' },
    detail: {
      fr: 'Collaborateurs formés',
      en: 'Employees trained'
    },
    trend: 'neutral'
  },
  {
    id: 'ethics-kpi',
    icon: '🛡️',
    value: '0',
    label: { fr: 'Incidents d’éthique', en: 'Ethics incidents' },
    detail: {
      fr: 'Déclarés ce trimestre',
      en: 'Reported this quarter'
    },
    trend: 'positive'
  }
];

const elements = {
  body: document.body,
  sidebar: document.getElementById('sidebar'),
  sidebarBackdrop: document.getElementById('sidebarBackdrop'),
  moduleList: document.getElementById('moduleList'),
  sidebarToggle: document.getElementById('sidebarToggle'),
  mobileSidebarToggle: document.getElementById('mobileSidebarToggle'),
  themeToggle: document.getElementById('themeToggle'),
  languageToggle: document.getElementById('languageToggle'),
  contentTitle: document.getElementById('contentTitle'),
  contentDescription: document.getElementById('contentDescription'),
  contentBreadcrumb: document.getElementById('contentBreadcrumb'),
  contentGreeting: document.getElementById('contentGreeting'),
  submoduleGrid: document.getElementById('submoduleGrid'),
  highlightList: document.getElementById('highlightList'),
  kpiGrid: document.getElementById('kpiGrid'),
  contentUpdate: document.getElementById('contentUpdate'),
  refreshButton: document.getElementById('refreshButton')
};

const state = {
  language: 'fr',
  theme: 'light',
  sidebarCollapsed: false,
  activeModuleId: modules[0]?.id ?? null,
  lastUpdated: new Date()
};

function init() {
  hydratePreferences();
  renderModuleList();
  renderKpis();
  updateStaticTexts();
  updateThemeToggle();
  updateLanguageToggle();
  updateContent();
  updateSidebarState();
  updateMobileToggle();
  updateTimestamp();
  bindEvents();
}

function hydratePreferences() {
  const storedLanguage = window.localStorage?.getItem('ecopilot-lang');
  const storedTheme = window.localStorage?.getItem('ecopilot-theme');
  if (storedLanguage && (storedLanguage === 'fr' || storedLanguage === 'en')) {
    state.language = storedLanguage;
    document.body.dataset.language = storedLanguage;
  }
  if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
    state.theme = storedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    state.theme = 'dark';
  }
  document.body.dataset.theme = state.theme;
}

function bindEvents() {
  elements.sidebarToggle.addEventListener('click', () => toggleSidebar());
  elements.mobileSidebarToggle.addEventListener('click', () => toggleSidebar(false));
  elements.sidebarBackdrop.addEventListener('click', () => toggleSidebar(true));
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.languageToggle.addEventListener('click', toggleLanguage);
  elements.refreshButton.addEventListener('click', handleRefresh);
  window.addEventListener('resize', updateMobileToggle);
}

function renderModuleList() {
  elements.moduleList.innerHTML = '';
  modules.forEach((module) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `module-item${module.id === state.activeModuleId ? ' active' : ''}`;
    button.dataset.id = module.id;
    button.setAttribute('aria-label', module.label[state.language]);

    const icon = document.createElement('span');
    icon.className = 'module-icon';
    icon.textContent = module.icon;

    const textWrapper = document.createElement('span');
    textWrapper.className = 'module-text';

    const label = document.createElement('span');
    label.className = 'module-label';
    label.textContent = module.label[state.language];

    const tagline = document.createElement('span');
    tagline.className = 'module-tagline';
    tagline.textContent = module.tagline?.[state.language] ?? '';

    textWrapper.append(label, tagline);
    button.append(icon, textWrapper);

    if (Array.isArray(module.subModules) && module.subModules.length) {
      const popover = document.createElement('div');
      popover.className = 'submodule-popover';
      const list = document.createElement('ul');

      module.subModules.forEach((subModule) => {
        const listItem = document.createElement('li');
        const title = document.createElement('strong');
        title.textContent = subModule.label[state.language];
        listItem.appendChild(title);
        if (subModule.description) {
          const desc = document.createElement('span');
          desc.textContent = subModule.description[state.language];
          listItem.appendChild(desc);
        }
        list.appendChild(listItem);
      });

      popover.appendChild(list);
      button.appendChild(popover);
    }

    button.addEventListener('click', () => {
      if (state.activeModuleId !== module.id) {
        state.activeModuleId = module.id;
        updateContent();
        renderModuleList();
      }
      if (window.matchMedia('(max-width: 900px)').matches) {
        toggleSidebar(true);
      }
    });

    elements.moduleList.appendChild(button);
  });
}

function renderKpis() {
  elements.kpiGrid.innerHTML = '';
  kpis.forEach((kpi) => {
    const card = document.createElement('article');
    card.className = `kpi-card ${kpi.trend}`;

    const header = document.createElement('div');
    header.className = 'kpi-header';

    const icon = document.createElement('span');
    icon.className = 'kpi-icon';
    icon.textContent = kpi.icon;

    const label = document.createElement('span');
    label.className = 'kpi-label';
    label.textContent = kpi.label[state.language];

    header.append(icon, label);

    const value = document.createElement('span');
    value.className = 'kpi-value';
    value.textContent = kpi.value;

    const trend = document.createElement('span');
    trend.className = 'kpi-trend';
    trend.textContent = kpi.detail[state.language];

    card.append(header, value, trend);
    elements.kpiGrid.appendChild(card);
  });
}

function updateContent() {
  const activeModule = modules.find((module) => module.id === state.activeModuleId) ?? modules[0];
  if (!activeModule) return;

  elements.contentTitle.textContent = activeModule.label[state.language];
  elements.contentDescription.textContent = activeModule.description[state.language];
  elements.contentBreadcrumb.textContent = `${uiText[state.language].breadcrumbPrefix} · ${activeModule.label[state.language]}`;
  elements.contentGreeting.textContent = uiText[state.language].userGreeting;

  renderSubModules(activeModule);
  renderHighlights(activeModule);
  updateTimestamp(activeModule.lastUpdated);
}

function renderSubModules(activeModule) {
  elements.submoduleGrid.innerHTML = '';
  if (!activeModule.subModules || !activeModule.subModules.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = uiText[state.language].emptySubmodules;
    elements.submoduleGrid.appendChild(empty);
    return;
  }

  activeModule.subModules.forEach((subModule) => {
    const card = document.createElement('article');
    card.className = 'submodule-card';

    const title = document.createElement('h3');
    title.textContent = subModule.label[state.language];

    const description = document.createElement('p');
    description.textContent = subModule.description?.[state.language] ?? '';

    card.append(title, description);
    elements.submoduleGrid.appendChild(card);
  });
}

function renderHighlights(activeModule) {
  elements.highlightList.innerHTML = '';
  if (!activeModule.highlights || !activeModule.highlights.length) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = uiText[state.language].emptyHighlights;
    elements.highlightList.appendChild(empty);
    return;
  }

  activeModule.highlights.forEach((highlight) => {
    const item = document.createElement('li');
    item.textContent = highlight[state.language];
    elements.highlightList.appendChild(item);
  });
}

function updateStaticTexts() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = uiText[state.language][key];
    if (translation) {
      element.textContent = translation;
    }
  });
}

function updateThemeToggle() {
  const label = elements.themeToggle.querySelector('.label');
  const icon = elements.themeToggle.querySelector('.icon');
  if (state.theme === 'dark') {
    icon.textContent = '🌞';
    label.textContent = uiText[state.language].themeLight;
  } else {
    icon.textContent = '🌙';
    label.textContent = uiText[state.language].themeDark;
  }
}

function updateLanguageToggle() {
  const label = elements.languageToggle.querySelector('.label');
  const icon = elements.languageToggle.querySelector('.icon');
  if (state.language === 'fr') {
    icon.textContent = '🇫🇷';
    label.textContent = 'FR';
    elements.languageToggle.setAttribute('aria-label', uiText.fr.languageToEnglish);
    elements.languageToggle.setAttribute('title', uiText.fr.languageToEnglish);
  } else {
    icon.textContent = '🇬🇧';
    label.textContent = 'EN';
    elements.languageToggle.setAttribute('aria-label', uiText.en.languageToFrench);
    elements.languageToggle.setAttribute('title', uiText.en.languageToFrench);
  }
}

function updateTimestamp(lastUpdatedFromModule) {
  if (lastUpdatedFromModule) {
    state.lastUpdated = new Date(lastUpdatedFromModule);
  }
  const formatted = new Intl.DateTimeFormat(state.language === 'fr' ? 'fr-FR' : 'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(state.lastUpdated);
  elements.contentUpdate.textContent = `${uiText[state.language].lastUpdated} ${formatted}`;
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.body.dataset.theme = state.theme;
  window.localStorage?.setItem('ecopilot-theme', state.theme);
  updateThemeToggle();
}

function toggleLanguage() {
  state.language = state.language === 'fr' ? 'en' : 'fr';
  document.body.dataset.language = state.language;
  window.localStorage?.setItem('ecopilot-lang', state.language);
  updateStaticTexts();
  renderModuleList();
  renderKpis();
  updateThemeToggle();
  updateLanguageToggle();
  updateContent();
  updateSidebarState();
}

function toggleSidebar(forceCollapse) {
  if (typeof forceCollapse === 'boolean') {
    state.sidebarCollapsed = forceCollapse;
  } else {
    state.sidebarCollapsed = !state.sidebarCollapsed;
  }
  updateSidebarState();
}

function updateSidebarState() {
  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  elements.sidebar.classList.toggle('collapsed', state.sidebarCollapsed);

  elements.sidebarBackdrop.classList.toggle('visible', isMobile && !state.sidebarCollapsed);

  const sidebarLabelKey = state.sidebarCollapsed ? 'expandSidebar' : 'collapseSidebar';
  elements.sidebarToggle.setAttribute('aria-label', uiText[state.language][sidebarLabelKey]);
  elements.sidebarToggle.setAttribute('title', uiText[state.language][sidebarLabelKey]);

  updateMobileToggle();
}

function updateMobileToggle() {
  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  if (!isMobile) {
    elements.mobileSidebarToggle.setAttribute('aria-hidden', 'true');
    elements.mobileSidebarToggle.style.visibility = 'hidden';
    elements.mobileSidebarToggle.style.pointerEvents = 'none';
    return;
  }
  elements.mobileSidebarToggle.setAttribute('aria-hidden', 'false');
  elements.mobileSidebarToggle.style.visibility = 'visible';
  elements.mobileSidebarToggle.style.pointerEvents = 'auto';
  const ariaKey = state.sidebarCollapsed ? 'openMenu' : 'closeMenu';
  elements.mobileSidebarToggle.setAttribute('aria-label', uiText[state.language][ariaKey]);
  elements.mobileSidebarToggle.setAttribute('title', uiText[state.language][ariaKey]);
  const iconSpan = elements.mobileSidebarToggle.querySelector('.icon');
  iconSpan.textContent = state.sidebarCollapsed ? '☰' : '✕';
}

function handleRefresh() {
  state.lastUpdated = new Date();
  const activeModule = modules.find((module) => module.id === state.activeModuleId);
  if (activeModule) {
    activeModule.lastUpdated = state.lastUpdated.toISOString();
  }
  updateTimestamp(state.lastUpdated);
  elements.refreshButton.classList.add('is-pressed');
  setTimeout(() => elements.refreshButton.classList.remove('is-pressed'), 250);
}

init();
