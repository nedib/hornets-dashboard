import { handleCallback } from '@auth0/nextjs-auth0';

export async function GET(request: Request) {
    return handleCallback(request);
}
