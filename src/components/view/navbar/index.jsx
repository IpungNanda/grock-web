"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../../public/images/grock-profile.png"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const MotionLink = motion(Link);
  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-black transition-all ${scrollActive ? "shadowshadow-md shadow-black pt-0" : "pt-4"
          }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-red-600">
              <MotionLink
                href="/"
                className="w-10 h-10 bg-red-600 text-white flex text-2xl items-center justify-center rounded font-bold"
                whileHover={{
                  backgroundColor: [
                    "rgb(234, 88, 12, 1)",
                    "rgb(236, 191, 12, 1)",
                    "rgb(236, 19, 12, 1)",
                    "rgb(19, 236, 12, 1)",
                    "rgb(12, 236, 221, 1)",
                    "rgb(234, 88, 12, 1)",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                <Image src={Logo}/>
              </MotionLink>
              rock
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-red-600 justify-center items-center">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "jasa"
                  ? "text-red-600 shadow-red-600"
                  : "text-red-600 font-bold hover:text-red-800"
                }
              `}
            >
              <Link href="/jasa" onClick={() => setActiveLink("jasa")}>
                JASA
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "portofolio"
                  ? "text-red-600 shadow-red-600"
                  : "text-red-600 font-bold hover:text-red-800"
                }
              `}
            >
              <Link href="/portofolio" onClick={() => setActiveLink("portofolio")}>
                PORTOFOLIO
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "harga"
                  ? "text-red-600 shadow-red-600"
                  : "text-red-600 font-bold hover:text-red-800"
                }
              `}
            >
              <Link href="/harga" onClick={() => setActiveLink("harga")}>
                HARGA
              </Link>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+62895805399090&text= Hello Grock Web, Saya mau buat website. Bisa minta informasinya lebih lanjut..."
              }
            >
              <button className="py-3 px-6 border-[2px] bg-red-600 border-red-600 text-black font-semibold rounded-lg text-xl tracking-widest shadow-md hover:shadow-red-600 transition-all outline-none">
                Whatsapp
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t">
        <div className="bg-black sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-pink-600">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "jasa"
                  ? "text-red-600 shadow-red-600"
                  : "text-red-600 font-bold hover:text-red-800"
                }
              `}
            >
              <Link href="/jasa" onClick={() => setActiveLink("jasa")}>
                JASA
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "portofolio"
                  ? "text-red-600 shadow-red-600"
                  : "text-red-600 font-bold hover:text-red-800"
                }
              `}
            >
              <Link href="/portofolio" onClick={() => setActiveLink("portofolio")}>
                PORTOFOLIO
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${activeLink === "harga"
                  ? "text-red-600 shadow-red-600"
                  : "text-red-600 font-bold hover:text-red-800"
                }
              `}
            >
              <Link href="/harga" onClick={() => setActiveLink("harga")}>
                HARGA
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}