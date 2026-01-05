import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Crown,
  Camera,
  Megaphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
// import brandingHero from "@/assets/personal-branding-hero.png"; // Placeholder for future image

const PersonalBranding = () => {
  const brandingServices = [
    "Brand Identity Development",
    "Professional Photography & Videography",
    "Social Media Strategy & Management",
    "Content Creation & Storytelling",
    "LinkedIn Profile Optimization",
    "Personal Website Development",
    "Thought Leadership Positioning",
    "Crisis Management & Reputation",
  ];

  const brandingSteps = [
    {
      icon: User,
      title: "Brand Discovery",
      description:
        "Deep dive into your personality, values, goals, and unique value proposition to define your authentic brand identity.",
      color: "primary",
    },
    {
      icon: Sparkles,
      title: "Visual Identity",
      description:
        "Create stunning visuals, professional photos, and consistent design elements that reflect your brand personality.",
      color: "accent",
    },
    {
      icon: Megaphone,
      title: "Content Strategy",
      description:
        "Develop compelling content that tells your story and positions you as an industry thought leader.",
      color: "success",
    },
    {
      icon: Crown,
      title: "Authority Building",
      description:
        "Establish your expertise through strategic content, speaking opportunities, and media coverage.",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <div className="w-64 h-64 rounded-full border-8 border-current"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white font-semibold mb-8 border border-white/30 shadow-sm">
                <Crown className="w-5 h-5 mr-2" />
                Transform Your Professional Image
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Build Your
                <br />
                <span className="text-white">Personal Brand</span>
              </h1>

              {/* Subtext */}
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Stand out in your industry with a powerful personal brand that
                attracts opportunities, builds trust, and positions you as the
                go-to expert in your field.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 hover:bg-green-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                >
                  Start Branding Now <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-full animate-pulse-slow"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 ring-8 ring-white/5 bg-white/10 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                  alt="Professional Personal Branding"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-400/20 via-green-400/20 to-blue-300/20 text-center">
        <blockquote className="text-2xl font-medium italic mb-4 text-blue-700">
          "Aspirentech transformed my LinkedIn presence and helped me land 3
          speaking opportunities in just 2 months!"
        </blockquote>
        <cite className="text-green-600 font-semibold">
          – Priya Sharma, Marketing Director
        </cite>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Your Success Starts with
              <br />
              <span className="inline-block text-gradient">
                Strategic Branding
              </span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6 text-center lg:mt-12 mt-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                In today's competitive landscape, your personal brand is your
                most valuable asset. We help professionals, entrepreneurs, and
                executives build authentic brands that open doors to new
                opportunities and accelerate career growth.
              </p>

              {/* Branding Services */}
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-6 text-left max-w-xl mx-auto">
                {brandingServices.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>

              {/* Why Personal Branding Matters */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-green-400/5 border border-blue-500/20 mb-6 text-left max-w-xl mx-auto">
                <h3 className="font-semibold mb-2">
                  Why Personal Branding Matters
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>70% of employers check social profiles</li>
                  <li>Strong brands earn 23% more revenue</li>
                  <li>
                    Personal brands increase career opportunities by 85%
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3 space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                Our Proven 4-Step Process
              </h3>

              {brandingSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${step.color === "primary"
                      ? "border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10"
                      : step.color === "accent"
                        ? "border-green-400/30 bg-green-400/5 hover:bg-green-400/10"
                        : "border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10"
                      }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.color === "primary"
                          ? "bg-blue-500/20 text-blue-600"
                          : step.color === "accent"
                            ? "bg-green-400/20 text-green-500"
                            : "bg-emerald-500/20 text-emerald-500"
                          }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl mb-2">
                          {index + 1}. {step.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gradient-to-br from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Brand Transformations</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            See how we've helped professionals across industries build powerful
            personal brands
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/5 to-green-400/5 p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-400"></div>
                <h3 className="font-bold text-lg mb-2">Industry Expert {item}</h3>
                <p className="text-muted-foreground mb-4">
                  Increased LinkedIn engagement by 400%
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <Camera className="w-20 h-20 mx-auto mb-8 text-blue-600" />
          <h2 className="text-5xl font-bold mb-6">
            Ready to Become the Authority in Your Industry?
          </h2>
          <p className="text-xl opacity-80 mb-10 max-w-3xl mx-auto">
            Stop being invisible online. Start building a personal brand that
            attracts opportunities, clients, and recognition in your field.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90 px-6 py-3 rounded-md font-semibold inline-flex items-center justify-center shadow-md"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>


    </div>
  );
};

export default PersonalBranding;
