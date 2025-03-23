import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import '../styles/colors.css'
export default function Footer() {
  return (
   <div className="bg-white">
      <footer className="px-4 py-10 sm:px-8  text-white pb-10 rounded-3xl w-[95%] mx-auto border-t shadow-2xl ">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
            <div>
              <div className="flex items-center  gap-2">

                <Image src={assets.logo} alt="Logo" width={80}   />

              </div>
              <p className="mt-3 text-gray-300 text-sm" style={{ color: "var(--primary-blue)"}}>
              HacFy Cyber Chetana empowers Karnataka with cybersecurity awareness, focusing on women’s digital safety, youth empowerment, and community resilience. Building a secure and informed digital society. </p>
{/* 
              <button className="hover:opacity-300 transition flex gap-5 mt-4">
              <Image src={assets.logoX} className="w-8" alt="" />
              <Image src={assets.linkedin} className="w-8" alt="" />
              <Image src={assets.instagram} className="w-8" alt="" />
              <Image src={assets.youtube} className="w-8" alt="" />

        </button> */}

    
            </div>

            <div>
              <h3 className="font-semibold" style={{ color: "var(--primary-blue)"}}>Services</h3>
              <ul className="mt-3 space-y-2" style={{ color: "var(--primary-blue)"}}>
                <li className="hover:text-[#] cursor-pointer" > <Link href={"/services"}>Guides & Resources</Link> </li>
                <li className="hover:text-[#ffA500] cursor-pointer"><Link href={"/services"}>Phishing & Fraud Detection</Link></li>
                <li className="hover:text-[#ffA500] cursor-pointer"><Link href={"/services"}>Network Penetration Testing</Link></li>
                <li className="hover:text-[#ffA500] cursor-pointer"><Link href={"/services"}>Mobile application Penetration Testing</Link></li>
                <li className="hover:text-[#ffA500] cursor-pointer"><Link href={"/services"}>IoT Penetration Testing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold " style={{ color: "var(--primary-blue)"}}>Company</h3>
              <ul className="mt-3 space-y-2 " style={{ color: "var(--primary-blue)"}}>

              <li className="hover:text-primary-hover cursor-pointer"><Link href='/'>Home</Link></li>
                <li className="hover:text-primary-hover cursor-pointer"><Link href='/about'>About Us</Link></li>
                <li className="hover:text-primary-hover cursor-pointer"><Link href='/blog'>Blog</Link></li>
              
                <li className="hover:text-primary-hover cursor-pointer"><Link href='/#pledge'>Pledge</Link></li>

              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm" style={{ color: "var(--primary-blue)"}}>
            <p>Copyright © 2025 Hacfy Cyber Chetana. All Rights Reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary-hover">User Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-hover">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
  
  );
}
