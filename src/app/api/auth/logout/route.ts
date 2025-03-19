import { handleLogout } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const logoutRes = await handleLogout(request, {
        returnTo: "/",
        logoutParams: { federated: true },
    });

    const body = await logoutRes.text();
    const response = new NextResponse(body, {
        status: logoutRes.status,
        headers: logoutRes.headers,
    });

    response.cookies.set("__session", "", { maxAge: -1, path: "/" });
    response.cookies.set("a0", "", { maxAge: -1, path: "/" });
    response.headers.set("Cache-Control", "no-store");

    return response;
}
