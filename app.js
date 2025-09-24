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
        fr: 'Filtrage par Business Unit, Activité, Filiale, Société et Site',
        en: 'Filter by business unit, activity, subsidiary, company and site'
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
        id: 'filter-company',
        label: { fr: 'Société', en: 'Company' },
        description: {
          fr: 'Analysez vos KPIs par société légale ou groupe.',
          en: 'Analyse KPIs by legal company or group.'
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
    id: 'indicators-esg',
    icon: '📊',
    label: { fr: 'Indicateurs ESG', en: 'ESG indicators' },
    tagline: { fr: 'Main KPIs', en: 'Main KPIs' },
    description: {
      fr: 'Pilotez vos indicateurs environnementaux, sociaux et de gouvernance sur un tableau unifié.',
      en: 'Steer environmental, social and governance indicators in a unified board.'
    },
    highlights: [
      {
        fr: 'Vue consolidée E / S / G avec graphiques interactifs',
        en: 'Consolidated E / S / G view with interactive charts'
      },
      {
        fr: 'Alertes immédiates sur les dérives ESG',
        en: 'Immediate alerts on ESG drifts'
      },
      {
        fr: 'Comparaisons par référentiel et objectifs internes',
        en: 'Comparisons against frameworks and internal targets'
      }
    ],
    subModules: [
      {
        id: 'esg-e',
        label: { fr: 'Indicateurs E', en: 'E indicators' },
        description: {
          fr: 'Gestion de l’énergie, de l’eau et des déchets.',
          en: 'Energy, water and waste management.'
        }
      },
      {
        id: 'esg-s',
        label: { fr: 'Indicateurs S', en: 'S indicators' },
        description: {
          fr: 'Social & sociétal, climat social et capital humain.',
          en: 'Social & societal, employee climate and human capital.'
        }
      },
      {
        id: 'esg-g',
        label: { fr: 'Indicateurs G', en: 'G indicators' },
        description: {
          fr: 'Gouvernance, conformité et pilotage des risques.',
          en: 'Governance, compliance and risk steering.'
        }
      },
      {
        id: 'esg-dashboards',
        label: { fr: 'Analyses dynamiques', en: 'Dynamic analytics' },
        description: {
          fr: 'KPIs détaillés par BU, société, site et période.',
          en: 'Detailed KPIs by BU, company, site and period.'
        }
      }
    ],
    lastUpdated: '2024-06-13T07:45:00Z'
  },
  {
    id: 'carbon-footprint',
    icon: '🌍',
    label: { fr: 'Bilan carbone', en: 'Carbon footprint' },
    tagline: { fr: 'Calcul multi-scopes', en: 'Multi-scope tracking' },
    description: {
      fr: 'Quantifiez vos émissions Scopes 1, 2 et 3 et suivez vos plans de réduction.',
      en: 'Quantify your Scope 1, 2 and 3 emissions and track reduction plans.'
    },
    highlights: [
      {
        fr: 'Tableau de bord dédié par scope et périmètre',
        en: 'Dedicated dashboard by scope and boundary'
      },
      {
        fr: 'Facteurs d’émission maintenus à jour automatiquement',
        en: 'Emission factors kept automatically up to date'
      },
      {
        fr: 'Simulations d’actions et trajectoires bas carbone',
        en: 'Action simulations and low-carbon trajectories'
      }
    ],
    subModules: [
      {
        id: 'carbon-scopes',
        label: { fr: 'Scopes 1, 2 & 3', en: 'Scopes 1, 2 & 3' },
        description: {
          fr: 'Suivi des émissions directes, indirectes et amont/aval.',
          en: 'Track direct, indirect and upstream/downstream emissions.'
        }
      },
      {
        id: 'carbon-drivers',
        label: { fr: 'Facteurs d’émission', en: 'Emission factors' },
        description: {
          fr: 'Bibliothèque paramétrable par activité et énergie.',
          en: 'Configurable library per activity and energy source.'
        }
      },
      {
        id: 'carbon-scenarios',
        label: { fr: 'Scénarios & plans d’action', en: 'Scenarios & action plans' },
        description: {
          fr: 'Projetez vos réductions et mesurez l’impact des plans.',
          en: 'Project reductions and measure plan impacts.'
        }
      },
      {
        id: 'carbon-reporting',
        label: { fr: 'Reporting réglementaire', en: 'Regulatory reporting' },
        description: {
          fr: 'Exports conformes GHG Protocol, BEGES, CSRD.',
          en: 'Exports compliant with GHG Protocol, BEGES, CSRD.'
        }
      }
    ],
    lastUpdated: '2024-06-12T18:05:00Z'
  },
  {
    id: 'alignment',
    icon: '📚',
    label: { fr: 'Alignement référentiel', en: 'Framework alignment' },
    tagline: { fr: 'Référentiels & ODD', en: 'Frameworks & SDGs' },
    description: {
      fr: 'Cartographiez vos actions aux référentiels GRI, CSRD et ODD.',
      en: 'Map your actions to the GRI, CSRD and SDG frameworks.'
    },
    highlights: [
      {
        fr: 'Matrice d’alignement multi-référentiels (GRI, CSRD, ODD)',
        en: 'Multi-framework alignment matrix (GRI, CSRD, SDGs)'
      },
      {
        fr: 'Suivi des obligations réglementaires par périmètre',
        en: 'Track regulatory obligations per scope'
      },
      {
        fr: 'Plans d’actions recommandés selon les écarts détectés',
        en: 'Recommended action plans based on detected gaps'
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
    id: 'energy-management',
    icon: '⚡',
    label: { fr: 'Gestion énergie', en: 'Energy management' },
    tagline: { fr: 'Optimisation opérationnelle', en: 'Operational optimisation' },
    description: {
      fr: 'Optimisez vos consommations d’énergie, d’eau et de ressources sur l’ensemble de vos sites.',
      en: 'Optimise energy, water and resource consumption across your sites.'
    },
    highlights: [
      {
        fr: 'Monitoring temps réel des consommations multi-énergies',
        en: 'Real-time monitoring of multi-energy consumption'
      },
      {
        fr: 'Alertes intelligentes sur les dérives de consommation',
        en: 'Smart alerts on consumption drifts'
      },
      {
        fr: 'Pilotage des plans d’efficacité énergétique',
        en: 'Steering of energy efficiency plans'
      }
    ],
    subModules: [
      {
        id: 'energy-dashboards',
        label: { fr: 'Tableaux de bord énergie', en: 'Energy dashboards' },
        description: {
          fr: 'Visualisez les consommations par site, BU et période.',
          en: 'Visualise consumption by site, BU and period.'
        }
      },
      {
        id: 'energy-water',
        label: { fr: 'Gestion de l’eau', en: 'Water management' },
        description: {
          fr: 'Suivez prélèvements, rejets et conformité réglementaire.',
          en: 'Track withdrawals, discharges and regulatory compliance.'
        }
      },
      {
        id: 'energy-waste',
        label: { fr: 'Gestion des déchets', en: 'Waste management' },
        description: {
          fr: 'Mesurez tri, valorisation et coûts associés.',
          en: 'Measure sorting, recovery and associated costs.'
        }
      },
      {
        id: 'energy-iot',
        label: { fr: 'IoT & maintenance', en: 'IoT & maintenance' },
        description: {
          fr: 'Connectez vos capteurs pour anticiper les dérives.',
          en: 'Connect your sensors to anticipate drifts.'
        }
      }
    ],
    lastUpdated: '2024-06-11T09:30:00Z'
  },
  {
    id: 'rse-report',
    icon: '📄',
    label: { fr: 'Rapports RSE', en: 'ESG reports' },
    tagline: { fr: 'Rapports et analyses', en: 'Reports & analytics' },
    description: {
      fr: 'Générez vos rapports extra-financiers, comparatifs et narratifs en quelques clics.',
      en: 'Generate extra-financial, comparative and narrative reports in a few clicks.'
    },
    highlights: [
      {
        fr: 'Rapport annuel RSE personnalisable',
        en: 'Customisable annual ESG report'
      },
      {
        fr: 'Comparatifs automatiques N vs N-1',
        en: 'Automatic year-over-year comparisons'
      },
      {
        fr: 'Exports PDF, Word et PPT prêts à l’emploi',
        en: 'PDF, Word and PPT exports ready to use'
      }
    ],
    subModules: [
      {
        id: 'report-annual',
        label: { fr: 'Rapport annuel RSE', en: 'Annual ESG report' },
        description: {
          fr: 'Structurez votre rapport selon les référentiels cibles.',
          en: 'Structure the report according to target frameworks.'
        }
      },
      {
        id: 'report-performance',
        label: { fr: 'Tableaux de performance', en: 'Performance tables' },
        description: {
          fr: 'Comparez N / N-1 et visualisez les écarts majeurs.',
          en: 'Compare YoY results and visualise major gaps.'
        }
      },
      {
        id: 'report-commentary',
        label: { fr: 'Commentaires & storytelling', en: 'Commentary & storytelling' },
        description: {
          fr: 'Ajoutez des analyses qualitatives et plans d’action.',
          en: 'Add qualitative insights and action plans.'
        }
      },
      {
        id: 'report-exports',
        label: { fr: 'Exports multi-formats', en: 'Multi-format exports' },
        description: {
          fr: 'Diffusez vos livrables en PDF, Word et PPT.',
          en: 'Distribute deliverables in PDF, Word and PPT.'
        }
      }
    ],
    lastUpdated: '2024-06-06T12:15:00Z'
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
  activeModuleId: modules.find((module) => module.id === 'indicators-esg')?.id ?? modules[0]?.id ?? null,
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
