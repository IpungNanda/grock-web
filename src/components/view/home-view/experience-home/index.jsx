import React from 'react';
import { useEffect, useMemo, useRef } from 'react';
import AnimationWrapper from '../../animation-wrapper';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaComputer } from 'react-icons/fa6';
import { AiOutlineArrowRight } from 'react-icons/ai';

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
      },
    }),
  };
}

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function ExperienceHome() {
  const setVariants = useMemo(() => variants(), []);
  return (
    <div className="py-6 md:py-12 mt-24 mx-auto px-4 md:px-24 bg-slate-800">
      <AnimationWrapper>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <span className="inline-block text-4xl font-bold text-red-600 ">
              <AnimatedNumbers value={20} />+
            </span>
            <div className="flex items-center mt-4">
              <BsGraphUpArrow className="h-8 w-8 text-red-600 mr-4 text-center" />
              <h1 className="text-xl text-red-600 mt-4">Offline Clients</h1>
            </div>
            <p className="text-slate-300 mt-4 text-md">Total klien offline lebih dari 100 klien </p>
          </div>
          <div className="text-center md:text-left">
            <span className="inline-block text-4xl font-bold text-red-600">
              <AnimatedNumbers value={20} />+
            </span>
            <div className="flex items-center mt-4">
              <BsGraphUpArrow className="h-8 w-8 text-red-600 mr-4 text-center" />
              <h1 className="text-xl text-red-600 mt-4"> Happy Clients</h1>
            </div>
            <p className="text-slate-300 mt-4 text-md">Total klien online lebih dari 50 klien</p>
          </div>
          <div className="text-center md:text-left">
            <span className="inline-block text-4xl font-bold text-red-600">
              <AnimatedNumbers value={20} />+
            </span>
            <div className="flex items-center mt-4">
              <FaComputer className="h-8 w-8 text-red-600 mr-4 text-center" />
              <h1 className="text-xl text-red-600">Experienced</h1>
            </div>
            <p className="text-slate-300 mt-4 text-md">Memulai bisnis tahun 2009, lebih dari 10 tahun.</p>
          </div>
          <div className="text-center md:text-left">
            <span className="inline-block text-4xl font-bold text-red-600">
              <AnimatedNumbers value={600} />
            </span>
            <div className="flex items-center mt-4">
              <AiOutlineArrowRight className="h-8 w-8 text-red-600 mr-4 text-center" />
              <h1 className="text-xl text-red-600">K Rupiah</h1>
            </div>
            <p className="text-slate-300 mt-4 text-md">Harga jasa web design murah mulai dari 600K.</p>
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
