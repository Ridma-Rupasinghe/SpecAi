import aboutD from "/Images/aboutD.webp";
import aboutM from "/Images/aboutM.webp";
import girl from "/Images/girl.webp";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" w-full">
      <div className="relative hidden lg:block w-full">
        <img src={aboutD} className="w-full"/>


        <motion.img
        src={girl}
        className="absolute w-[22.5%] right-0"
        animate={{
          top: ["0%", "15%", "0%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      </div>

      <div className="relative block lg:hidden w-full">
        <img src={aboutM} className="w-full" />


        
        <motion.img
        src={girl}
        className="absolute w-[29.3%] bottom-0 scale-x-[-1]"
        animate={{
          left: ["10%", "30%", "10%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      </div>
    </div>
  );
}
