"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { tg } from "../shared/lib/tg";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    try {
    tg?.ready();
    tg?.expand?.();
    tg?.disableVerticalSwipes?.();
    // main button example
    if (tg?.MainButton) {
    tg.MainButton.setText("🛒 Open Cart");
    tg.MainButton.show();
    }
    } catch (e) {
    console.warn("tg init error", e);
    }
    }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  );
}
