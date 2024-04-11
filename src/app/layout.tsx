import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";
const custom = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={custom.className}>
        <Toaster richColors />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
