// Service.jsx
import React from 'react';
import { LampContainer } from './ui/lamp1';
import { motion } from 'framer-motion';
import { BentoGridThirdDemo } from './BentoGridService';
import SwiperComponent from './ui/Swiper';
import Slider from './ui/slider/slider';
import ImageSlider from './ui/slider/slider';
import HexagonSlider from './ui/slider/slider';

function Services() {
  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <LampContainer>
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
             {/* <SwiperComponent></SwiperComponent> */}
        </motion.div>
          <HexagonSlider></HexagonSlider>
      </LampContainer>
    </div>
  );
}

export default Services;
