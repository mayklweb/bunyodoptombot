"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      localStorage.setItem("user", tg.initDataUnsafe?.user ? JSON.stringify(tg.initDataUnsafe.user) : "");
      tg.ready();
      tg.expand();
      tg.disableVerticalSwipes();
    }
  }, []);

  
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  );
}
