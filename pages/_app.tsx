import type { AppProps } from "next/app";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import "../src/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
