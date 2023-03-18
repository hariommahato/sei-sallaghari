import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "@/services/providers";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Providers>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}
