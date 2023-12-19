import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfólio Lucas Abrantes",
    description: ":)",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
