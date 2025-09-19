const actionsListEl = document.getElementById('actionsList');
const insightsGridEl = document.getElementById('insightsGrid');
const timelineEl = document.getElementById('timeline');
const engagementEl = document.getElementById('engagementScore');
const engagementBreakdownEl = document.getElementById('engagementBreakdown');
const pillarFilterEl = document.getElementById('pillarFilter');
const statusFilterEl = document.getElementById('statusFilter');
const actionTemplate = document.getElementById('actionTemplate');
const actionForm = document.getElementById('actionForm');
const modal = document.getElementById('modal');
const modalTitleEl = document.getElementById('modal-title');
const modalDescriptionEl = document.getElementById('modal-description');
const addActionBtn = document.getElementById('addActionButton');
const exportBtn = document.getElementById('exportButton');

const statusOrder = ['Planifié', 'En cours', 'Terminé'];

const initialActions = [
  {
    id: 'ACT-001',
    title: 'Convertir la flotte de véhicules en électrique',
    pillar: 'Environnement',
    owner: 'Julie Martinez',
    dueDate: '2024-07-15',
    status: 'En cours',
    progress: 65,
    impact: { score: 5, type: 'Emission', value: 32 },
    description:
      "Remplacement progressif des véhicules thermiques par des modèles électriques et déploiement de bornes de recharge." ,
  },
  {
    id: 'ACT-002',
    title: 'Programme bien-être mental',
    pillar: 'Social',
    owner: 'Omar Diouf',
    dueDate: '2024-06-20',
    status: 'En cours',
    progress: 40,
    impact: { score: 4, type: 'Bien-être', value: 0 },
    description:
      "Mise en place d'ateliers, coaching et dispositifs d'écoute pour prévenir les risques psychosociaux." ,
  },
  {
    id: 'ACT-003',
    title: 'Charte fournisseurs responsables',
    pillar: 'Gouvernance',
    owner: 'Sonia André',
    dueDate: '2024-08-05',
    status: 'Planifié',
    progress: 15,
    impact: { score: 3, type: 'Gouvernance', value: 6 },
    description:
      "Co-construction d'une charte d'achats responsables intégrant des critères sociaux et environnementaux." ,
  },
  {
    id: 'ACT-004',
    title: 'Sensibilisation au tri des déchets',
    pillar: 'Environnement',
    owner: 'Léa Bernard',
    dueDate: '2024-05-15',
    status: 'Terminé',
    progress: 100,
    impact: { score: 2, type: 'Emission', value: 4 },
    description:
      "Campagne interne avec ateliers pratiques et challenge inter-sites pour améliorer le tri sélectif." ,
  },
  {
    id: 'ACT-005',
    title: 'Reporting extra-financier intégré',
    pillar: 'Gouvernance',
    owner: 'Yanis Lebrun',
    dueDate: '2024-07-01',
    status: 'En cours',
    progress: 55,
    impact: { score: 4, type: 'Gouvernance', value: 10 },
    description:
      "Construction d'un reporting annuel consolidant données ESG, risques et plan d'action de transition." ,
  },
];

const state = {
  actions: clone(initialActions),
  filters: {
    pillar: 'all',
    status: 'all',
  },
};

