import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
