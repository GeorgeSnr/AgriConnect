"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import Footer from "./Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient} >
      <div className="min-h-screen flex flex-col bg-green-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}