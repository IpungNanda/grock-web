"use client"
import React from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from '@/components/view/animation-wrapper';
import { TbBrandNextjs, BsGraphUpArrow } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import Link from 'next/link';


const List = ({ title, summary, link }) => {
  return (
    <motion.div
      initial={{ y: 50, scale: 0.9 }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full rounded-3xl border border-solid border-red-600 bg-transparent shadow-red-600 shadow-2xl p-4 md:p-6 mt-8">
        <div className="w-full md:w-1/2 flex flex-col justify-between items-start mt-4 md:pl-0">
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-4xl text-left font-bold text-red-600">{title}</h2>
          </Link>
          <p className="my-2 font-medium text-white">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={link} target="_blank" className="rounded-lg text-red-600 border-red-600 bg-transparent shadow-red-600 p-2 px-6 text-lg font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 hover:text-white duration-300">
              List Harga
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 2 } },
};

export default function ListJasa() {
  return (
    <main>
      <div className="max-w-screen py-6 md:py-12 mt-32 xl:mt-36 md:mt-12 justify-center items-center flex flex-col mx-4 md:mx-8 ">
        <AnimationWrapper>
          <motion.div className="w-full mb-4 md:mb-16 flex flex-col items-center justify-center" variants={variants}>
            <h1 className='text-red-600 text-center text-3xl xl:text-5xl'>Layanan Jasa <span className='font-bold'>Grock</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-24">
              <div className=''>
                <List
                  title="Jasa Web Design"
                  summary="Jasa web design yang kami tawarkan memiliki hasil desain dan tampilan yang indah serta orisinil."
                  link="https://nextjs.org/learn/foundations/about-nextjs"
                />
              </div>
              <div className=''>
                <List
                  title="Jasa SEO Website"
                  summary="Jasa SEO: mempromosikan website anda untuk tampil di halaman depan hasil pencarian Google Search."
                  link="https://encircletechnologies.com/blog/6-reasons-why-tailwind-css-is-worth-it/"
                />
              </div>
              <div className=''>
                <List
                  title="Jasa Admin Website"
                  summary="Jasa admin/maintenance website: layanan jasa admin/pengelola website baru maupun lama anda."
                  link="https://encircletechnologies.com/blog/6-reasons-why-tailwind-css-is-worth-it/"
                />
              </div>
              <div className=''>
                <List
                  title="Jasa Redesign Website"
                  summary="Jasa redesign website yang kami tawarkan memiliki hasil desain dan tampilan yang indah serta orisinil."
                  link="https://encircletechnologies.com/blog/6-reasons-why-tailwind-css-is-worth-it/"
                />
              </div>
            </div>
          </motion.div>
        </AnimationWrapper>
      </div>
    </main>
  );
}
