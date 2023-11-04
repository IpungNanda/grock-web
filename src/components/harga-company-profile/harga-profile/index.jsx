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
                <h1 className='-ml-4 text-white text-2xl font-bold'>{title}</h1>
                <h2 className='text-slate-300 text-start'>{jenis}</h2>
                <div className='mt-8 flex flex-col items-center'>
                    <h2 className='text-red-600 mt-14'>{text}</h2>
                    <h3 className='text-bold'>{hargastart}</h3>
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center gap-3'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
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
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Web Desain  </h1>
                        </div>
                        <h3 className='ml-10'>{ WebDesain }</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Desain Responsive</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Fitur Chat WhatsApp</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link  href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *WEB PROFILE GR*harga 1 juta, bisa minta informasinya lebih lanjut..."
              }  
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample2 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, halaman, Bandwidth,  EmailCustom,  WebDesain,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan   }) => {
    return (
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <harga className="w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center border-[2px] bg-slate-800 border-white text-white font-semibold rounded-lg tracking-widest shadow-lg hover:shadow-white transition-all outline-none p-4 md:p-8 ">
                <h1 className='-ml-20 text-white text-2xl font-bold'>{title}</h1>
                <h2 className='text-slate-300 text-start'>{jenis}</h2>
                <div className='mt-8 flex flex-col items-center'>
                    <h2 className='text-red-600 mt-2'>{text}</h2>
                    <h3 className='text-bold'>{hargastart}</h3>
                    <h1 className='text-red-600 mt-4'>Rp <span className='text-5xl text-red-600'>{hargafix}</span></h1>
                </div>
                <div className='mt-16'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center gap-3'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
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
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Web Desain  </h1>
                        </div>
                        <h3 className='ml-10'>{ WebDesain }</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Desain Responsive</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Fitur Chat WhatsApp</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *WEB BISNIS*harga 2 juta, bisa minta informasinya lebih lanjut..."
              }   
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample3 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, halaman, Bandwidth,  EmailCustom,  WebDesain,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan   }) => {
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
                        <div className='flex items-center gap-3'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
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
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Web Desain  </h1>
                        </div>
                        <h3 className='ml-10'>{ WebDesain }</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Desain Responsive</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Fitur Chat WhatsApp</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *WEB PERUSAHAAN*harga 3 juta, bisa minta informasinya lebih lanjut..."
              }   
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

const Sample4 = ({ title, jenis, hargastart,hargafix, text, domain, ssl, hosting, halaman, Bandwidth,  EmailCustom,  WebDesain,  DesainLogo,  DesainResponsive, FiturChatWhatsApp, Support, Garansi, Perpanjangan   }) => {
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
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='flex items-center gap-3'>
                            <h1>FreeDomain</h1>
                            <h3 className='ml-24 xl:ml-10'>{domain}</h3>
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
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Web Desain  </h1>
                        </div>
                        <h3 className='ml-10'>{ WebDesain }</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>  Desain Logo </h1>
                        </div>
                        <h3 className='ml-10'>{DesainLogo}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Desain Responsive</h1>
                        </div>
                        <h3 className='ml-10'>{DesainResponsive}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Fitur Chat WhatsApp</h1>
                        </div>
                        <h3 className='ml-10'>{FiturChatWhatsApp}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Support</h1>
                        </div>
                        <h3 className='ml-10'>{Support}</h3>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex items-center'>
                            <h1>Garansi</h1>
                        </div>
                        <h3 className='ml-10'>{Garansi}</h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link href="/" className='py-2 px-4 bg-transparent text-red-600 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white'>
                    Selengkapnya
                    </Link>
                </div>
                <h3 className='mt-4 text-red-600 text-lg text-center '>{Perpanjangan}</h3>
                <Link href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya tertarik dengan paket *PERUSAHAAN PRO*harga 4 juta, bisa minta informasinya lebih lanjut..."
              }   
                
                className='py-4 px-12 bg-red-600 border-red-600 border-2 mt-4 rounded-lg'>Pilih Paket</Link>
            </harga>
        </motion.div>
    );
};

export default function HargaProfile() {
    return (
        <main>
            <div className='max-w-screen py-6 md:py-12 pt-40 xl:pt-40 px-4 md:px-16 mx-auto'>
                <AnimationWrapper>
                    <h1 className="text-slate-300 font-bold text-2xl md:text-3xl lg:text-5xl text-center">
                        Harga Layanan Grock
                    </h1>
                    <motion.div className='' variants={variants}>
                        <div className='grid grid-cols-1 md:grid-cols-4 mt-4 gap-4 md:gap-6 md:mt-24'>
                            <div className=''>
                                <Sample
                                    title="WEB PROFILE GR"
                                    jenis="Profil Bisnis Standart / UKM / Web Personal"
                                    text="Start From :"
                                    hargastart="1.500.000"
                                    hargafix="1 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="100MB"
                                    halaman="5-6"
                                    Bandwidth="40GB"
                                    EmailCustom="Free"
                                    WebDesain="Standart"
                                    DesainLogo="Free Simple"
                                    DesainResponsive="Yes"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    Perpanjangan="Perpanjang400rb/Tahun"
                                />
                            </div>
                            <div>
                                <Sample2
                                    title="WEB BISNIS"
                                    jenis="Profil Bisnis Lengkap/Bisnis Waralaba/Jaringan Distribusi"
                                    text="Start From :"
                                    hargastart="2.500.000"
                                    hargafix="2 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="100MB"
                                    halaman="5-6"
                                    Bandwidth="40GB"
                                    EmailCustom="Free"
                                    WebDesain="Standart"
                                    DesainLogo="Free Simple"
                                    DesainResponsive="Yes"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    Perpanjangan="Perpanjang500rb/Tahun"
                                />
                            </div>
                            <div>
                                <Sample3
                                    title="WEB PERUSAHAAN"
                                    jenis="Company Profile Perusahaan Lokal-Menengah"
                                    text="Start From :"
                                    hargastart="4.000.000"
                                    hargafix="3 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="100MB"
                                    halaman="5-6"
                                    Bandwidth="40GB"
                                    EmailCustom="Free"
                                    WebDesain="Standart"
                                    DesainLogo="Free Simple"
                                    DesainResponsive="Yes"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    Perpanjangan="Perpanjang800rb/Tahun"
                                />
                            </div>
                            <div>
                                <Sample4
                                    title="PERUSAHAAN PRO"
                                    jenis="Company Profile Perusahaan"
                                    text="Start From :"
                                    hargastart="5.000.000"
                                    hargafix="4 Juta"
                                    domain="Free"
                                    ssl="Free"
                                    hosting="100MB"
                                    halaman="5-6"
                                    Bandwidth="40GB"
                                    EmailCustom="Free"
                                    WebDesain="Standart"
                                    DesainLogo="Free Simple"
                                    DesainResponsive="Yes"
                                    FiturChatWhatsApp="Free"
                                    Support="Free"
                                    Garansi="1 Tahun"
                                    Perpanjangan="Perpanjang1.2jt/Tahun"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimationWrapper>
            </div>
        </main>
    )
}
