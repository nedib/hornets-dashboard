import "./globals.css";
import Navigation from "../components/Navigation";
import ClientUserProvider from "../components/ClientUserProvider";

export const metadata = {
    title: "FastBreak Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gray-50">
        <ClientUserProvider>
            <header className="bg-gray-800 text-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">FastBreak Dashboard</div>
                    <Navigation />
                </div>
            </header>
            <main className="max-w-7xl mx-auto p-6">{children}</main>
        </ClientUserProvider>
        </body>
        </html>
    );
}
