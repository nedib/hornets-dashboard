import { handleProfile } from '@auth0/nextjs-auth0/edge';

export async function GET(request: Request) {
    // Force no caching
    return handleProfile(request, { cache: 'no-store' });
}
