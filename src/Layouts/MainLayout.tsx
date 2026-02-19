import type { NextPage } from "next";
import Head from "next/head";
import { useLanguage } from "../contexts/LanguageContext";
import { StructuredData } from "../components/StructuredData/StructuredData";

interface ILayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const MainLayout: NextPage<ILayoutProps> = ({
  children,
  className = "",
}) => {
  const { t } = useLanguage();

  const siteUrl = "https://pestov-v.github.io";
  const profileImage = `${siteUrl}/img/profile/profile.jpg`;

  return (
    <div className={className}>
      <Head>
        <title>{t.portfolioTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="description" content={t.portfolioDescription} />
        <meta name="author" content="Volodymyr Pestov" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Volodymyr Pestov, web developer, frontend developer, React, Next.js, TypeScript, UI/UX designer, portfolio"
        />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={t.portfolioTitle} />
        <meta property="og:description" content={t.portfolioDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Volodymyr Pestov — Portfolio" />
        <meta property="og:image" content={profileImage} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Volodymyr Pestov — Web Developer" />
        <meta property="profile:first_name" content="Volodymyr" />
        <meta property="profile:last_name" content="Pestov" />
        <meta property="profile:username" content="pestov-v" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t.portfolioTitle} />
        <meta name="twitter:description" content={t.portfolioDescription} />
        <meta name="twitter:image" content={profileImage} />
        <meta name="twitter:image:alt" content="Volodymyr Pestov — Web Developer" />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StructuredData />

      {children}
    </div>
  );
};
