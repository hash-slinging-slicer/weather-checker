import type { AppProps } from "next/app";
import Layout from "@/components/organisms/layout";
import "../globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  
  export default MyApp;