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

const Sample = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, Bandwidth,  EmailCustom,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan, link }) => {
    return (
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <harga className="w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center border-[2px] bg-slate-800 border-white text-white font-semibold rounded-lg tracking-widest shadow-lg hover:shadow-white transition-all outline-none p-4 md:p-8 ">
                <h1 className='text-white text-2xl font-bold'>{title}</h1>
                <h2 className='-ml-6 text-slate-300 text-start'>{jenis}</h2>
                <div className='mt-8 flex flex-col items-center'>
                    <h2 className='text-red-600 mt-12'>{text}</h2>
                    <h3 className='text-bold'>{hargastart}</h3>
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center ml-6 xl:ml-0'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL/HTTPS</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1> Email Custom </h1>
                        </div>
                        <h3 className='ml-10'>{EmailCustom}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Desain Responsive</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Fitur Chat WhatsApp</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href={link} className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *Paket Company Profile*harga 1 juta, bisa minta informasinya lebih lanjut..."
              }
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample2 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, Bandwidth,  EmailCustom,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan, link }) => {
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
                    <h2 className='text-red-600 mt-6'>{text}</h2>
                    <h3 className='text-bold'>{hargastart}</h3>
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center ml-6 xl:ml-0'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:-mr-0 xl:ml-10'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL/HTTPS</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1> Email Custom </h1>
                        </div>
                        <h3 className='ml-10'>{EmailCustom}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Desain Responsive</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Fitur Chat WhatsApp</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href={link} className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *Paket Toko Online / Catalog*harga 1 juta, bisa minta informasinya lebih lanjut..."
              }
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample3 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, Bandwidth,  EmailCustom,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan, link }) => {
    return (
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <harga className="w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center border-[2px] bg-slate-800 border-white text-white font-semibold rounded-lg tracking-widest shadow-lg hover:shadow-white transition-all outline-none p-4 md:p-8 ">
                <h1 className='text-white text-2xl mr-12 font-bold'>{title}</h1>
                <h2 className='text-slate-300 text-start'>{jenis}</h2>
                <div className='mt-8 flex flex-col items-center'>
                    <h2 className='text-red-600 mt-8'>{text}</h2>
                    <h3 className='text-bold'>{hargastart}</h3>
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center ml-6 xl:ml-0'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL/HTTPS</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1> Email Custom </h1>
                        </div>
                        <h3 className='ml-10'>{EmailCustom}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center mt-3'>
                        <div className='flex items-center'>
                            <h1>Desain</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center mt-3'>
                        <div className='flex items-center'>
                            <h1> Live Chat</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href={link} className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *Paket Instansi*harga 2 juta, bisa minta informasinya lebih lanjut..."
              } 
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample4 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, Bandwidth,  EmailCustom, Desain, Fitur, Perpanjangan, link }) => {
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
                        <div className='flex items-center ml-6 xl:ml-0'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>SSL/HTTPS</h1>
                        </div>
                        <h3 className='ml-10'>{ssl}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Hosting</h1>
                        </div>
                        <h3 className='ml-10'>{hosting}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>Bandwidth </h1>
                        </div>
                        <h3 className='ml-10'>{Bandwidth}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1> Email Custom </h1>
                        </div>
                        <h3 className='ml-10'>{EmailCustom}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1> Fitur </h1>
                        </div>
                        <h3 className='ml-10'>{Fitur}</h3>
                    </div>
                    <div className='grid grid-cols-2 ml-6 xl:ml-0 items-center'>
                        <div className='flex items-center'>
                            <h1>desain</h1>
                        </div>
                        <h3 className='ml-10'>{Desain}</h3>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className='text-sm text-slate-300'>Biaya Website Custom Menyesuaikan Kerumitan. Konsultasikan Kebutuhan anda dengan Tim kami & dapatkan penawaran terbaik</p>
                </div>
                <div className='mt-9'>
                    <Link href={link} className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *Paket Custom Unlimited*harga 4 juta, bisa minta informasinya lebih lanjut..."
              } 
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

export default function SampleHarga() {
    return (
        <main>
            <div className='max-w-screen py-6 md:py-12 pt-40 xl:pt-40 px-4 md:px-16 mx-auto'>
                <AnimationWrapper>
                    <h1 className="text-slate-300 font-bold text-2xl md:text-3xl lg:text-5xl text-center">
                        Harga Layanan Grock
                    </h1>
                    <motion.div className='' variants={variants}>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-24'>
                            <div className=''>
                                <Sample
                                    title="Paket Company Profile"
                                    jenis="Company Profile Bisnis"
                                    text="Start From :"
                                    hargastart="1.500.000"
                                    hargafix="1 Juta"
                                    domain=".com"
                                    ssl="Free"
                                    hosting="Free"
                                    Bandwidth="min.40GB"
                                    EmailCustom="Free"
                                    DesainLogo="Free Simple"
                                    DesainResponsive="Yes"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    link="/harga-paket-company-profile"
                                    Perpanjangan="Perpanjang mulai 400rb/tahun"
                                />
                            </div>
                            <div>
                                <Sample2
                                    title="Paket Toko Online / Catalog"
                                    jenis="Cocok untuk Online Shop / UKM"
                                    text="Start From :"
                                    hargastart="1.500.000"
                                    hargafix="1 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="Free"
                                    Bandwidth="min.40GB"
                                    EmailCustom="Free"
                                    DesainLogo="Free Simple"
                                    DesainResponsive="Yes"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    link="/harga-paket-tokoonline-katalog"
                                    Perpanjangan="Perpanjang mulai 400rb/tahun"
                                />
                            </div>
                            <div>
                                <Sample3
                                    title="Paket Instansi"
                                    jenis="Cocok untuk Perusahaan Menengah, Lembaga, Instansi, Sekolah, dll"
                                    text="Start From :"
                                    hargastart="3.500.000"
                                    hargafix="2 Juta"
                                    domain=".com"
                                    ssl="Free"
                                    hosting="Free"
                                    Bandwidth="Unmetered"
                                    EmailCustom="Free"
                                    DesainLogo="Free Simple"
                                    DesainResponsive=" Semi Custom"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    link="/harga-paket-instansi"
                                    Perpanjangan="Perpanjang mulai 500rb/tahun"
                                />
                            </div>
                            <div>
                                <Sample4
                                    title="Paket Custom Unlimited"
                                    jenis="Cocok untuk Professional, Sistem Informasi, dll"
                                    text="Start From :"
                                    hargastart="6.000.000"
                                    hargafix="4 Juta"
                                    domain="Ya"
                                    ssl="Free"
                                    hosting="Unlimited"
                                    Bandwidth="Unmetered"
                                    EmailCustom="Unlimited Akun"
                                    Fitur="Custom"
                                    Desain="Full Custom"
                                    link="/harga-paket-custom-unlimited"
                                    Perpanjangan="Perpanjang Mulai 2jtan/Tahun"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimationWrapper>
            </div>
        </main>
    )
}
