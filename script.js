const modules = [
  {
    id: 'dataEntry',
    icon: '📝',
    labels: {
      fr: 'Saisie de données',
      en: 'Data Entry',
    },
    summary: {
      fr: 'Collectez et validez les données RSE de vos équipes avec des formulaires guidés et des imports automatisés.',
      en: 'Collect and validate ESG data from your teams with guided forms and automated imports.',
    },
    subModules: [
      {
        id: 'capture',
        labels: {
          fr: 'Agent de saisie',
          en: 'Data capture agent',
        },
      },
      {
        id: 'validation',
        labels: {
          fr: 'Validation Super User',
          en: 'Super User validation',
        },
      },
      {
        id: 'integration',
        labels: {
          fr: 'Intégration Dashboard & Rapport',
          en: 'Dashboard & report integration',
        },
      },
    ],
    highlights: [
      {
        id: 'guided-forms',
        labels: {
          fr: 'Guidage par type d’activité',
          en: 'Guidance by activity type',
        },
      },
      {
        id: 'quality-check',
        labels: {
          fr: 'Contrôles qualité en temps réel',
          en: 'Real-time quality checks',
        },
      },
      {
        id: 'erp-sync',
        labels: {
          fr: 'Connexion ERP optionnelle',
          en: 'Optional ERP integration',
        },
      },
    ],
  },
  {
    id: 'filters',
    icon: '🎛️',
    labels: {
      fr: 'Filtres',
      en: 'Filters',
    },
    summary: {
      fr: 'Affinez votre lecture en filtrant par Business Unit, période, activité ou périmètre géographique.',
      en: 'Fine-tune insights by filtering per business unit, period, activity, or geographical scope.',
    },
    subModules: [
      {
        id: 'business-unit',
        labels: {
          fr: 'Business Unit',
          en: 'Business unit',
        },
      },
      {
        id: 'activity',
        labels: {
          fr: 'Activité',
          en: 'Activity',
        },
      },
      {
        id: 'timeframe',
        labels: {
          fr: 'Période (Mois / Année)',
          en: 'Time frame (Month / Year)',
        },
      },
    ],
    highlights: [
      {
        id: 'save-views',
        labels: {
          fr: 'Enregistrez vos vues favorites',
          en: 'Save your favorite views',
        },
      },
      {
        id: 'compare',
        labels: {
          fr: 'Comparaison N / N-1 instantanée',
          en: 'Instant N / N-1 comparison',
        },
      },
    ],
  },
  {
    id: 'indicatorE',
    icon: '🌿',
    labels: {
      fr: 'Indicateurs E',
      en: 'Environmental KPIs',
    },
    summary: {
      fr: 'Suivez vos indicateurs environnementaux clés pour piloter la décarbonation et l’efficacité énergétique.',
      en: 'Monitor key environmental indicators to drive decarbonization and energy efficiency.',
    },
    subModules: [
      {
        id: 'carbon',
        labels: {
          fr: 'Empreinte carbone',
          en: 'Carbon footprint',
        },
      },
      {
        id: 'energy',
        labels: {
          fr: "Gestion de l'énergie",
          en: 'Energy management',
        },
      },
      {
        id: 'water',
        labels: {
          fr: "Gestion de l'eau",
          en: 'Water management',
        },
      },
      {
        id: 'waste',
        labels: {
          fr: 'Gestion des déchets',
          en: 'Waste management',
        },
      },
    ],
    highlights: [
      {
        id: 'targets',
        labels: {
          fr: 'Objectifs SBTi & CSRD',
          en: 'SBTi & CSRD targets',
        },
      },
      {
        id: 'alerts',
        labels: {
          fr: 'Alertes consommation critiques',
          en: 'Critical consumption alerts',
        },
      },
      {
        id: 'benchmarks',
        labels: {
          fr: 'Benchmarks intra-groupe',
          en: 'Group-wide benchmarks',
        },
      },
    ],
  },
  {
    id: 'indicatorS',
    icon: '🤝',
    labels: {
      fr: 'Indicateurs S',
      en: 'Social KPIs',
    },
    summary: {
      fr: 'Mesurez l’impact social : capital humain, inclusion, santé et sécurité au travail.',
      en: 'Measure social impact: human capital, inclusion, health and safety at work.',
    },
    subModules: [
      {
        id: 'diversity',
        labels: {
          fr: 'Diversité & inclusion',
          en: 'Diversity & inclusion',
        },
      },
      {
        id: 'wellbeing',
        labels: {
          fr: 'Bien-être & sécurité',
          en: 'Wellbeing & safety',
        },
      },
      {
        id: 'training',
        labels: {
          fr: 'Formation continue',
          en: 'Continuous training',
        },
      },
      {
        id: 'engagement',
        labels: {
          fr: 'Engagement des équipes',
          en: 'Team engagement',
        },
      },
    ],
    highlights: [
      {
        id: 'gender-gap',
        labels: {
          fr: 'Suivi de l’index égalité',
          en: 'Gender equity index tracking',
        },
      },
      {
        id: 'absenteeism',
        labels: {
          fr: 'Analyse de l’absentéisme',
          en: 'Absenteeism analytics',
        },
      },
    ],
  },
  {
    id: 'indicatorG',
    icon: '🏛️',
    labels: {
      fr: 'Indicateurs G',
      en: 'Governance KPIs',
    },
    summary: {
      fr: 'Pilotez les engagements de gouvernance : éthique, conformité et gestion des risques.',
      en: 'Steer governance commitments: ethics, compliance, and risk management.',
    },
    subModules: [
      {
        id: 'ethics',
        labels: {
          fr: 'Éthique & conformité',
          en: 'Ethics & compliance',
        },
      },
      {
        id: 'risk',
        labels: {
          fr: 'Gestion des risques',
          en: 'Risk management',
        },
      },
      {
        id: 'board',
        labels: {
          fr: 'Gouvernance & conseil',
          en: 'Governance & board',
        },
      },
      {
        id: 'transparency',
        labels: {
          fr: 'Transparence & reporting',
          en: 'Transparency & reporting',
        },
      },
    ],
    highlights: [
      {
        id: 'compliance',
        labels: {
          fr: 'Suivi conformité réglementaire',
          en: 'Regulatory compliance tracking',
        },
      },
      {
        id: 'incidents',
        labels: {
          fr: 'Registre incidents & actions',
          en: 'Incident & action register',
        },
      },
    ],
  },
  {
    id: 'alignment',
    icon: '🧭',
    labels: {
      fr: 'Alignement RSE',
      en: 'ESG Alignment',
    },
    summary: {
      fr: 'Alignez vos engagements avec les référentiels GRI, ODD/SDG et les standards CSRD.',
      en: 'Align your commitments with GRI, SDGs, and CSRD standards.',
    },
    subModules: [
      {
        id: 'gri-odd',
        labels: {
          fr: 'Cartographie GRI ↔ ODD',
          en: 'GRI ↔ SDG mapping',
        },
      },
      {
        id: 'roadmap',
        labels: {
          fr: 'Feuille de route actions',
          en: 'Action roadmap',
        },
      },
      {
        id: 'maturity',
        labels: {
          fr: 'Suivi de maturité',
          en: 'Maturity tracking',
        },
      },
    ],
    highlights: [
      {
        id: 'gap-analysis',
        labels: {
          fr: 'Analyse des écarts automatique',
          en: 'Automated gap analysis',
        },
      },
      {
        id: 'action-tracking',
        labels: {
          fr: 'Plan d’action collaboratif',
          en: 'Collaborative action plan',
        },
      },
    ],
  },
  {
    id: 'reports',
    icon: '📊',
    labels: {
      fr: 'Rapports RSE',
      en: 'ESG Reports',
    },
    summary: {
      fr: 'Générez des rapports PDF, Word ou exports data adaptés à vos référentiels et à vos audiences.',
      en: 'Generate PDF, Word, or data exports tailored to your frameworks and stakeholders.',
    },
    subModules: [
      {
        id: 'extra-financial',
        labels: {
          fr: 'Rapports extra-financiers',
          en: 'Extra-financial reports',
        },
      },
      {
        id: 'annual',
        labels: {
          fr: 'Rapport annuel RSE',
          en: 'Annual ESG report',
        },
      },
      {
        id: 'auto-export',
        labels: {
          fr: 'Export automatique',
          en: 'Automatic export',
        },
      },
    ],
    highlights: [
      {
        id: 'templates',
        labels: {
          fr: 'Templates personnalisables',
          en: 'Customizable templates',
        },
      },
      {
        id: 'comparative',
        labels: {
          fr: 'Tableaux comparatifs N / N-1',
          en: 'Comparative tables N / N-1',
        },
      },
      {
        id: 'auto-send',
        labels: {
          fr: 'Diffusion automatique multi-format',
          en: 'Automated multi-format delivery',
        },
      },
    ],
  },
  {
    id: 'settings',
    icon: '⚙️',
    labels: {
      fr: 'Paramètres',
      en: 'Settings',
    },
    summary: {
      fr: "Gérez l'organisation, les utilisateurs, les notifications et vos objectifs RSE en un endroit centralisé.",
      en: 'Manage organisation, users, notifications, and ESG objectives from a single hub.',
    },
    subModules: [
      {
        id: 'profile',
        labels: {
          fr: 'Profil',
          en: 'Profile',
        },
      },
      {
        id: 'organisation',
        labels: {
          fr: 'Organisation',
          en: 'Organisation',
        },
      },
      {
        id: 'subscription',
        labels: {
          fr: 'Abonnement',
          en: 'Subscription',
        },
      },
      {
        id: 'notifications',
        labels: {
          fr: 'Notifications',
          en: 'Notifications',
        },
      },
      {
        id: 'objectives',
        labels: {
          fr: 'Objectifs',
          en: 'Objectives',
        },
      },
    ],
    highlights: [
      {
        id: 'roles',
        labels: {
          fr: 'Gestion fine des rôles',
          en: 'Granular role management',
        },
      },
      {
        id: 'alerts',
        labels: {
          fr: 'Alertes personnalisées',
          en: 'Custom alerts',
        },
      },
    ],
  },
  {
    id: 'logout',
    icon: '⏻',
    labels: {
      fr: 'Déconnexion',
      en: 'Sign out',
    },
    summary: {
      fr: 'Sécurisez vos accès en vous déconnectant après usage.',
      en: 'Keep your workspace secure by signing out when finished.',
    },
    subModules: [],
    highlights: [],
  },
];

