import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does AspirenTech provide?",
    answer:
      "We specialize in Martech solutions including SEO, performance marketing, automation, social media marketing, and AI-driven customer engagement tools.",
  },
  {
    question: "How long has AspirenTech been in business?",
    answer:
      "We’ve been serving global and Indian clients since 2019 with measurable marketing and business automation results.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "Our clients range from startups to enterprises across IT, healthcare, e-commerce, and education sectors.",
  },
  {
    question: "What makes AspirenTech different from competitors?",
    answer:
      "We combine strategy, creativity, and cutting-edge Martech tools to deliver performance-focused campaigns that scale business growth.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can reach out through our Contact page or schedule a free demo via our Calendly booking option.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear answers to help you understand our solutions better.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-muted-foreground text-base animate-fade-in">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
