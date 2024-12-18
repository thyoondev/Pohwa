import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);
  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative h-full w-screen overflow-hidden bg-red-600 select-none">
      {/* 비디오 레이어에 motion 적용 */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <video
          className="h-full w-full object-cover object-center"
          playsInline
          muted
          autoPlay
          loop
          src="/assets/video/main/pohyo_main.mp4"
        />
      </motion.div>

      {/* 빨간색 오버레이와 어두운 오버레이도 비디오와 함께 나타나도록 수정 */}
      <motion.div
        className="absolute inset-0 bg-red-700 mix-blend-multiply"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative flex flex-col justify-between h-full">
        {loading ? (
          <div className="w-full h-full flex items-start justify-start p-8 pt-[102px]">
            <div className="w-[90vw] max-w-[90vw]">
              <motion.div
                className="text-white text-[20vw] font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {progress}%
              </motion.div>
              <div className="relative">
                <motion.div
                  className="h-[100px] lg:h-[200px] bg-white/30"
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  style={{ transformOrigin: "left" }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-[100px] lg:h-[200px] bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.div
                className="text-white/50 text-sm uppercase tracking-wider mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Loading
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-end h-full font-anton ">
            <motion.div
              className="lg:text-[15vw] text-5xl font-bold relative z-10 leading-[1.2] tracking-normal uppercase mix-blend-difference"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-white">Break the Chain</span>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
