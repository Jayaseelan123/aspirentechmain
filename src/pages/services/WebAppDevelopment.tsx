import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Layers,
} from "lucide-react";

const WebAppDevelopment = () => {
  const [open, setOpen] = useState(false);

  const developmentServices = [
    "Custom Web Application Development",
    "Mobile App Development (iOS & Android)",
    "E-commerce Platform Development",
    "Progressive Web Apps (PWA)",
    "API Development & Integration",
    "Database Design & Optimization",
    "Cloud Deployment & Scaling",
    "Maintenance & Support Services",
  ];

  const technologies = [
    {
      name: "React & Next.js",
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Node.js & Python",
      category: "Backend",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "React Native & Flutter",
      category: "Mobile",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "AWS & Google Cloud",
      category: "Cloud",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "MongoDB & PostgreSQL",
      category: "Database",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Docker & Kubernetes",
      category: "DevOps",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white">
        {/* Light Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-medium mb-6 border border-white/30">
                <Code className="w-4 h-4 mr-2" />
                Custom Development Solutions
              </div>

              {/* Heading */}
              <h1 className="text-6xl font-black mb-6 leading-tight">
                Build Powerful <br />
                <span className="text-white">Web & Mobile Apps</span>
              </h1>

              {/* Subtext */}
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your ideas into scalable, high-performance applications. From
                concept to deployment, we create custom web and mobile solutions that
                drive business growth and deliver exceptional user experiences.
              </p>

              {/* Hero Section Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="flex items-center justify-center text-base px-6 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-green-100 transition-all font-semibold"
                >
                  Start Your Project
                  <Rocket className="w-4 h-4 ml-2" />
                </Link>

                {/* Calendly Trigger */}
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center justify-center text-base px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all font-semibold"
                >
                  Book Demo
                </button>
              </div>

              {/* Features */}
              <div className="flex items-center space-x-8 text-sm text-white/90">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-white" />
                  Secure & Scalable
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-white" />
                  Fast Development
                </div>
              </div>
            </div>

            {/* Image Visual */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900/50 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional Web & Mobile Application Development"
                  className="relative w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>

              {/* Floatining elements for depth */}
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-xl text-blue-600 hidden md:block animate-bounce-slow">
                <div className="font-bold text-2xl">98%</div>
                <div className="text-xs text-gray-500">Fast Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-[1.28] overflow-visible pb-1">
              What we <span className="inline-block text-gradient">serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Web Development */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Custom web applications built with modern frameworks like React,
                Next.js, and Node.js. Responsive, fast, and SEO-optimized solutions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> Custom Web Apps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> E-commerce Platforms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> CMS Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> API Integration
                </li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
              <p className="text-muted-foreground mb-6">
                Native and cross-platform mobile apps for iOS and Android. Built with
                React Native, Flutter, and native technologies.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> iOS & Android Apps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> Cross-Platform Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> Progressive Web Apps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> App Store Deployment
                </li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud & DevOps</h3>
              <p className="text-muted-foreground mb-6">
                Scalable cloud infrastructure, automated deployments, and robust security
                measures to ensure your applications perform flawlessly.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> AWS/GCP Deployment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> CI/CD Pipelines
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> Security Implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" /> Performance Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we follow a proven methodology that ensures
              quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "Requirements analysis and technical architecture design",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                desc: "UI/UX design and interactive prototypes creation",
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Agile development with continuous testing and quality assurance",
              },
              {
                step: "04",
                title: "Deployment & Support",
                desc: "Production deployment and ongoing maintenance support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Portfolio Stats */}
      <section className="py-20 bg-white">
        <div className="flex justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-[1.28]">
            Our Performance in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              APP Development
            </span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-success mb-2">50+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Cutting-Edge Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build robust, scalable
              applications
            </p>
          </div>

          {/* Auto scrolling row */}
          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-scroll">
              {technologies.concat(technologies).map((tech, index) => (
                <div
                  key={index}
                  className="min-w-[250px] group relative p-6 rounded-2xl bg-gradient-to-br from-background to-accent/5 border hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{tech.category}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-background to-accent/20 rounded-full">
                    <div
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <Code className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Your Next Big Thing?
          </h2>
          <p className="text-xl opacity-80 mb-10 max-w-3xl mx-auto">
            Let's transform your ideas into powerful web and mobile applications that
            scale with your business. Get a free consultation and project estimate today.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="min-w-[180px] flex items-center justify-center text-lg px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>



      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/salmanabs1512/30min"
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={document.getElementById("root")!}
      />
    </div>
  );
};

export default WebAppDevelopment;
