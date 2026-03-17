import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { trackPageView, initDevtoolsTracking } from "../src/lib/analytics";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import { Chat } from "../src/components/Chat/Chat";
import { ChatButton } from "../src/components/Chat/ChatButton";
import {
  inter,
  jetbrainsMono,
  outfit,
  unbounded,
} from "../src/styles/fonts";
import "../src/styles/tailwind.css";
import "../src/styles/globals.scss";

const fontVariables = [
  outfit.variable,
  unbounded.variable,
  inter.variable,
  jetbrainsMono.variable,
].join(" ");

function MyApp({ Component, pageProps }: AppProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    trackPageView();
    initDevtoolsTracking();
  }, []);

  return (
    <div className={fontVariables}>
      <ThemeProvider>
        <LanguageProvider>
          <Component {...pageProps} />
          <ChatButton onClick={() => setIsChatOpen(true)} />
          <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
