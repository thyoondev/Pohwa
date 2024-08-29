import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";

const GlobalHeader = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  return (
    <header className="fixed left-0 top-0 z-50 p-4">
      <Image
        src="/pohwa_logo.png"
        width={isDesktop ? 200 : 150}
        height={isDesktop ? 100 : 50}
        alt="logo"
      />
    </header>
  );
};

export default GlobalHeader;
