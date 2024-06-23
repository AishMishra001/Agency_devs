import React from 'react';
import { LampContainer1 } from './ui/lamp1';
import { motion } from 'framer-motion';
import HexagonSlider1 from './ui/slider1/slider';
import { LampContainer2 } from './ui/lamp2';
import HexagonSlider2 from './ui/slider2/slider';

function Services() {
  return (
    <div className='h-full w-screen'>
      {/* PRODUCT DESIGN */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <LampContainer1>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-[280px] bg-gradient-to-br from-slate-200 to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex flex-col gap-0"
          >
            <h1 className="text-transparent bg-gradient-to-t from-gray-700 to-white bg-clip-text cinzel-bold-header">
              Product Design
            </h1>
            <br></br>
            <br></br>
          </motion.div>
          <HexagonSlider1 />
        </LampContainer1>
      </div>

      {/* GAME DEVELOPMENT */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <LampContainer2>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-[280px] bg-gradient-to-br from-slate-200 to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex flex-col gap-0"
          >
            <h1 className="text-transparent bg-gradient-to-t from-gray-500 to-white bg-clip-text cinzel-bold-header">
              Game Development
            </h1>
            <br></br>
            <br></br>
          </motion.div>
          <HexagonSlider2 />
        </LampContainer2>
      </div>
    </div>
  );
}

export default Services;
