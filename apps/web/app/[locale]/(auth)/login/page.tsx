import { LoginForm } from '@/components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/authOptions';

export default async function LoginPage({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(`/${params.locale}/dashboard`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 to-success/10">
      <LoginForm locale={params.locale} />
    </div>
  );
}
