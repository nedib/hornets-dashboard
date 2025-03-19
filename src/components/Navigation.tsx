"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "./LogoutButton";

export default function Navigation() {
    const { user, isLoading } = useUser();

    return (
        <nav className="space-x-4 text-lg">
            <Link href="/" className="hover:text-gray-300">
                Home
            </Link>
            <span className="text-gray-400">|</span>
            {isLoading ? (
                <span>Loading...</span>
            ) : user ? (
                <LogoutButton />
            ) : (
                <Link
                    href="/api/auth/login?returnTo=/dashboard"
                    className="hover:text-gray-300"
                >
                    Login
                </Link>
            )}
        </nav>
    );
}
