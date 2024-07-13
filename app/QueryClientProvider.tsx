"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientprovider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientprovider client={queryClient}>
      {children}
    </ReactQueryClientprovider>
  );
};

export default QueryClientProvider;
