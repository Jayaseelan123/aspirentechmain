import React from 'react';
import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      
      title: 'Discover & Analyze',
      description: 'We deep-dive into your business, market, and competitors to identify opportunities and create a winning strategy.'
    },
    {
      icon: Lightbulb,
      
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive roadmap with clear milestones, timelines, and measurable objectives.'
    },
    {
      icon: Rocket,
      
      title: 'Execute & Launch',
      description: 'We implement campaigns, deploy automation systems, and launch your digital marketing initiatives.'
    },
    {
      icon: BarChart3,
      
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring, data analysis, and optimization to ensure maximum ROI and sustainable growth.'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a systematic approach to deliver measurable results and sustainable growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group animate-fade-in">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;