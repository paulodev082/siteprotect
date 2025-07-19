// pages/_app.js
import "../styles/globals.css";
import FloatingWidgets from "../components/FloatingWidgets";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingWidgets />
    </>
  );
}
