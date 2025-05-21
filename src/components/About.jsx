import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IMG2 from "../img/img-2.jpeg";

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <div className="p-4 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-2 md:px-8 sm:mt-[50px] md:mt-[-200px]">
          <motion.div
            className="flex-1 p-4 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={IMG2}
              alt="Donation"
              className="w-64 md:max-w-md w-full rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex-col justify-center md:justify-end p-4 md:p-10 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center md:text-left">
              Welcome to Our Donations Website
            </h1>
            <p className="text-base md:text-2xl text-gray-700 text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorem ipsa omnis beatae corporis, ut dolor delectus velit sunt,
              hic impedit corrupti sapiente ducimus minus itaque, consequatur
              unde quos a laborum cumque accusamus aspernatur voluptate magnam
              nam. Eos, iusto perferendis!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
