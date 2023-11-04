"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from '@/components/view/animation-wrapper';
import { HiCheck } from "react-icons/hi"
import Link from 'next/link';

const variants = {
    offscreen: {
        y: 150,
        opacity: 0,
    },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 2 } },
};

const Sample = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, halaman, Bandwidth,  EmailCustom,  WebDesain,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan   }) => {
    return (
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <harga className="w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center border-[2px] bg-slate-800 border-white text-white font-semibold rounded-lg tracking-widest shadow-lg hover:shadow-white transition-all outline-none p-4 md:p-8 ">
                <h1 className='text-white text-2xl font-bold'>{title}</h1>
                <h2 className='text-slate-300 text-start'>{jenis}</h2>
                <div className='mt-8 flex flex-col items-center'>
                    <h2 className='text-red-600'>{text}</h2>
                    <h3 className='text-bold'>{hargastart}</h3>
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-3xl xl:text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='grid grid-cols-2 ml-2 gap-16 xl:gap-0 xl:ml-0 -mr-28 items-center'>
                            <h1 className=''>FreeDomain</h1>
                            <h3 className='ml-20'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-16 xl:gap-0 ml-2 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-2 gap-16 xl:gap-0  xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2  ml-2 gap-16 xl:gap-0  xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *SUPER UNLIMITED*harga 4 juta-15 JUTA, bisa minta informasinya lebih lanjut..."
              }    
                
                className='py-4 px-16 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

export default function HargaCustomUnlimited() {
    return (
        <main>
            <div className='max-w-screen py-6 md:py-12 pt-40 xl:pt-40 px-4 md:px-96 mx-auto'>
                <AnimationWrapper>
                    <h1 className="text-slate-300 font-bold text-2xl md:text-3xl lg:text-5xl text-center">
                        Harga Layanan Grock
                    </h1>
                    <motion.div className='' variants={variants}>
                        <div className='grid grid-cols-1 gap-2 md:gap-4 mt-4 md:mt-24'>
                            <div className=''>
                                <Sample
                                    title="SUPER UNLIMITED"
                                    jenis="Big Company & Instansi Aktif"
                                    text="Start From :"
                                    hargafix="4 Juta- 15 Juta"
                                    domain="Ya"
                                    ssl="Free"
                                    hosting="Free"
                                    Bandwidth=" Unlimited / Bulan"
                                    Perpanjangan="Perpanjang mulai 2.750 Juta/tahun"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimationWrapper>
            </div>
        </main>
    )
}
