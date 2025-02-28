'use client'

import { assets } from "@/public/assets/assets"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from 'next/link'



export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

 
  

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
        <nav className={`w-full pt-10 lg:pt-4 fixed px-5 lg:px-16 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-black backdrop-blur-lg shadow-md" : "bg-white"}`}>   
            {/* Logo */}
            <Link href="#top">
            
                <Image 
                src={assets.logo} 
                alt="Menu" 
                className="w-[100%] cursor-pointer h-10"
            />
            </Link>

            {/* ✅ Desktop Menu */}
            <ul className={`hidden lg:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 font-medium text-lg text-black ${isScroll ? "text-white" : "text-black"}`}>
                <li><Link  href="/" >Home</Link></li>
                <li><Link  href="/about" >About Us</Link></li>
                <li><Link  href="/services" >Blog</Link></li>
            </ul>

            {/* ✅ Right Section */}
            <div className={`flex items-center gap-4 ${isScroll ? "" : "text-black"}`}>
                
                <Link href="/Pledge" className={`hidden lg:flex items-center gap-3 px-15 py-2 border font-medium text-lg border-gray-500  rounded-xl ml-4 relative overflow-hidden group transition-colors duration-500  hover:text-black ${isScroll ? "text-white" : "text-black"}`}>
                    <span className="relative z-10">Pledge</span>
                    <span className="absolute inset-0 bg-[#ffA500] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                </Link>


                {/* ✅ Hamburger Menu */}
                <button onClick={openMenu}>
            <Image 
                src={isScroll ?   assets.menublack : assets.menublack} 
                alt="Menu" 
                className="w-6 block lg:hidden ml-3" 
            />
        </button>
            </div>
            <ul className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-lg py-20 px-10 transform transition-transform duration-500 ease-in-out z-[1000] 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                
               
                <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
                    <span className="text-3xl text-black">×</span> {/* Unicode close icon */}
                </div>

                {/* Mobile Menu Links */}
                <li className="text-lg font-medium text-gray-800 my-4"><Link onClick={closeMenu}  href="/" >Home</Link></li>
                <li className="text-lg font-medium text-gray-800 my-4"><Link onClick={closeMenu}  href="/about" >About Us</Link></li>
                <li className="text-lg font-medium text-gray-800 my-4"><Link onClick={closeMenu}  href="/services">Blog</Link></li> 
                <li className="text-lg font-medium text-gray-800 my-4"><Link onClick={closeMenu}  href="/contact" >Pledge</Link></li>
            </ul>  
        </nav>
        </>

    )
}
