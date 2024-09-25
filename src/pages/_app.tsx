import "@/shared/styles/globals.css";
import GlobalHeader from "@/shared/ui/layout/GlobalHeader";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <>
          <GlobalHeader />
          <Component {...pageProps} />
          {/* <GlobalFooter /> */}
        </>
      )}
    </>
  );
}
