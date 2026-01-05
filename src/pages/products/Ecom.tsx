import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, BarChart3, Smartphone, ArrowRight, CheckCircle, Package, Truck, BarChart } from 'lucide-react';

import ecomLogo from "../../assets/ecom-logo.png";

const Ecom = () => {
  const features = [
    'Complete E-commerce Platform',
    'Multi-Channel Sales Integration',
    'Inventory Management System',
    'Payment Gateway Integration',
    'Analytics & Reporting Dashboard',
    'Mobile-Responsive Design'
  ];

  const benefits = [
    {
      icon: ShoppingCart,
      title: 'Full-Featured Store',
      description: 'Complete e-commerce solution with all essential features'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment gateways with enterprise-level security'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed insights into sales performance and customer behavior'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Fully responsive design that works perfectly on all devices'
    }
  ];

  const steps = [
    {
      icon: Package,
      title: "Add Your Products",
      description: "Easily upload and manage your product catalog with images, descriptions, and pricing."
    },
    {
      icon: Truck,
      title: "Start Selling",
      description: "Customers can browse, add items to cart, and securely checkout on your store."
    },
    {
      icon: BarChart,
      title: "Grow with Insights",
      description: "Track sales performance, customer behavior, and scale your business effortlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <div className="absolute bottom-0 left-0 p-12 opacity-10 transform -translate-x-1/3 translate-y-1/3">
          <div className="w-48 h-48 rounded-full border-8 border-current"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left order-2 lg:order-1">
              <div className="mb-8 flex items-center space-x-4">
                <img src={ecomLogo} alt="Ecom Logo" className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg" />
                <h1 className="text-6xl font-black mb-0 tracking-tight">
                  <span className="text-white">Ecom</span>
                </h1>
              </div>
              <p className="text-xl max-w-xl leading-relaxed mb-10 opacity-95">
                Complete e-commerce SaaS platform that empowers businesses to create, manage,
                and scale their online stores with enterprise-grade features and seamless integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-green-100 font-bold shadow-xl transition-all hover:scale-105"
                >
                  Start Your Store
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="https://karthy.vercel.app/"
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="E-commerce Experience Illustration"
                  className="relative w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              {/* Floating element */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl text-green-500 animate-bounce-slow hidden md:block">
                <ShoppingCart className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Ecom Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">How Ecom Works</h2>
          <p className="text-lg text-gray-600 mb-12">
            Simple, intuitive, and powerful online selling in three easy steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
                <step.icon className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{index + 1}. {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Everything You Need to Sell Online</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ecom provides a comprehensive e-commerce solution that grows with your business.
                From product management to order fulfillment, we've got every aspect of online selling covered.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
              >
                Launch Your Store Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Launch Your Online Store?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses using Ecom to power their online sales and growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
          >
            Start now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ecom;
