import Panel1 from "@/features/home/panel1";
import Panel2 from "@/features/home/panel2";
import Panel3 from "@/features/home/panel3";
import { Section } from "@/features/section";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { useElementScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Work = () => {
  const [elementHeight, setElementHeight] = useState(0);

  const sectionsRef = useRef<HTMLElement[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useElementScroll(wrapperRef);
  const { height } = useWindowSize();

  useEffect(() => {
    setElementHeight(sectionsRef.current?.[0].offsetHeight);
  }, [height]);

  const items = [
    <Panel1 key={Symbol().toString()} />,
    <Panel2 key={Symbol().toString()} />,
    <Panel3 key={Symbol().toString()} />,
  ];
  return (
    <div
      ref={wrapperRef}
      className="snap-y snap-mandatory h-[100dvh] overflow-y-scroll relative"
    >
      {items.map((item, index) => (
        <Section
          key={item.key}
          data={item}
          elementHeight={elementHeight}
          index={index}
          scroll={scrollY}
          ref={(element) =>
            (sectionsRef.current[index] = element as HTMLElement) as any
          }
        />
      ))}
    </div>
  );
};

export default Work;
