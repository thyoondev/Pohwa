import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[100dvh] bg-[url('/bg_1.png')] bg-cover bg-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full flex justify-center items-center bg-background/50 p-4 lg:p-14"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base lg:text-md font-archivo max-w-3xl"
          >
            포화(Pohwa)는 모터사이클과 스트리트 문화를 결합해 새롭고 대담한
            라이프스타일을 제시하는 브랜드입니다.
            <br /> <br />
            &apos;Break the Chain&apos;이라는 슬로건 아래, 기존의 틀을 깨고
            자유와 개성을 추구하는 이들에게 영감을 주며, 감각적인 영상 콘텐츠와
            다채로운 오프라인 이벤트로 독보적인 문화를 만들어갑니다.
            <br /> <br />
            포화는 패션, 아트, 디지털을 아우르는 다양한 영역에서 끊임없는 도전을
            이어가며, 스트리트 라이프의 진정한 매력을 경험할 수 있는 새로운
            경험을 제공합니다.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
