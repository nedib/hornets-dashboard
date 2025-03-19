import { handleLogin } from '@auth0/nextjs-auth0';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const returnTo = url.searchParams.get('returnTo') || '/dashboard';
  // @ts-ignore
  return handleLogin(request, { returnTo });
}
