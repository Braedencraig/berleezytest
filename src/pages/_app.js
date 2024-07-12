import "@/styles/globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "./harvest.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
