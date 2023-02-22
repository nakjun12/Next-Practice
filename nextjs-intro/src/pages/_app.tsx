import type { AppProps } from "next/app";
import NavBar from "@/components/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        a {
          color: white;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </div>
  );
}
