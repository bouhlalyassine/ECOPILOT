export type AppRole = 'ADMIN' | 'SUPER_USER' | 'USER' | 'AGENT_SAISIE';

export const roleHierarchy: Record<AppRole, number> = {
  ADMIN: 4,
  SUPER_USER: 3,
  USER: 2,
  AGENT_SAISIE: 1
};

export function isRoleAtLeast(role: AppRole, minimum: AppRole) {
  return roleHierarchy[role] >= roleHierarchy[minimum];
}
