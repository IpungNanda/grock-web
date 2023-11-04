"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Link from 'next/link';
import AnimationWrapper from '@/components/view/animation-wrapper';
import TombolPortofolio from '@/components/portofolio-view/tombol-portofolio';
import ClientPortofolio3 from '../client-portofolio3';
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

export default function PortofolioView3() {

    const setVariants = useMemo(() => variants(), []);

    return (
        <div id="home" className='bg-black'>
            <div className="max-w-screen pt-44 xl:pt-52 mx-auto ">
                <AnimationWrapper>
                    <motion.div
                        className={
                            " ml-0 xl:ml-6 mr-0 xl:mr-52 px-8 xl:px-16"
                        }
                        variants={setVariants}
                    >
                        <div className="-ml-4 lg:ml-4 overflow-hidden justify-center items-start">
                            <div className="mb-4 xl:mb-6 text-2xl text-white lg:text-3xl xl:text-5xl font-medium leading-normal">
                                Portofolio/Daftar Klien Jasa <br></br>
                                <h1 className="text-2xl mt-4 xl:mt-6 text-white-600 lg:text-3xl xl:text-5xl font-bold leading-normal">
                                    Web Desain Grock
                                </h1>
                            </div>
                            <div>
                                <Link
                                    href={
                                        "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya mau buat website. Bisa minta informasinya lebih lanjut..."
                                      }
                                >
                                    <button className="py-3 px-6 border-[2px] bg-transparent border-white text-white font-semibold rounded-lg text-xl tracking-widest shadow-lg hover:shadow-white transition-all outline-none">
                                        Kontak Kami
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                    <ClientPortofolio3/>
                    <TombolPortofolio/>
                </AnimationWrapper>
            </div>
        </div>
    )
}
