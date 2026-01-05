import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Globe, Bot } from 'lucide-react';

// ✅ Client Logos
import Logo1 from '@/assets/logo1.png';
import Logo2 from '@/assets/logo2.png';
import Logo3 from '@/assets/logo3.png';
import Logo4 from '@/assets/logo4.png';
import Logo5 from '@/assets/logo5.png';
import Logo6 from '@/assets/logo6.png';
import Logo7 from '@/assets/logo7.png';
import Logo8 from '@/assets/logo8.png';
import Logo9 from '@/assets/logo9.png';

// ✅ Product Logos
import BotzupLogo from '@/assets/botzup.png';
import ZiyaLogo from '@/assets/ziya-logo.png';
import TapionLogo from '@/assets/tapion-logo.png';
import EcomLogo from '@/assets/tyg.png';

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Strategic digital transformation solutions to modernize your business operations and drive growth.',
      path: '/contact',
      features: ['Process Digitization', 'Tech Stack Modernization', 'Digital Strategy'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web and application development to build your strong digital presence.',
      path: '/services/web-app-development',
      features: ['Responsive Design', 'Custom Web Apps', 'E-commerce Solutions'],
    },
    {
      icon: Bot,
      title: 'Business Automation',
      description: 'Revolutionary AI-powered tools to automate workflows and increase operational efficiency.',
      path: '/services/business-automation',
      features: ['Workflow Automation', 'AI Integration', 'Process Optimization'],
    },
  ];

  // ✅ Client logos array
  const clientLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9];

  // ✅ Products array with imported images
  const products = [
    { name: 'botzup', description: 'AI-powered business automation platform', image: BotzupLogo, path: '/products/botzup' },
    { name: 'Ziya.ai', description: 'Telecalling AI agents & workflow automation', image: ZiyaLogo, path: '/products/ziya' },
    { name: 'Tapion', description: 'NFC-based smart business cards', image: TapionLogo, path: '/products/tapion' },
    { name: 'Ecom', description: 'Complete e-commerce SaaS platform', image: EcomLogo, path: '/products/ecom' },
  ];

  return (
    <>
      <HeroSection />
      <StatsSection />

      {/* Trusted by Clients Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Industry and Brands with us</h3>
          <p className="text-center text-muted-foreground mb-8">
            Trusted by 10,000+ businesses worldwide
          </p>

          {/* Logo Carousel */}
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-marquee gap-12">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4 py-2 bg-background rounded-lg flex justify-center items-center"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital marketing to AI automation, we provide comprehensive solutions
              to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={service.path}
                  className="inline-flex items-center font-semibold text-gradient hover:opacity-80 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient">SaaS Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative SaaS solutions designed to streamline operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link key={index} to={product.path} className="card-hover rounded-2xl p-6 group">
                <div className="mb-4 flex justify-center">
                  <img src={product.image} alt={product.name} className="h-12 object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center font-medium text-gradient text-sm group-hover:translate-x-2 transform transition-transform">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />

      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join 275+ businesses that trust Aspirentech for their digital transformation journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition-all"
          >
            Start Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>



    </>
  );
};

export default Index;
