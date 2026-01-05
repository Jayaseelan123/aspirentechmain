import React from "react";
import FAQSection from "../components/home/FAQSection";
import { Users, Target, Award, Calendar } from "lucide-react";
import ProcessSection from '../components/home/ProcessSection';
import aboutHeaderBg from "@/assets/about-header-bg.png";
import officeTeam from "@/assets/office-team.png";
import founderProfile from "@/assets/founder-profile.png";
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-green-400 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${aboutHeaderBg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-green-400/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            About Aspirentech
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Since 2019, we've been empowering businesses with innovative digital
            marketing strategies and cutting-edge AI automation solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019 in Krishnagiri, Tamil Nadu, Aspirentech
                  Business Solutions began with a vision to bridge the gap
                  between traditional businesses and digital transformation. Our
                  founder, Sundar, brought over 16 years of expertise in the
                  digital marketing industry to create solutions that truly make
                  a difference.
                </p>
                <p>
                  What started as a digital marketing agency has evolved into a
                  comprehensive technology partner, serving 7+ international
                  clients and 250+ Indian businesses. We've expanded our
                  operations to Chennai while maintaining our roots in
                  Krishnagiri.
                </p>
                <p>
                  Today, we're not just a service provider – we're innovators
                  developing cutting-edge SaaS products that automate business
                  processes and drive growth for companies worldwide.
                </p>
              </div>

              {/* Stats below content */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />,
                    number: "2019",
                    label: "Founded",
                    color: "text-blue-500",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />,
                    number: "275+",
                    label: "Clients Served",
                    color: "text-green-500",
                  },
                  {
                    icon: <Target className="w-8 h-8 text-indigo-500 mx-auto mb-3" />,
                    number: "6+",
                    label: "Years Experience",
                    color: "text-indigo-500",
                  },
                  {
                    icon: <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />,
                    number: "4",
                    label: "SaaS Products",
                    color: "text-blue-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl shadow hover:shadow-lg transition text-center border bg-white"
                  >
                    {item.icon}
                    <div className={`text-2xl font-bold ${item.color}`}>
                      {item.number}
                    </div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src={officeTeam}
                alt="Aspirentech Team"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition bg-white">
              <Target className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital marketing
                strategies and AI-powered automation tools that drive sustainable
                growth, enhance efficiency, and create meaningful connections
                between brands and their customers.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition bg-white">
              <Award className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading technology partner for businesses
                worldwide, recognized for our innovative SaaS solutions,
                exceptional service quality, and commitment to helping
                organizations achieve their digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-2xl shadow bg-gradient-to-r from-blue-50 to-green-50">
            <img src={founderProfile} alt="Founder" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg" />
            <h3 className="text-2xl font-bold mb-4">
              Message from Our Founder
            </h3>
            <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6">
              "Over my 6+ years in the digital marketing industry, I've
              witnessed the transformative power of technology. At Aspirentech,
              we don't just provide services – we build partnerships that drive
              real business outcomes. Our commitment to innovation and excellence
              has helped hundreds of businesses achieve their goals, and we're
              just getting started."
            </blockquote>
            <div className="text-blue-600 font-semibold">
              – Sundar, Founder & CEO
            </div>
          </div>
        </div>
      </section>
      <ProcessSection />
      <FAQSection />
    </div>
  );
};

export default About;
