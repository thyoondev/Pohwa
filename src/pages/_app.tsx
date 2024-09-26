import "@/shared/styles/globals.css";
import GlobalFooter from "@/shared/ui/layout/GlobalFooter";
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
        <div className="h-[100dvh] snap-y snap-mandatory overflow-y-scroll">
          <GlobalHeader />
          <Component {...pageProps} />
          <GlobalFooter />
        </div>
      )}
    </>
  );
}
