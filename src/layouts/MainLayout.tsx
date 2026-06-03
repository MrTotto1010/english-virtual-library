import type { ReactNode } from "react";

import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

export default function MainLayout({
  children,
  title,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar title={title} />

      <main className="max-w-7xl mx-auto px-4 py-6 md:p-10">
        {children}
      </main>

    </div>
  );
}