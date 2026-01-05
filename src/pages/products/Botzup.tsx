import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Settings, BarChart3, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import BotzupLogo from '@/assets/botzup.png';
import BotzupHeroV2 from '@/assets/botzup-hero-v2.png';

const Botzup = () => {
  const features = [
    'Intelligent Chatbot Builder',
    'Multi-Channel Integration',
    'Advanced Analytics Dashboard',
    'Custom Workflow Automation',
    'Lead Management System',
    'Real-time Performance Tracking'
  ];

  const benefits = [
    {
      icon: Bot,
      title: 'Smart Automation',
      description: 'AI-powered bots that understand context and provide intelligent responses'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant responses and quick setup to get you running in minutes'
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Drag-and-drop interface for building complex automation workflows'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive insights into bot performance and user interactions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white">
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5"></div>
        {/* Light Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left order-2 lg:order-1">
              <h1 className="text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">botzup</span>
              </h1>
              <p className="text-xl text-white/90 max-w-xl leading-relaxed mb-10">
                AI-powered business automation platform that transforms customer interactions
                and streamlines operations with intelligent chatbots and workflow automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-xl hover:bg-white/95 transition-all hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="https://botzup.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Visit Website
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-10 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
              <img
                src={BotzupHeroV2}
                alt="AI Chatbot Illustration"
                className="relative w-full max-h-[600px] object-cover transition-transform duration-500 hover:-rotate-1"
              />

              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl text-blue-600 animate-bounce-slow hidden md:block">
                <Bot className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="flex justify-center">
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.3] overflow-visible pb-1">
            Automate with <span className="inline-block text-gradient">Intelligence</span>
          </h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-muted-foreground mb-8 leading-relaxed mt-8">
                botzuprevolutionizes how businesses interact with customers through intelligent automation.
                Create sophisticated chatbots, automate workflows, and provide 24/7 customer support without
                the complexity of traditional solutions.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="service-card text-center">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Perfect For Every Business</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From customer support to lead generation, botzupadapts to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover p-8 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-muted-foreground">
                Automate customer inquiries, provide instant responses, and escalate complex issues to human agents.
              </p>
            </div>
            <div className="card-hover p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Lead Generation</h3>
              <p className="text-muted-foreground">
                Capture and qualify leads automatically, schedule appointments, and nurture prospects through the sales funnel.
              </p>
            </div>
            <div className="card-hover p-8 text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <p className="text-muted-foreground">
                Guide customers through product selection, handle order inquiries, and provide personalized shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-white text-center">
        {/* Overlay + Grid (subtle background pattern) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-muted-foreground opacity-90 mb-8">
            Join thousands of businesses using botzupto transform their customer interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                   bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold 
                   shadow-md hover:scale-105 transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <a
              href="https://botzup.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                   border border-gray-300 text-foreground font-semibold 
                   hover:bg-gray-100 transition-all"
            >
              View Demo
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Botzup;
