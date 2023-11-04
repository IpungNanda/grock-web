"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Link from 'next/link';
import AnimationWrapper from '../../animation-wrapper';
import ExperienceHome from '../experience-home';
import KeuntunganHome from '../keuntungan-home';
import TestimoniHome from '../testimoni-home';

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

export default function HomeView() {

    const setVariants = useMemo(() => variants(), []);

    return (
        <main id="home" className='bg-black'>
            <div className="max-w-screen pt-32 xl:pt-36 mx-auto ">
                <AnimationWrapper>
                    <motion.div
                        className={
                            " ml-0 xl:ml-6 mr-0 xl:mr-52 px-8 xl:px-16"
                        }
                        variants={setVariants}
                    >
                        <div className="-ml-4 lg:ml-4 overflow-hidden justify-center items-start">
                            <h1 className="mb-4 text-2xl text-white lg:text-3xl xl:text-5xl font-medium leading-normal">
                                Jasa Web Design - Pembuatan Website <br></br>
                                <h1 className="text-2xl mt-4 text-white-600 lg:text-3xl xl:text-5xl font-medium leading-normal">
                                    Murah Solo
                                </h1>
                            </h1>
                            <p className="text-white mt-4 mb-8 text-md xl:text-xl">
                                Grock menyediakan paket pembuatan website murah all in: <span className='font-bold'>Design, Admin Website, SEO & Domain/Hosting </span>dengan harga mulai dari <span className='font-bold'>600k rp.</span>

                            </p>
                            <p className="text-white mt-4 mb-8 text-md xl:text-xl">
                                <span className='font-bold'>Kami bantu anda hemat biaya operasional dan tenaga.</span> Silahkan hubungi Jasa Web Design Grock di nomor : 0895805399090 (Jam & Hari Kerja).
                            </p>
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
                    <ExperienceHome/>
                    <KeuntunganHome/>
                    <TestimoniHome/>
                </AnimationWrapper>
            </div>
        </main>
    )
}