const translations = {
  fr: {
    welcomeUser: 'Bienvenue, Utilisateur !',
    sidebarHint: 'Survolez un module pour afficher ses sous-modules.',
    currentSection: 'Tableau de bord RSE',
    heroTitle: 'Main KPIs, Graphiques & Indicateurs',
    languageToggleLabel: 'FR',
    overviewTitle: 'Vue d’ensemble du module',
    overviewDescription:
      'Choisissez un module pour afficher les sous-modules prioritaires et les prochaines actions.',
    reportingTitle: 'Génération de rapports',
    workflowTitle: 'Workflow de saisie',
    kpiSectionTitle: 'Main KPIs prioritaires',
    kpiSectionSubtitle: 'Un aperçu des indicateurs clés alignés avec vos objectifs RSE.',
  },
  en: {
    welcomeUser: 'Welcome back!',
    sidebarHint: 'Hover a module to reveal its submodules.',
    currentSection: 'ESG control tower',
    heroTitle: 'Main KPIs, Charts & Indicators',
    languageToggleLabel: 'EN',
    overviewTitle: 'Module spotlight',
    overviewDescription:
      'Pick any module to review its focus areas and recommended next steps.',
    reportingTitle: 'Report generation',
    workflowTitle: 'Data entry workflow',
    kpiSectionTitle: 'Priority KPIs',
    kpiSectionSubtitle: 'A snapshot of the indicators aligned with your ESG roadmap.',
  },
};

