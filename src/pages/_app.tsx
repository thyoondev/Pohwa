import "@/shared/styles/globals.css";
import GlobalFooter from "@/shared/ui/layout/GlobalFooter";
import GlobalHeader from "@/shared/ui/layout/GlobalHeader";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document?.getElementById("scroller")?.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <>
      {isMounted && (
        <>
          <div
            className="h-[calc(100dvh-56px)] mt-14 snap-y snap-mandatory overflow-y-scroll scroll-smooth"
            id="scroller"
          >
            <GlobalHeader />
            <Component {...pageProps} />
            <GlobalFooter />
          </div>
        </>
      )}
    </>
  );
}
