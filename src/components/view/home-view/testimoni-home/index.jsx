import React from 'react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import AnimationWrapper from '../../animation-wrapper';
import { AiFillStar } from 'react-icons/ai';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

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

const Testimoni = ({ title, summary }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <testimoni className="w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center border-[2px] bg-slate-800 border-white text-white font-semibold rounded-lg text-xl tracking-widest shadow-lg hover:shadow-white transition-all outline-none p-4 md:p-6 ">
        <FaQuoteLeft className="w-8 h-8 mr-72 xl:mr-64 text-white" /> 
        <div className="w-full flex flex-col justify-between items-start mt-4">
          <h2 className="my-2 w-full text-3xl text-left font-bold text-red-600">{title}</h2>
          <p className="text-md text-white">{summary}</p>
          <div className="mt-2 w-full flex items-center justify-start text-yellow-600">
            <AiFillStar className="w-5 h-5" />
            <AiFillStar className="w-5 h-5" />
            <AiFillStar className="w-5 h-5" />
            <AiFillStar className="w-5 h-5" />
            <AiFillStar className="w-5 h-5" />
          </div>
        </div>
        <FaQuoteRight className="w-8 h-8 ml-72 xl:ml-64 text-white" /> 
      </testimoni>
    </motion.div>
  );
};

export default function TestimoniHome() {
  return (
    <div className="max-w-screen pt-6 xl:pt-12 px-4 md:px-24 mx-auto">
      <AnimationWrapper>
        <motion.div className="" variants={variants}>
          <h1 className="text-slate-300 font-bold text-2xl md:text-3xl lg:text-5xl text-center">
            Testimoni Klien Grock
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-4 md:mt-24">
            <div>
              <Testimoni
                title="CYBER SAURUS"
                summary="Pengerjaan nya cepat dan hasilnya sangat memuaskan, TerimaKasih Grock Web"
              />
            </div>
            <div>
              <Testimoni
                title="CYBER SAURUS"
                summary="Pengerjaan nya cepat dan hasilnya sangat memuaskan, TerimaKasih Grock Web"
              />
            </div>
            <div>
              <Testimoni
                title="CYBER SAURUS"
                summary="Pengerjaan nya cepat dan hasilnya sangat memuaskan, TerimaKasih Grock Web"
              />
            </div>
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
