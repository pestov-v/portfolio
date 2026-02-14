import type { AppProps } from "next/app";
import { useState } from "react";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import { Chat } from "../src/components/Chat/Chat";
import { ChatButton } from "../src/components/Chat/ChatButton";
import "../src/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
        <ChatButton onClick={() => setIsChatOpen(true)} />
        <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
