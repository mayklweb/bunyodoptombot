"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
// import { tg } from "../shared/lib/tg";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const tg = typeof window !== "undefined" ? window.Telegram?.WebApp : null;

  useEffect(() => {
    try {
      tg?.ready?.();
      tg?.expand?.();
      tg?.disableVerticalSwipes?.();
  
      tg?.MainButton?.setText("🛒 Open Cart");
      tg?.MainButton?.show();
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  );
}
