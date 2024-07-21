import React from "react";
import { GrTwitter } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { motion } from "framer-motion";

const MobileSocials = () => {
  return (
    <div className="absolute bottom-5 flex flex-col gap-2 md:hidden">
      <p className="mt-8 w-full text-center text-purple-heavy">
        Connect with me on:
      </p>
      <div className="flex w-full justify-center">
        <motion.a
          whileTap={{ scale: 1.1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/irrfansk"
          className="flex h-full items-center justify-center px-4"
        >
          <GrTwitter />
        </motion.a>
        <motion.a
          whileTap={{ scale: 1.1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/irfanskh/"
          className="flex h-full items-center justify-center px-4"
        >
          <GrLinkedin />
        </motion.a>
      </div>
    </div>
  );
}
export default MobileSocials;