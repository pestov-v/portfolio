import type { NextPage } from "next";
import Head from "next/head";
import { useLanguage } from "../contexts/LanguageContext";

interface ILayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const MainLayout: NextPage<ILayoutProps> = ({
  children,
  className = "",
}) => {
  const { t } = useLanguage();
  
  return (
    <div className={className}>
      <Head>
        <title>{t.portfolioTitle}</title>
        <meta name="Portfolio" content="Pestov Volodymyr" />
        <meta
          name="description"
          content={t.portfolioDescription}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};
