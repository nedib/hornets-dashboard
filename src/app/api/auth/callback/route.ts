import { handleCallback } from '@auth0/nextjs-auth0/edge';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    // @ts-ignore
    return handleCallback(request);
}
