import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: 6,
      suffix: '+',
      label: 'Years in the Industry',
      description: 'Established expertise since 2019'
    },
    {
      icon: Users,
      number: 275,
      suffix: '+',
      label: 'Happy Clients',
      description: '7+ International, 250+ Indian clients'
    },
    {
      icon: Target,
      number: 10000,
      suffix: '+',
      label: 'Leads Generated',
      description: 'Quality leads delivered consistently'
    },
    {
      icon: Award,
      number: 5,
      suffix: 'M+',
      label: 'Revenue Generated',
      description: 'For our clients worldwide'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Journey in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A brief recap of our growth, success and impact over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for each stat with count-up effect
const StatCard = ({ stat }: { stat: { icon: any; number: number; suffix: string; label: string; description: string } }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.number;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50); // update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [stat.number]);

  return (
    <div className="text-center group animate-fade-in">
      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <stat.icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-primary mb-2">{count.toLocaleString()}{stat.suffix}</div>
      <div className="text-lg font-semibold mb-2">{stat.label}</div>
      <p className="text-muted-foreground text-sm">{stat.description}</p>
    </div>
  );
};

export default StatsSection;
