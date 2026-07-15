import Navbar from "../components/navbar";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-sky-100 text-slate-900`}>
        <div className="min-h-screen flex flex-col md:flex-row">
          <Navbar />
          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
