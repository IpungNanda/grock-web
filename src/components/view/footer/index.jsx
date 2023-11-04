"use client"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const socialIcons = [
  {
    id: "facebook",
    icon: <Link href="https://www.facebook.com/ipung.nanda?mibextid=ZbWKwL"><FaFacebookSquare className="w-10 h-10 text-red-600 " /></Link>,
  },
  {
    id: "instagram",
    icon: <Link href="https://instagram.com/ipungnan?igshid=YTQwZjQ0NmI0OA=="><FaInstagramSquare className="w-10 h-10 text-red-600 " /></Link>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 pt-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Bagian 1: Informasi Kontak */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1">
            <h3 className="text-2xl text-red-600 font-bold mb-4">Kontak Kami</h3>
            <p className="mb-2 text-red-600">Alamat: Jalan Bromo VII, Gebang, Rt05, Rw15, Banjarsari, Surakarta</p>
            <p className="mb-2 text-red-600">Telepon: +62895805399090</p>
            <p className="text-red-600">Email: ipungsetiawan5@gmail.com</p>
          </div>

          {/* Bagian 3: Tautan Navigasi */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 mb-4">
            <h3 className="text-2xl text-red-600 font-bold mb-4">Navigasi</h3>
            <ul>
              <li>
                <Link href="/harga" className=" text-red-600">Harga Pembuatan Website</Link>
              </li>
              <li>
                <Link href="/jasa" className=" text-red-600">Jasa Pembuatan Website</Link>
              </li>
              <li>
                <Link href="/syarat" className=" text-red-600">Syarat Pembuatan Website</Link>
              </li>
              <li>
                <Link href="/profile" className=" text-red-600">Profile Kami</Link>
              </li>
              <li>
                <Link href="/portofolio" className=" text-red-600">Portofolio Kami</Link>
              </li>
            </ul>
          </div>

          {/* Bagian 2: Tautan Sosial Media */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Sosial Media</h3>
            <motion.div className="flex gap-3 cursor-pointer">
                {socialIcons.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 80,
                      duration: 4,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -360,
                      borderRadius: "100%",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
          </div>


        </div>
      </div>
    </footer>
  );
}