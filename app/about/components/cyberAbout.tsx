import Image from "next/image";
import { assets } from "@/public/assets/assets";

export default function BackgroundImage() {
    return (
        <div className="relative w-full h-[60vh] mb-6">
            <Image 
                src={assets.CyberBackground} 
                alt="Background" 
                layout="fill"
                objectFit="cover"
                priority
                className="absolute top-0 left-0 w-full h-full"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center  bg-opacity-50 px-6 py-10 md:px-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                    <span className="text-[var(--primary-orange)]">What</span> is
                    <br />
                    <span className="text-[var(--primary-orange)]">HacFy</span> Cyber Chetana?
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-4 max-w-4xl">
                    HacFy Cyber Chetana is a pioneering initiative committed to enhancing cybersecurity awareness and digital literacy across Karnataka. The platform empowers individuals by equipping them with knowledge, tools, and proactive measures to safeguard against emerging cyber threats. With a core focus on women’s digital safety, youth empowerment, and community resilience, it aims to create a secure digital ecosystem for all. HacFy Cyber Chetana envisions building a digitally aware society where every individual can navigate the online world with confidence, responsibility, and security.
                </p>
            </div>
        </div>
    );
}
