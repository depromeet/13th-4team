import type { AppProps } from "next/app";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TanstackQueryProvider>
      <Component {...pageProps} />
    </TanstackQueryProvider>
  );
}
