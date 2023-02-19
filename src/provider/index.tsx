import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">{children}</Suspense>
    </QueryClientProvider>
  );
};
