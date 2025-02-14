import { motion } from "framer-motion";

const Intro = () => {
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

  return (
    <div className="relative h-full w-screen overflow-hidden bg-red-600 select-none">
      {/* 비디오 레이어에 motion 적용 */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative flex flex-col justify-between h-full">
        <div className="w-full flex flex-col items-center justify-end h-full font-anton ">
          <motion.div
            className="lg:text-[15vw] text-[30vw] font-bold relative z-10 leading-[1.2] tracking-normal uppercase mix-blend-difference px-2"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <span>Break the Chain</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
