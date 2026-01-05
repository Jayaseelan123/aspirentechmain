import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Wifi, Share2, Users, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';

import tapionLogo from "../../assets/tapion-logo.png";
// import tapionHero from "@/assets/tapion-hero.png"; // Placeholder for future image

const Tapion = () => {
  const features = [
    'NFC-Enabled Smart Cards',
    'Digital Business Card Platform',
    'Contact Information Sharing',
    'Social Media Integration',
    'Analytics & Tracking',
    'Custom Branding Options'
  ];

  const benefits = [
    {
      icon: CreditCard,
      title: 'Physical NFC Cards',
      description: 'Premium quality cards with embedded NFC technology'
    },
    {
      icon: Smartphone,
      title: 'Digital Platform',
      description: 'Comprehensive web platform for managing your digital presence'
    },
    {
      icon: Share2,
      title: 'Instant Sharing',
      description: 'Share contact info, social links, and portfolio with a simple tap'
    },
    {
      icon: Users,
      title: 'Networking Made Easy',
      description: 'Seamless networking at events, meetings, and conferences'
    }
  ];

  // ✅ Common button classes
  const btnBase =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition";
  const btnPrimary =
    `${btnBase} bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90`;
  const btnWhite =
    `${btnBase} bg-white text-blue-600 hover:bg-gray-100`;
  const btnOutline =
    `${btnBase} border border-white text-white hover:bg-white/10`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <div className="w-64 h-64 rounded-full border-8 border-current"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left order-2 lg:order-1">
              <div className="mb-8 flex items-center space-x-4">
                <img src={tapionLogo} alt="Tapion Logo" className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg" />
                <h1 className="text-6xl font-black mb-0 tracking-tight">
                  <span className="text-white">Tapion</span>
                </h1>
              </div>
              <p className="text-xl text-white/95 max-w-xl leading-relaxed mb-10">
                Revolutionary NFC-based smart business cards that transform networking.
                Share your contact information, social profiles, and portfolio instantly with a simple tap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-xl hover:bg-white/95 transition-all hover:scale-105">
                  Get Your Smart Card
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="https://app.tapion.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Visit Website
                </a>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-10 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop"
                  alt="NFC Smart Business Card Technology"
                  className="relative w-full h-auto object-cover transition-transform duration-500 hover:-rotate-1"
                />
              </div>
              {/* Floating element */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl text-blue-500 animate-bounce-slow hidden md:block">
                <Wifi className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Future of Networking</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tapion combines the tangible nature of traditional business cards with cutting-edge NFC technology.
                Create lasting impressions while sharing comprehensive digital profiles that keep your network engaged.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className={btnPrimary}>
                Order Your Tapion Card
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 border rounded-xl shadow-sm text-center hover:shadow-md transition">
                  <benefit.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How Tapion Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, intuitive, and powerful networking in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Setup Your Profile', 'Tap to Share', 'Track & Engage'].map((title, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-muted-foreground">
                  {i === 0
                    ? "Create your digital business card with contact info, social links, portfolio, and more."
                    : i === 1
                      ? "Simply tap your Tapion card on any NFC-enabled smartphone to instantly share your information."
                      : "Monitor interactions, follow up with new connections, and grow your professional network."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Perfect For Every Professional</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👔', title: 'Business Executives', desc: 'Professional networking at conferences and meetings' },
              { icon: '💼', title: 'Sales Teams', desc: 'Quick contact sharing with prospects and clients' },
              { icon: '🎨', title: 'Creatives', desc: 'Showcase portfolio and creative work instantly' },
              { icon: '🏢', title: 'Entrepreneurs', desc: 'Build connections at startup events and pitch sessions' }
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm text-center hover:shadow-md transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Transform Your Networking?
          </h2>
          <p className="text-lg text-muted-foreground opacity-90 mb-8">
            Join professionals worldwide who are revolutionizing how they network with Tapion smart cards.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold 
                 shadow-md hover:scale-105 transition-all"
          >
            Get Your Tapion Card Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Tapion;