const reportingItems = {
  fr: [
    'Rapports adaptatifs (PDF, Word, exports data)',
    'Templates comparatifs par référentiel (GRI, CSRD, ODD)',
    'Export automatique programmables',
  ],
  en: [
    'Adaptive reports (PDF, Word, data exports)',
    'Comparative templates by framework (GRI, CSRD, SDGs)',
    'Scheduled automated exports',
  ],
};

const workflowItems = {
  fr: [
    'Agent de saisie : 10 à 20 min / mois',
    'Super User : validation et corrections',
    'Intégration vers dashboards & rapports',
  ],
  en: [
    'Data agent: 10-20 min / month',
    'Super user: validation & corrections',
    'Integration into dashboards & reports',
  ],
};

const kpiData = [
  {
    id: 'carbon-intensity',
    values: {
      fr: {
        label: "Intensité carbone (kg CO₂e / k€)",
        trend: '+3,2% vs N-1',
      },
      en: {
        label: 'Carbon intensity (kg CO₂e / k€)',
        trend: '+3.2% vs last FY',
      },
    },
    value: '21,4',
  },
  {
    id: 'energy-efficiency',
    values: {
      fr: {
        label: "Consommation énergie (kWh/m²)",
        trend: '-4,1% vs objectif',
      },
      en: {
        label: 'Energy consumption (kWh/m²)',
        trend: '-4.1% vs target',
      },
    },
    value: '86',
  },
  {
    id: 'water-usage',
    values: {
      fr: {
        label: "Consommation d’eau (m³)",
        trend: '-2,6% vs N-1',
      },
      en: {
        label: 'Water consumption (m³)',
        trend: '-2.6% vs last FY',
      },
    },
    value: '12,5k',
  },
  {
    id: 'diversity',
    values: {
      fr: {
        label: 'Taux de mixité (f/h)',
        trend: '+1,8 pts vs objectif',
      },
      en: {
        label: 'Gender balance ratio',
        trend: '+1.8 pts vs target',
      },
    },
    value: '48%',
  },
];