function clone(value) {
  if (typeof globalThis.structuredClone === 'function') {
    return globalThis.structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function formatDate(date) {
  if (!date) return '—';
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function getNextStatus(current) {
  const index = statusOrder.indexOf(current);
  if (index === -1 || index === statusOrder.length - 1) {
    return null;
  }
  return statusOrder[index + 1];
}

function computeSummary(actions) {
  if (actions.length === 0) {
    return {
      total: 0,
      completed: 0,
      inProgress: 0,
      planned: 0,
      averageProgress: 0,
      co2Avoided: 0,
      wellbeingScore: 0,
      owners: 0,
      engagementScore: 0,
      engagementMessage: "Aucune action enregistrée pour le moment.",
    };
  }

  const total = actions.length;
  const completed = actions.filter((action) => action.status === 'Terminé').length;
  const inProgress = actions.filter((action) => action.status === 'En cours').length;
  const planned = total - completed - inProgress;
  const averageProgress = Math.round(
    actions.reduce((sum, action) => sum + (Number(action.progress) || 0), 0) / total
  );

  const co2Avoided = actions.reduce((sum, action) => {
    if (action.impact?.type !== 'Emission') return sum;
    const impactValue = Number(action.impact?.value ?? action.impact?.score ?? 0);
    return sum + (impactValue * (Number(action.progress) || 0)) / 100;
  }, 0);

  const wellbeingActions = actions.filter((action) => action.impact?.type === 'Bien-être');
  const wellbeingScore = wellbeingActions.length
    ? wellbeingActions.reduce((acc, action) => acc + (Number(action.impact?.score) || 0), 0) /
      wellbeingActions.length
    : 0;

  const owners = new Set(
    actions
      .map((action) => action.owner?.trim())
      .filter((owner) => owner && owner.length > 0)
  ).size;

  const engagementScoreRaw =
    (averageProgress / 100) * 3 + Math.min(owners / total, 1) * 1.5 + (inProgress / total) * 1.5;
  const engagementScore = Math.min(5, Math.round(engagementScoreRaw * 10) / 10 || 0);
  const engagementMessage =
    engagementScore >= 4.5
      ? "Engagement exemplaire sur l'ensemble des piliers."
      : engagementScore >= 3.5
      ? 'Dynamique positive, poursuivre la mobilisation.'
      : 'Renforcer l\'adhésion des équipes sur les actions clés.';

  return {
    total,
    completed,
    inProgress,
    planned,
    averageProgress,
    co2Avoided,
    wellbeingScore,
    owners,
    engagementScore,
    engagementMessage,
  };
}

function renderInsights() {
  const summary = computeSummary(state.actions);
  const cards = [
    {
      title: 'Progression moyenne',
      value: `${summary.averageProgress}%`,
      trend:
        summary.averageProgress >= 70
          ? '✅ conforme à la cible trimestrielle'
          : summary.averageProgress >= 50
          ? '⚠️ à renforcer'
          : '🚀 prioriser les actions à fort impact',
    },
    {
      title: 'Actions terminées',
      value: `${summary.completed}/${summary.total}`,
      trend: `${Math.round(summary.total ? (summary.completed / summary.total) * 100 : 0)} % du plan`,
    },
    {
      title: 'Tonnes de CO₂ évitées',
      value: `${summary.co2Avoided.toFixed(1)} t`,
      trend: 'Estimation basée sur l’avancement déclaré',
    },
    {
      title: 'Indice de mobilisation',
      value: `${summary.engagementScore.toFixed(1)}/5`,
      trend: `${summary.owners} équipes impliquées`,
    },
  ];

  insightsGridEl.innerHTML = cards
    .map(
      (card) => `
        <article class="insight-card">
          <h3>${card.title}</h3>
          <div class="insight-value">${card.value}</div>
          <p class="insight-trend">${card.trend}</p>
        </article>
      `
    )
    .join('');
}

function renderTimeline() {
  const upcoming = state.actions
    .filter((action) => action.status !== 'Terminé')
    .slice()
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 4);

  if (upcoming.length === 0) {
    timelineEl.innerHTML = '<li>Aucune échéance à venir.</li>';
    return;
  }

  timelineEl.innerHTML = upcoming
    .map((action) => {
      const badgeClass =
        action.status === 'En cours'
          ? 'badge--amber'
          : action.status === 'Terminé'
          ? 'badge--success'
          : '';
      const accent = ['badge', badgeClass].filter(Boolean).join(' ');
      return `
        <li>
          <span class="timeline-date">${formatDate(action.dueDate)}</span>
          <span class="timeline-title">${action.title}</span>
          <span class="${accent}">${action.status}</span>
        </li>
      `;
    })
    .join('');
}

function renderEngagement() {
  const summary = computeSummary(state.actions);
  const valueEl = engagementEl.querySelector('.engagement-value');
  const descriptionEl = engagementEl.querySelector('.engagement-description');

  valueEl.textContent = `${summary.engagementScore.toFixed(1)}/5`;
  descriptionEl.textContent = summary.engagementMessage;

  const breakdown = [
    { label: 'Progression moyenne', value: `${summary.averageProgress}%` },
    { label: 'Actions en cours', value: summary.inProgress },
    { label: 'Équipes impliquées', value: summary.owners },
  ];

  engagementBreakdownEl.innerHTML = breakdown
    .map(
      (item) => `
        <div class="breakdown-row">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join('');
}

function getStatusClass(status) {
  switch (status) {
    case 'Planifié':
      return 'status-planifie';
    case 'En cours':
      return 'status-en-cours';
    case 'Terminé':
      return 'status-termine';
    default:
      return 'status-planifie';
  }
}

function renderActions() {
  const filtered = state.actions
    .filter((action) =>
      (state.filters.pillar === 'all' || action.pillar === state.filters.pillar) &&
      (state.filters.status === 'all' || action.status === state.filters.status)
    )
    .slice()
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  if (filtered.length === 0) {
    actionsListEl.innerHTML = `
      <p role="status">Aucune action ne correspond aux filtres sélectionnés.</p>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((action) => {
    const card = actionTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.id = action.id;
    card.querySelector('.action-pill').textContent = action.pillar;
    card.querySelector('.action-title').textContent = action.title;
    card.querySelector('.action-description').textContent =
      action.description || 'Description à compléter.';
    card.querySelector('.action-owner').textContent = action.owner || '—';
    card.querySelector('.action-due-date').textContent = formatDate(action.dueDate);
    const impactValue = action.impact?.value ?? action.impact?.score ?? 0;
    const impactLabel = `${action.impact?.type ?? 'Impact'} · ${action.impact?.score ?? 0}/5`;
    const impactDetail =
      action.impact?.type === 'Emission'
        ? `${impactLabel} (${impactValue} t CO₂)`
        : impactLabel;
    card.querySelector('.action-impact').textContent = impactDetail;

    const statusButton = card.querySelector('.status-button');
    statusButton.textContent = action.status;
    statusButton.title = 'Modifier le statut de l\'action';
    statusButton.classList.add(getStatusClass(action.status));

    const progressInput = card.querySelector('.progress-input');
    const progressValue = card.querySelector('.progress-value');
    const progressLabel = card.querySelector('.progress-label');

    progressInput.value = Number(action.progress) || 0;
    progressValue.style.width = `${progressInput.value}%`;
    progressLabel.textContent = `${progressInput.value}%`;

    progressInput.addEventListener('input', (event) => {
      const updated = Number(event.target.value);
      updateAction(action.id, { progress: updated });
    });

    statusButton.addEventListener('click', async () => {
      const next = getNextStatus(action.status);
      if (!next) return;
      const confirmed = await confirmChange(
        `Passer l'action « ${action.title} » en statut ${next} ?`,
        "Cette mise à jour ajustera automatiquement le niveau d'avancement."
      );
      if (!confirmed) return;
      const updates = { status: next };
      if (next === 'Terminé' && action.progress < 100) {
        updates.progress = 100;
      }
      updateAction(action.id, updates);
    });

    fragment.appendChild(card);
  });

  actionsListEl.innerHTML = '';
  actionsListEl.appendChild(fragment);
}

function updateAction(id, updates) {
  state.actions = state.actions.map((action) => {
    if (action.id !== id) return action;
    const nextAction = { ...action, ...updates };
    if (typeof updates.progress === 'number') {
      const value = Math.max(0, Math.min(100, Math.round(updates.progress)));
      nextAction.progress = value;
      if (value === 100) {
        nextAction.status = 'Terminé';
      } else if (nextAction.status === 'Terminé' && value < 100) {
        nextAction.status = 'En cours';
      }
    }
    return nextAction;
  });
  renderAll();
}

function confirmChange(title, description) {
  if (!modal || typeof modal.showModal !== 'function') {
    return Promise.resolve(window.confirm(`${title}\n\n${description}`));
  }

  return new Promise((resolve) => {
    modalTitleEl.textContent = title;
    modalDescriptionEl.textContent = description;
    modal.returnValue = 'cancel';
    modal.addEventListener(
      'close',
      () => {
        resolve(modal.returnValue === 'confirm');
      },
      { once: true }
    );
    modal.showModal();
  });
}

function handleFilterChange() {
  state.filters = {
    pillar: pillarFilterEl.value,
    status: statusFilterEl.value,
  };
  renderActions();
}

function handleAddAction(event) {
  event.preventDefault();
  const formData = new FormData(actionForm);
  const id = crypto.randomUUID ? crypto.randomUUID() : `ACT-${Date.now()}`;
  const impactScore = Number(formData.get('actionImpact') ?? 3) || 3;
  const impactType = formData.get('actionImpactType') || 'Emission';
  const impactValue =
    impactType === 'Emission'
      ? impactScore * 6
      : impactType === 'Gouvernance'
      ? impactScore * 4
      : impactScore * 2;

  const newAction = {
    id,
    title: formData.get('actionTitle')?.toString().trim(),
    pillar: formData.get('actionPillar'),
    owner: formData.get('actionOwner')?.toString().trim(),
    dueDate: formData.get('actionDueDate'),
    status: 'Planifié',
    progress: 0,
    impact: {
      score: impactScore,
      type: impactType,
      value: impactValue,
    },
    description: formData.get('actionDescription')?.toString().trim() ?? '',
  };

  state.actions = [newAction, ...state.actions];
  actionForm.reset();
  renderAll();
}

function handleExport() {
  const payload = state.actions.map((action) => ({
    ...action,
    createdAt: new Date().toISOString(),
  }));

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rse-actions.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

pillarFilterEl.addEventListener('change', handleFilterChange);
statusFilterEl.addEventListener('change', handleFilterChange);
actionForm.addEventListener('submit', handleAddAction);
addActionBtn.addEventListener('click', () => {
  const sectionTitle = document.getElementById('new-action-title');
  if (sectionTitle) {
    sectionTitle.scrollIntoView({ behavior: 'smooth' });
  }
  const titleInput = document.getElementById('actionTitle');
  if (titleInput) {
    try {
      titleInput.focus({ preventScroll: true });
    } catch (error) {
      titleInput.focus();
    }
  }
});
exportBtn.addEventListener('click', handleExport);

renderAll();

function renderAll() {
  renderInsights();
  renderTimeline();
  renderEngagement();
  renderActions();
}

