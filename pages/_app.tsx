import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { AuthProvider } from '../hooks/useAuth';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  )
}

export default MyApp