let currentLanguage = 'fr';
let activeModuleId = modules[0].id;

const moduleListEl = document.getElementById('moduleList');
const sidebarEl = document.querySelector('.sidebar');
const languageToggleBtn = document.getElementById('languageToggle');
const themeToggleBtn = document.getElementById('themeToggle');
const sidebarToggleBtn = document.getElementById('sidebarToggle');
const tooltipEl = document.getElementById('moduleTooltip');
const activeModuleChips = document.getElementById('activeModuleChips');
const reportingListEl = document.getElementById('reportingList');
const workflowListEl = document.getElementById('workflowList');
const kpiGridEl = document.getElementById('kpiGrid');
const textNodes = document.querySelectorAll('[data-i18n]');
const moduleElements = new Map();

const getModuleById = (id) => modules.find((module) => module.id === id);

const updateLanguageToggleLabel = () => {
  languageToggleBtn.textContent =
    currentLanguage === 'fr' ? 'FR \u2022 EN' : 'EN \u2022 FR';
  languageToggleBtn.setAttribute(
    'aria-label',
    currentLanguage === 'fr'
      ? 'Passer la page en anglais'
      : 'Switch the interface to French'
  );
};

const updateTextContent = () => {
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const translation = translations[currentLanguage][key];
    if (translation) {
      node.textContent = translation;
    }
  });
  updateLanguageToggleLabel();
  updateSupplementaryLists();
  updateModuleRendering();
  updateKpiGrid();
  setActiveModule(activeModuleId);
};

const updateSupplementaryLists = () => {
  reportingListEl.innerHTML = '';
  workflowListEl.innerHTML = '';

  reportingItems[currentLanguage].forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    reportingListEl.appendChild(li);
  });

  workflowItems[currentLanguage].forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    workflowListEl.appendChild(li);
  });
};

const updateModuleRendering = () => {
  moduleElements.forEach(({ button, labelEl }, moduleId) => {
    const module = getModuleById(moduleId);
    labelEl.textContent = module.labels[currentLanguage];
    button.setAttribute('title', module.labels[currentLanguage]);
  });
};

const updateKpiGrid = () => {
  kpiGridEl.querySelectorAll('.kpi-card').forEach((card) => card.remove());
  kpiData.forEach((kpi) => {
    const card = document.createElement('article');
    card.className = 'kpi-card';
    const label = document.createElement('span');
    label.className = 'kpi-label';
    label.textContent = kpi.values[currentLanguage].label;
    const value = document.createElement('span');
    value.className = 'kpi-value';
    value.textContent = kpi.value;
    const trend = document.createElement('span');
    trend.className = 'kpi-trend';
    trend.textContent = kpi.values[currentLanguage].trend;
    card.append(label, value, trend);
    kpiGridEl.appendChild(card);
  });
};

const renderModuleList = () => {
  modules.forEach((module) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'module-button';
    button.dataset.moduleId = module.id;

    const iconSpan = document.createElement('span');
    iconSpan.className = 'module-icon';
    iconSpan.textContent = module.icon;

    const labelSpan = document.createElement('span');
    labelSpan.className = 'module-label';
    labelSpan.textContent = module.labels[currentLanguage];

    button.append(iconSpan, labelSpan);
    item.appendChild(button);
    moduleListEl.appendChild(item);

    moduleElements.set(module.id, {
      button,
      labelEl: labelSpan,
    });

    button.addEventListener('click', () => setActiveModule(module.id));
    button.addEventListener('mouseenter', (event) =>
      showTooltip(module, event.currentTarget)
    );
    button.addEventListener('mouseleave', hideTooltip);
    button.addEventListener('focus', (event) =>
      showTooltip(module, event.currentTarget)
    );
    button.addEventListener('blur', hideTooltip);
  });
};

