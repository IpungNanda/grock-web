"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import AnimationWrapper from '../../animation-wrapper';
import { TbSeo } from "react-icons/tb";
import { GiReceiveMoney, GiBoltShield } from "react-icons/gi";
import { RiTimerFlashFill } from "react-icons/ri"

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

export default function KeuntunganHome() {

    const setVariants = useMemo(() => variants(), []);

    return (
        <div className='max-w-screen py-24 px-4 md:px-24 mx-auto'>
        <AnimationWrapper>
            <motion.div className="" variants={setVariants}>
                <div>
                    <h1 className='text-slate-300 font-bold text-2xl md:text-3xl lg:text-4xl text-center'>
                        Dengan memilih Grock sebagai patner Website Anda
                    </h1>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl text-center mt-6'>
                        Anda akan mendapatkan layanan dan kualitas terbaik
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 mt-16'>
                    <div className='py-8 md:py-16 px-8 md:px-16 border-[2px] bg-transparent border-white text-white font-semibold rounded-lg text-xl md:text-2xl lg:text-3xl tracking-widest shadow-lg hover:shadow-white transition-all outline-none ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <GiReceiveMoney className='h-16 md:h-32 w-16 md:w-32 text-white mx-auto' />
                        <h1 className='text-red-600 text-xl md:text-3xl text-center'>Harga Terjangkau</h1>
                    </div>
                    <div className='py-8 md:py-16 px-8 md:px-16 border-[2px] bg-transparent border-white text-white font-semibold rounded-lg text-xl md:text-2xl lg:text-3xl tracking-widest shadow-lg hover:shadow-white transition-all outline-none ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <GiBoltShield className='h-16 md:h-32 w-16 md:w-32 text-white mx-auto' />
                        <h1 className='text-red-600 text-xl md:text-3xl text-center'>Bergaransi 1 Tahun</h1>
                    </div>
                    <div className='py-8 md:py-16 px-8 md:px-16 border-[2px] bg-transparent border-white text-white font-semibold rounded-lg text-xl md:text-2xl lg:text-3xl tracking-widest shadow-lg hover:shadow-white transition-all outline-none ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <TbSeo className='h-16 md:h-32 w-16 md:w-32 text-white mx-auto' />
                        <h1 className='text-red-600 text-xl md:text-3xl text-center'>SEO Friendly</h1>
                    </div>
                    <div className='py-8 md:py-16 px-8 md:px-16 border-[2px] bg-transparent border-white text-white font-semibold rounded-lg text-xl md:text-2xl lg:text-3xl tracking-widest shadow-lg hover:shadow-white transition-all outline-none ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <RiTimerFlashFill className='h-16 md:h-32 w-16 md:w-32 text-white mx-auto' />
                        <h1 className='text-red-600 text-xl md:text-3xl text-center'>Support 24 Jam</h1>
                    </div>
                </div>
            </motion.div>
        </AnimationWrapper>
    </div>
    )
}
