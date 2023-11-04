"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from '@/components/view/animation-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import Project1 from "../../../../public/images/portofoliosaya.png"


const variants = {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 2 } },
  };

  const Portofolio = ({title,img,link}) => {
    return (
      <motion.div
      initial={{ y: 50, scale: 0.9 }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      >
        <portofofio className="w-full md:w-1/2 lg:w-full">
            <Link href={link} target="_blank" className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg">
              <Image src={img} alt={title} width={800} height={800} className="w-full h-auto " />
            </Link>
            <div className="w-full mt-4 md:pl-6">
              <Link href={link} target="_blank" className="">
                <h2 className="my-2 w-full text-xl font-bold text-white text-center">{title}</h2>
              </Link>
            </div>
        </portofofio>
      </motion.div>
    )
  }


export default function ClientPortofolio() {
  return (
    <main>
        <div className='max-w-screen md:py-12 mt-40 xl:mt-36 md:mt-12 justify-center items-center flex flex-col mx-4 md:mx-8'>
            <AnimationWrapper>
                
                <motion.div className='w-full mb-4 md:mb-16 flex flex-col items-center justify-center' variants={variants}>
                <h1 className='text-red-600 text-center text-3xl xl:text-5xl'>Portofolio <span className='font-bold'>Grock</span></h1>
                  <div className='xl:grid xl:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-24 px-2 xl:px-16'>
                    <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio ,Jawa Tengah"
                      link="/"
                      />
                    </div>
                    <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio, Jawa Barat"
                      link="/"
                      />
                    </div>
                    <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                     <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                    <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                    <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                    <div className='mb-12 xl:mb-0'>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                    <div className=''>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                    <div className=''>
                      <Portofolio
                      img={Project1}
                      title="Portofolio"
                      link="/"
                      />
                      
                    </div>
                  </div>
                </motion.div>
            </AnimationWrapper>
        </div>
    </main>
  )
}
