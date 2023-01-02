import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/navbar/navbar";
import SideMenu from "../components/sideMenu/sideMenu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <SideMenu />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
