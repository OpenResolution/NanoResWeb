import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { aws, amplify } from "@/aws-config";
import AWS from "aws-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@/styles/globals.css";

Amplify.configure({ ...amplify, ssr: true });

AWS.config.update({
  region: aws.region,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </QueryClientProvider>
  );
}
