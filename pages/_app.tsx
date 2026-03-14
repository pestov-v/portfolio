import type { AppProps } from "next/app";
import { useState } from "react";
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
import "../src/styles/globals.scss";

const fontVariables = [
  outfit.variable,
  unbounded.variable,
  inter.variable,
  jetbrainsMono.variable,
].join(" ");

function MyApp({ Component, pageProps }: AppProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

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
