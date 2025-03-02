"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { assets } from "@/public/assets/assets";

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToPledge = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const section = document.getElementById("pledge");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close menu if mobile menu is open
    };

    return (
        <>
            <nav className={`w-full pt-10 lg:pt-4 fixed px-5 lg:px-16 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white backdrop-blur-lg shadow-md" : "bg-white"}`}>
                {/* Logo */}
                <Link href="#top">
                    <Image 
                        src={assets.logo} 
                        alt="Logo" 
                        className="w-[100%] cursor-pointer h-10"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 font-medium text-lg text-black">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    
                     <a href="#pledge" className="hidden lg:flex items-center gap-3 px-14 py-2 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group transition-colors duration-500">
                    <span className="relative z-10">Pledge</span>
                    <span className="absolute inset-0 bg-[#ff8533] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                </a>


                    {/* Hamburger Menu */}
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Image 
                            src={assets.menublack} 
                            alt="Menu" 
                            className="w-6 block lg:hidden ml-3" 
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-lg py-20 px-10 transform transition-transform duration-500 ease-in-out z-[1000] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="absolute right-6 top-6 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        <span className="text-3xl text-black">×</span> {/* Unicode close icon */}
                    </div>

                    {/* Mobile Menu Links */}
                    <li className="text-lg font-medium text-gray-800 my-4"><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li className="text-lg font-medium text-gray-800 my-4"><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                    <li className="text-lg font-medium text-gray-800 my-4"><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                    <li className="text-lg font-medium text-gray-800 my-4"><a href="#pledge" onClick={scrollToPledge}>Pledge</a></li>
                </ul>  
            </nav>
        </>
    );
}
