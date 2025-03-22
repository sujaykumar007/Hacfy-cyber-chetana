import Image from "next/image";
import { assets } from "@/public/assets/assets";

export default function BackgroundImage() {
    return (
        <div className="w-full">
            <div className="relative w-full h-[60vh]">
                <Image 
                    src={assets.CyberBackground} 
                    alt="Background" 
                    layout="fill"
                    objectFit="cover"
                    priority
                    fill
                    className="top-0 left-0"
                />
            </div>


            <div className="text-[#09437d] p-6 text-center mt-20 bg-white shadow-lg rounded-lg ">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-balance pb-10">
                    HacFy Cyber Chetana is a pioneering initiative committed to enhancing cybersecurity awareness and digital literacy across Karnataka. The platform empowers individuals by equipping them with knowledge, tools, and proactive measures to safeguard against emerging cyber threats. With a core focus on women’s digital safety, youth empowerment, and community resilience, it aims to create a secure digital ecosystem for all. HacFy Cyber Chetana envisions building a digitally
                     aware society where every individual can navigate the online world with confidence, responsibility, and security.
                </p>
            </div>
        </div>
    );
}
