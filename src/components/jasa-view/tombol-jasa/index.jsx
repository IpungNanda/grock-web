"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Link from 'next/link';
import AnimationWrapper from '@/components/view/animation-wrapper';

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
                type: "spring",
                duration,
            },
        }),
    };
}

export default function TombolJasa() {

    const setVariants = useMemo(() => variants(), []);

  return (
    <div className='justify-center items-center flex flex-col mx-4 md:mx-8'>
        <AnimationWrapper>
            <motion.div className='' variants={variants}>
                <div className='grid grid-cols-5 mx-48 gap-0 mt-4 md:mt-24'>
                    <div className=''>
                        <Link href="/" className='p-6 text-white bg-slate-600 hover:bg-red-600 text-lg'>1</Link>
                    </div>
                    <div className=''>
                        <Link href="/" className='p-6 text-white bg-transparent hover:bg-red-600 text-lg'>2</Link>
                    </div>
                    <div className=''>
                        <Link href="/" className='p-6 text-white bg-transparent hover:bg-red-600 text-lg'>3</Link>
                    </div>
                    <div className=''>
                        <Link href="/" className='p-6 text-white bg-transparent hover:bg-red-600 text-lg'>4</Link>
                    </div>
                    <div className=''>
                        <Link href="/" className='p-6 text-white bg-transparent hover:bg-red-600 text-lg'>5</Link>
                    </div>

                </div>
            </motion.div>
        </AnimationWrapper>
    </div>
  )
}
