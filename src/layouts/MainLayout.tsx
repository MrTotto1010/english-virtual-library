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
    <div className="min-h-screen bg-cream">
      <Navbar title={title} />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        {children}
      </main>
    </div>
  );
}