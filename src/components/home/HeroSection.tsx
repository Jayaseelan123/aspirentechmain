import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Play, TrendingUp, Users, Zap } from "lucide-react";
import { PopupModal } from "react-calendly";
import logo from "@/assets/abss-logo.png";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const [openCalendly, setOpenCalendly] = useState(false);

  const stats = [
    { icon: Users, value: "275+", label: "Happy Clients", color: "text-primary" },
    { icon: TrendingUp, value: "6+", label: "Years Experience", color: "text-accent" },
    { icon: Zap, value: "8", label: " Products", color: "text-success" },
    { icon: Bot, value: "4", label: "AI Products", color: "text-success" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-secondary/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:order-1 order-1">
            <div className="space-y-6 fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Digital Transformation + AI SaaS Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="text-gradient">Business Growth</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Accelerate your business with cutting-edge digital marketing strategies and AI-powered automation tools.
                Trusted by 275+ businesses worldwide since 2019.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-200">
              <Link to="/contact" className="btn-hero flex items-center px-4 py-2 text-sm">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <button
                onClick={() => setOpenCalendly(true)}
                className="btn-hero-outline flex items-center justify-center px-4 py-2 text-sm"
              >
                <Play className="w-4 h-4 mr-1" />
                Book Demo
              </button>
            </div>

            {/* Stats */}
            {/* Stats */}
            <div className="grid grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="stats-number">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative lg:order-2 order-2">
            <div className="relative max-w-md mx-auto">
              {/* Hero Illustration */}
              <div className="relative">
                <img
                  src={heroIllustration}
                  alt="Digital Transformation Illustration"
                  className="w-full h-auto rounded-3xl shadow-hover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-primary animate-bounce">
                <div className="flex items-center justify-center">
                  <img src={logo} alt="Aspiren Logo" className="w-12 h-12" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-hover">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-success">275+</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/salmanabs1512/30min"
        onModalClose={() => setOpenCalendly(false)}
        open={openCalendly}
        rootElement={document.getElementById("root") as HTMLElement}
      />
    </section>
  );
};

export default HeroSection;
