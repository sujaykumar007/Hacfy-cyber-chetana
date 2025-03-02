
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "./magicui/border-beam";

export function Component() {
  const services = [
    {
      id: 1,
      title: "VISION",
      desc: "To be recognized as the preeminent cybersecurity partner of choice, empowering organizations across global markets with comprehensive security intelligence, elite penetration testing expertise, and innovative defensive strategies that transform vulnerability into resilience in an ever-evolving threat landscape.",
    },
    {
      id: 2,
      title: "MISSION",
      desc: "CyberProbeX is committed to fortifying organizational security postures through advanced penetration testing methodologies, strategic risk intelligence, and comprehensive compliance frameworks. We empower enterprises to navigate the evolving threat landscape with confidence by delivering actionable security insights, adaptive defense mechanisms, and sustainable resilience strategies that transform security from a barrier into a business enabler.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center p-6 space-y-6">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black">Vision & Mission</h1>
        <p className="text-gray-600 mt-2 text-lg">Our core values and guiding principles.</p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative border border-gray-200 bg-white text-black p-6 shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-lg">{service.desc}</CardDescription>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        ))}
      </div>
    </div>
  );
}
