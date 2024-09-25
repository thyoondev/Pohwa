import React, { forwardRef } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

export const Section = forwardRef<
  HTMLElement,
  {
    elementHeight: number;
    index: number;
    scroll: MotionValue<number>;
    data: React.ReactNode;
  }
>(({ elementHeight, index, scroll, data }, ref) => {
  const transformY = useTransform(
    scroll,
    [elementHeight * (index + 1) - elementHeight, elementHeight * (index + 1)],
    ["0vh", "100dvh"]
  );

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.7 }}
      ref={ref as any}
      className={`flex justify-center items-center w-[100vw] h-[100dvh] relative snap-center z-[${
        index + 1
      }]`}
    >
      <motion.div
        style={{ y: transformY }}
        className="flex ju stify-center items-center w-full h-full "
      >
        {data}
      </motion.div>
    </motion.div>
  );
});

Section.displayName = "Section";
