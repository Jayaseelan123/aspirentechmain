import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Bot, Workflow, BarChart3, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

import ziyaLogo from "../../assets/ziya-logo.png";
import ziyaHeroV2 from "../../assets/ziya-hero-v2.png";

// import ziyaHero from "@/assets/ziya-hero.png"; // Placeholder for future image

const Ziya = () => {
  const features = [
    'AI-Powered Telecalling Agents',
    'Intelligent Workflow Automation',
    'Multi-Language Support',
    'Real-Time Analytics Dashboard',
    'CRM Integration Capabilities',
    'Custom Script Development'
  ];

  const benefits = [
    {
      icon: Phone,
      title: 'Smart Calling',
      description: 'AI agents handle calls with human-like conversations'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-driven decision making'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock availability for global business needs'
    },
    {
      icon: Users,
      title: 'Scalable Solution',
      description: 'Handle hundreds of interactions simultaneously'
    }
  ];

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
                <img src={ziyaLogo} alt="Ziya Logo" className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg" />
                <h1 className="text-6xl font-black mb-0 tracking-tight">
                  <span className="text-white">Ziya.ai</span>
                </h1>
              </div>
              <p className="text-xl text-white/95 max-w-xl leading-relaxed mb-10 opacity-90">
                Advanced AI automation SaaS platform featuring intelligent telecalling agents
                and comprehensive workflow automation to transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-xl hover:bg-white/95 transition-all hover:scale-105"
                >
                  Start now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="https://ziyasuitemaincode.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all font-semibold transition"
                >
                  Visit Website
                </a>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-10 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                <img
                  src={ziyaHeroV2}
                  alt="AI and Business Workflow Automation"
                  className="relative w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl text-blue-500 animate-bounce-slow hidden md:block">
                <Workflow className="w-12 h-12" />
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
              <h2 className="text-3xl font-bold mb-6">AI That Works for Your Business</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ziya.ai combines the power of AI telecalling agents with sophisticated workflow automation
                to create a comprehensive business automation platform that scales with your needs.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="service-card text-center p-6 border rounded-lg hover:shadow-lg transition">
                  <benefit.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Two Powerful Solutions in One Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ziya.ai offers comprehensive automation through AI agents and workflow management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-hover p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-12 h-12 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Telecalling AI Agents</h3>
                  <p className="text-muted-foreground">Intelligent voice automation</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {['Natural language conversations', 'Lead qualification and scoring', 'Appointment scheduling integration', 'Follow-up automation'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            <div className="card-hover p-8">
              <div className="flex items-center mb-6">
                <Workflow className="w-12 h-12 text-green-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Workflow Automation</h3>
                  <p className="text-muted-foreground">Smart process automation</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {['Custom workflow builder', 'Multi-system integrations', 'Conditional logic and triggers', 'Performance monitoring'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Scale with AI Automation?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join forward-thinking businesses using Ziya.ai to automate operations and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
            >
              Start now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Ziya;
