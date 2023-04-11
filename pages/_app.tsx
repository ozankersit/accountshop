import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AuthContextProvider } from "../context/AuthContext";
// import initMyFirebase from "../firebase/firebaseInIt";

function MyApp({ Component, pageProps }: AppProps) {
  // initMyFirebase();
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
