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

const Sample = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, halaman, Bandwidth,  EmailCustom,  Perpanjangan   }) => {
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
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center gap-8 -mr-20'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-10'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL/HTTPS</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Halaman</h1>
                        </div>
                        <h3 className='ml-10'>{halaman}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1> Email Custom </h1>
                        </div>
                        <h3 className='ml-10'>{EmailCustom}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *LEMBAGA*harga 2 juta, bisa minta informasinya lebih lanjut..."
              }   
                
                className='py-4 px-16 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample1 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, halaman, Bandwidth,  EmailCustom,  WebDesain,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan   }) => {
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
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center gap-8 -mr-20'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-10'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL/HTTPS</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Halaman</h1>
                        </div>
                        <h3 className='ml-10'>{halaman}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1> Email Custom </h1>
                        </div>
                        <h3 className='ml-10'>{EmailCustom}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *SUPER*harga 3 juta, bisa minta informasinya lebih lanjut..."
              }    
                
                className='py-4 px-16 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

export default function HargaListInstansi() {
    return (
        <main>
            <div className='max-w-screen py-6 md:py-12 pt-40 xl:pt-40 px-4 md:px-32 mx-auto'>
                <AnimationWrapper>
                    <h1 className="text-slate-300 font-bold text-2xl md:text-3xl lg:text-5xl text-center">
                        Harga Layanan Grock
                    </h1>
                    <motion.div className='' variants={variants}>
                        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-24'>
                            <div className=''>
                                <Sample
                                    title="LEMBAGA"
                                    jenis="Profil LSM / Sekolah / Panti / Ormas / Desa"
                                    text="Start From :"
                                    hargastart="3.500.000"
                                    hargafix="2 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="200 MB"
                                    halaman="10-15"
                                    Bandwidth="Unmetered"
                                    EmailCustom="15 Akun"
                                    Perpanjangan="Perpanjang500rb/Tahun"
                                />
                            </div>
                            <div>
                                <Sample1
                                    title="INSTANSI"
                                    jenis="Profil Instansi / Akademik / Biro Pemerintahan / Dinas"
                                    text="Start From :"
                                    hargastart="4.000.000"
                                    hargafix="3 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="500MB"
                                    halaman="15-25"
                                    Bandwidth="Unmetered"
                                    EmailCustom="25 Akun"
                                    Perpanjangan="Perpanjang800rb/Tahun"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimationWrapper>
            </div>
        </main>
    )
}
