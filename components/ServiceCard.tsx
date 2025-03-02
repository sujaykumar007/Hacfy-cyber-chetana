"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { assets } from "@/public/assets/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    id: 1,
    image: assets.menublack,
    name: "Cyber Insurance Advisory",
    description: "Security control implementation guidance",
    description1: "Mitigation strategy development and execution support",
    extraContent: "Identifying vulnerabilities before attackers do.",
  },
  {
    id: 2,
    name: "vCISO",
    image: assets.logo,
    description: "Security control implementation guidance",
    description1: "Mitigation strategy development and execution support",
    extraContent: "Identifying vulnerabilities before attackers do.",
  },
  {
    id: 3,
    name: "vDPO",
    image: assets.logo,
    description: "Security control implementation guidance",
    description1: "Mitigation strategy development and execution support",
    extraContent: "Identifying vulnerabilities before attackers do.",
  },
  {
    id: 4,
    name: "Regulatory Compliance",
    image: assets.logo,
    description: "Security control implementation guidance",
    description1: "Mitigation strategy development and execution support",
    extraContent: "Identifying vulnerabilities before attackers do.",
  },
  {
    id: 5,
    name: "Regulatory Assessment",
    image: assets.menublack,
    description: "Incident response and advanced threat hunting",
    description1: "Evidence collection and chain of custody management",
    extraContent: "Ensuring adherence to cybersecurity regulations.",
  },
  {
    id: 6,
    name: "ISO 27001 Certification",
    image: assets.logo,
    description: "ISMS framework development and implementation",
    description1: "Pre-certification readiness assessment and audit support",
    extraContent: "Building a strong foundation for information security.",
  },
  {
    id: 7,
    name: "Penetration Testing",
    image: assets.logo,
    description: "Security control implementation guidance",
    description1: "Mitigation strategy development and execution support",
    extraContent: "Identifying vulnerabilities before attackers do.",
  },
];

const ServiceCardItem = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const isEven = (index + 1) % 2 === 0; // Even index logic

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isEven ? -100 : 100 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`flex flex-col md:flex-row gap-8 px-4 md:px-8  items-center justify-evenly ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >
   
    <div className="w-full md:w-1/2 flex flex-col items-start text-left">
      <h2 className="text-primary-yellow text-xl md:text-2xl font-bold">{service.name}</h2>
      <p className="text-gray-300 text-sm md:text-base mt-2">{service.description}</p>
      {service.description1 && <p className="text-gray-400 text-sm md:text-base mt-1">{service.description1}</p>}
      <p className="text-gray-500 text-sm md:text-base mt-3 italic">{service.extraContent}</p>
    </div>
  
    <div className="w-full md:w-1/2 flex justify-center">
      <Card className="relative py-6 md:py-8 overflow-hidden border-opacity-35 border-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center">
        <CardHeader className="flex items-center justify-center">
          <Image
            src={service.image}
            alt="Service Icon"
            width={100}
            height={100}
            className="border border-white md:w-28 md:h-28"
          />
        </CardHeader>
        <CardContent></CardContent>
        <BorderBeam duration={8} size={100} />
      </Card>
    </div>
  </motion.div>
  
  );
};

export function ServiceCard() {
  return (
    <div className="container mx-auto px-4 md:px-12 pb-16">
      <div className="grid grid-cols-1 gap-12 w-full overflow-x-hidden">
        {services.map((service, index) => (
          <ServiceCardItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
