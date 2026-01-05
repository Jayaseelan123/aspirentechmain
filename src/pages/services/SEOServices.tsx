import React from "react";
import { Search, Globe, Target, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// ✅ Make sure this file exists
import { Link } from "react-router-dom";
// import seoHero from "@/assets/seo-service-hero.png"; // Placeholder for future image
const SEOServices = () => {
  const seoFeatures = [
    "Technical SEO Optimization",
    "Keyword Research & Strategy",
    "On-Page SEO Enhancement",
    "Link Building Campaigns",
    "Local SEO Optimization",
    "SEO Content Creation",
    "Performance Tracking & Analytics",
    "Competitor Analysis & Insights",
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="relative py-28 bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <div className="w-64 h-64 rounded-full border-8 border-current"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-10 transform -translate-x-1/3 translate-y-1/3">
          <div className="w-48 h-48 rounded-full border-8 border-current"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-5 py-2 bg-white/20 rounded-full text-white font-medium mb-6 border border-white/30">
                <Search className="w-4 h-4 mr-2" />
                Professional SEO Services
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                SEO Services
                <br /> that Rank & Convert
              </h1>
              <p className="text-xl leading-relaxed mb-10 opacity-90">
                Dominate search results with our comprehensive SEO strategies. We help
                businesses achieve higher rankings, increased organic traffic, and
                better online visibility through proven SEO techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-green-100 font-semibold shadow-xl transition-all hover:scale-105"
                  >
                    Get SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-transparent blur-2xl rounded-full"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900/50 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                  alt="SEO Strategy and Analytics"
                  className="relative w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-background">
        <div className="flex justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-[1.28]">
            Our Performance in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              SEO
            </span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "450+", label: "Keywords Ranked" },
            { number: "350%", label: "Avg Traffic Increase" },
            { number: "95%", label: "Client Success Rate" },
            { number: "6M", label: "Page 1 Rankings" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all"
            >
              <div className="text-4xl font-extrabold mb-2 text-blue-600">{stat.number}</div>
              <div className="opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features + Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="flex justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-[1.28]">
            Complete{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              SEO Solutions
            </span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Features */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed mt-10">
              Our SEO services combine technical expertise with strategic content
              optimization to deliver measurable results. From local businesses to
              enterprise companies, we help achieve top rankings and sustainable growth.
            </p>

            <div className="space-y-4 mb-10">
              {seoFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid gap-6">
            {[
              {
                icon: <Search className="w-6 h-6 mr-3" />,
                title: "SEO Audit & Analysis",
                desc: "Complete technical audit identifying optimization opportunities, competitor analysis, and keyword research to build your SEO foundation.",
                duration: "Duration: 1-2 weeks",
              },
              {
                icon: <Globe className="w-6 h-6 mr-3" />,
                title: "On-Page Optimization",
                desc: "Optimize meta tags, content structure, internal linking, and technical elements to improve search engine crawlability and user experience.",
                duration: "Duration: 2-4 weeks",
              },
              {
                icon: <Target className="w-6 h-6 mr-3" />,
                title: "Content & Link Building",
                desc: "Create high-quality, SEO-optimized content and build authoritative backlinks to establish domain authority and improve rankings.",
                duration: "Duration: Ongoing",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-r from-blue-400/20 via-green-400/20 to-blue-300/20 text-blue-600 shadow-lg hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="mb-2 opacity-90">{step.desc}</p>
                <span className="text-sm font-semibold">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <Star className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-80">
            Get a free SEO audit and discover how we can help your website rank higher,
            drive more organic traffic, and increase revenue through SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold shadow-md hover:opacity-90">
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

          </div>
        </div>
      </section>



    </div>
  );
};

export default SEOServices;
