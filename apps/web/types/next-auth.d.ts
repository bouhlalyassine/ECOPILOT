import { DefaultSession } from 'next-auth';
import { AppRole } from '@/lib/roles';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: AppRole;
      organizationId: string;
      siteIds: string[];
    } & DefaultSession['user'];
  }

  interface User {
    role: AppRole;
    organizationId: string;
    siteIds: string[];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: AppRole;
    organizationId: string;
    siteIds: string[];
  }
}