const showTooltip = (module, anchorEl) => {
  if (!module.subModules.length) {
    hideTooltip();
    return;
  }

  tooltipEl.innerHTML = '';
  const title = document.createElement('h4');
  title.textContent = module.labels[currentLanguage];
  const list = document.createElement('ul');
  module.subModules.forEach((subModule) => {
    const li = document.createElement('li');
    li.textContent = subModule.labels[currentLanguage];
    list.appendChild(li);
  });

  tooltipEl.append(title, list);
  tooltipEl.classList.add('visible');

  const rect = anchorEl.getBoundingClientRect();
  const tooltipWidth = tooltipEl.offsetWidth || 200;
  const tooltipHeight = tooltipEl.offsetHeight || 120;
  let left = rect.right + 12 + window.scrollX;
  let top = rect.top + window.scrollY + rect.height / 2 - tooltipHeight / 2;

  if (left + tooltipWidth > window.scrollX + window.innerWidth) {
    left = rect.left + window.scrollX - tooltipWidth - 12;
  }

  if (top + tooltipHeight > window.scrollY + window.innerHeight) {
    top = window.scrollY + window.innerHeight - tooltipHeight - 12;
  }

  if (top < window.scrollY + 12) {
    top = window.scrollY + 12;
  }

  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.top = `${top}px`;
};

const hideTooltip = () => {
  tooltipEl.classList.remove('visible');
};

const setActiveModule = (moduleId) => {
  activeModuleId = moduleId;
  moduleElements.forEach(({ button }) => {
    button.classList.toggle('active', button.dataset.moduleId === moduleId);
  });
  const module = getModuleById(moduleId);
  tooltipEl.classList.remove('visible');
  updateOverview(module);
};

const updateOverview = (module) => {
  const overviewTitle = document.querySelector('[data-i18n="overviewTitle"]');
  const overviewDescription = document.querySelector(
    '[data-i18n="overviewDescription"]'
  );

  overviewTitle.textContent =
    currentLanguage === 'fr' ? module.labels.fr : module.labels.en;
  overviewDescription.textContent =
    currentLanguage === 'fr' ? module.summary.fr : module.summary.en;

  activeModuleChips.innerHTML = '';
  module.subModules.slice(0, 4).forEach((subModule) => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = subModule.labels[currentLanguage];
    activeModuleChips.appendChild(chip);
  });

  if (!module.subModules.length) {
    const placeholder = document.createElement('span');
    placeholder.className = 'chip';
    placeholder.textContent =
      currentLanguage === 'fr'
        ? 'Aucun sous-module'
        : 'No submodule available';
    activeModuleChips.appendChild(placeholder);
  }
};

const toggleLanguage = () => {
  currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
  document.documentElement.lang = currentLanguage;
  updateTextContent();
};

const toggleTheme = () => {
  const isDark = document.body.classList.toggle('theme-dark');
  const icon = isDark ? '🌞' : '🌙';
  themeToggleBtn.textContent = icon;
  themeToggleBtn.setAttribute(
    'aria-label',
    isDark ? 'Activer le thème clair' : 'Activer le thème sombre'
  );
  themeToggleBtn.dataset.themeLabel = isDark ? 'dark' : 'light';
};

const toggleSidebar = () => {
  const isCollapsed = sidebarEl.classList.toggle('collapsed');
  sidebarToggleBtn.setAttribute('aria-expanded', String(!isCollapsed));
};

languageToggleBtn.addEventListener('click', toggleLanguage);
themeToggleBtn.addEventListener('click', toggleTheme);
sidebarToggleBtn.addEventListener('click', toggleSidebar);
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && sidebarEl.classList.contains('collapsed')) {
    sidebarEl.classList.remove('collapsed');
    sidebarToggleBtn.setAttribute('aria-expanded', 'true');
  }
});

window.addEventListener('scroll', () => {
  if (tooltipEl.classList.contains('visible')) {
    tooltipEl.classList.remove('visible');
  }
});

renderModuleList();
updateSupplementaryLists();
updateKpiGrid();
setActiveModule(activeModuleId);
updateTextContent();
updateLanguageToggleLabel();
toggleTheme();
toggleTheme();
if (window.innerWidth <= 900) {
  sidebarEl.classList.add('collapsed');
  sidebarToggleBtn.setAttribute('aria-expanded', 'false');
}
