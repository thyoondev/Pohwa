import "@/shared/styles/globals.css";
import GlobalHeader from "@/shared/ui/layout/GlobalHeader";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import GlobalFooter from "@/shared/ui/layout/GlobalFooter";

// 마우스 위치 추적을 위한 커스텀 훅
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}

// 스크롤 안내 컴포넌트
const ScrollGuide = () => {
  const { x, y } = useMousePosition();
  const [guideText, setGuideText] = useState("Scroll to Explore");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      // DOM 요소인지 확인
      if (!(e.target instanceof Element)) return;

      const target = e.target as Element;

      // Element로 타입 캐스팅 후 closest 사용
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]')
      ) {
        setGuideText("Click");
      } else {
        setGuideText("Scroll to Explore");
      }

      // 페이지 하단에서 숨기기
      const bottomThreshold =
        document.documentElement.scrollHeight -
        window.innerHeight -
        100 * (window.innerHeight / 100);
      if (window.scrollY > bottomThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseOver);
    window.addEventListener("scroll", (e: Event) =>
      handleMouseOver(e as unknown as MouseEvent)
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseOver);
      window.removeEventListener("scroll", (e: Event) =>
        handleMouseOver(e as unknown as MouseEvent)
      );
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none text-sm text-white z-50 uppercase"
      animate={{ x: x + 20, y: y }}
      transition={{ duration: 0.15 }}
    >
      {guideText}
    </motion.div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document?.getElementById("scroller")?.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {isMounted && (
        <>
          {isDesktop && <ScrollGuide />}
          <div className="min-h-[100dvh] flex flex-col" id="scroller">
            <GlobalHeader />
            <main className="flex-1">
              <Component {...pageProps} />
            </main>
            <GlobalFooter />
          </div>
        </>
      )}
    </ThemeProvider>
  );
}
