import type { AppProps } from "next/app";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import "../src/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
