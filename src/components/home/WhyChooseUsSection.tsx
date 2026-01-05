import React from 'react';
import { Shield, Clock, Users, TrendingUp, Award, Zap } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: '6+ years of delivering exceptional results for 275+ clients worldwide with consistent growth.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring to ensure your business operations run smoothly.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Backed by 6+ years of industry experience and a team of certified specialists dedicated to driving business growth.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'Every decision backed by data analytics to ensure maximum ROI and measurable outcomes.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and industry best practices to deliver premium solutions.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Latest AI automation tools and marketing technologies to keep you ahead of competition.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose <span className="text-gradient">Aspirentech?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We become part of your team, bridging strategy, creativity, and automation to deliver predictable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="service-card group text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;