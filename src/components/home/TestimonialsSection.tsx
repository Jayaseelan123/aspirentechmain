import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Rajesh Kumar', company: 'TechStart Solutions', location: 'Mumbai, India', rating: 5, text: 'Aspirentech transformed our digital presence completely. Their AI automation solutions saved us 40+ hours weekly and increased our lead quality by 300%.', image: '👨‍💼' },
    { name: 'Sarah Johnson', company: 'Global Ventures Inc', location: 'New York, USA', rating: 5, text: 'Working with Sundar and his team has been exceptional. Their performance marketing campaigns delivered 5x ROI within just 3 months.', image: '👩‍💼' },
    { name: 'Priya Sharma', company: 'EcoGreen Industries', location: 'Delhi, India', rating: 5, text: 'The telecalling AI agents they developed for us are incredible. Natural conversations that book 60% more appointments than our previous system.', image: '👩‍🏭' },
    { name: 'Michael Chen', company: 'InnovateTech Labs', location: 'Singapore', rating: 5, text: 'Their content marketing strategy helped us become thought leaders in our industry. Website traffic increased by 400% in 6 months.', image: '👨‍💻' },
    { name: 'Ananya Singh', company: 'BrightFuture Corp', location: 'Bangalore, India', rating: 5, text: 'Amazing content marketing and SEO services. Our leads doubled in 3 months!', image: '👩‍💼' },
    { name: 'John Doe', company: 'NextGen Solutions', location: 'London, UK', rating: 5, text: 'Highly recommend Aspirentech for AI-powered business automation. Efficient and reliable!', image: '👨‍💻' }
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what business leaders worldwide say about our services.
          </p>
        </div>

        <div className="flex space-x-4 overflow-hidden">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 p-4 rounded-2xl bg-white shadow-lg transform transition-transform duration-500">
              <div className="flex items-start space-x-2 mb-2">
                <div className="text-3xl">{testimonial.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-primary text-xs font-medium">{testimonial.company}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                </div>
                <Quote className="w-6 h-6 text-accent opacity-50" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
