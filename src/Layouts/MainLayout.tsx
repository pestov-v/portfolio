import type { NextPage } from "next";
import Head from "next/head";

interface ILayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const MainLayout: NextPage<ILayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <Head>
        <title>Portfolio</title>
        <meta name="Portfolio" content="Pestov Volodymyr" />
        <meta name="description" content="Pestov Volodymyr's portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};

export default MainLayout;
