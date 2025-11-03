"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.Telegram?.WebApp) {
  //     const tg = window.Telegram.WebApp;
  //     tg.ready();
  //     tg.disableVerticalSwipes();
  //     tg.expand();
  //   }
  // }, []);
  

  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  );
}
