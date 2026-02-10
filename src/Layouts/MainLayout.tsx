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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="Portfolio" content="Pestov Volodymyr" />
        <meta name="description" content={t.portfolioDescription} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};
