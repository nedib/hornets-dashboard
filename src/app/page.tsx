import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Welcome to FastBreak Dashboard
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Log in to view the Charlotte Hornets player statistics.
                </p>
                <Link
                    href="/api/auth/login?returnTo=/dashboard"
                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                    Check The Dashboard
                </Link>
            </div>
        </div>
    );
}
