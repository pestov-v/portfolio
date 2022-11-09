import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

interface ILayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const MainLayout: NextPage<ILayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <Head>
        <title>Portfolio</title>
        <meta name="Pestov Volodymyr's portfolio" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default MainLayout;