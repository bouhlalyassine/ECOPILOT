import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';
import { AppRole } from './roles';
import { HttpError } from './errors';

export async function requireSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new HttpError(401, 'Unauthorized');
  }
  return session;
}

export function hasRole(role: AppRole, allowed: AppRole[]) {
  return allowed.includes(role);
}
