// app/layout.tsx
import "./globals.css";
import Providers from "@/components/Providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "AgriConnect Uganda",
  description: "Region-aware crop & livestock management, marketplace and farmer tools",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
