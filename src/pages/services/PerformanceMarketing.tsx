import { useState } from "react";
import { PopupModal } from "react-calendly";
import {
  ArrowRight,
  Target,
  BarChart3,
  DollarSign,
  Zap,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
// import performanceHero from "@/assets/performance-marketing-hero.png"; // Placeholder for future image

const PerformanceMarketing = () => {
  const [open, setOpen] = useState(false);

  const metrics = [
    { value: "300%", label: "Average ROI Increase" },
    { value: "85%", label: "Cost Reduction" },
    { value: "250%", label: "Lead Generation Boost" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "PPC Advertising",
      description:
        "Strategic pay-per-click campaigns that maximize your advertising spend and drive qualified traffic",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Conversion Optimization",
      description:
        "Optimize every touchpoint to increase conversion rates and maximize revenue from existing traffic",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "ROI Tracking",
      description:
        "Advanced attribution modeling and analytics to track every dollar spent and revenue generated",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Hacking",
      description:
        "Innovative strategies and rapid testing to identify high-impact growth opportunities",
    },
  ];

  const benefits = [
    "Measurable results with clear ROI tracking",
    "Reduced customer acquisition costs",
    "Faster time to market and results",
    "Data-driven decision making",
    "Scalable marketing campaigns",
    "Real-time optimization and adjustments",
  ];

  const platforms = [
    "Google Ads",
    "Facebook Ads",
    "LinkedIn Ads",
    "Instagram Ads",
    
  ];

  return (
    <div className="min-h-screen">
      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/salmanabs1512/30min"
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={document.getElementById("root")!}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-r from-blue-600 to-green-500 overflow-hidden text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/3 -translate-y-1/3">
            <div className="w-64 h-64 rounded-full border-8 border-current"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-12 opacity-10 transform -translate-x-1/3 translate-y-1/3">
            <div className="w-48 h-48 rounded-full border-8 border-current"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 lg:order-1">
                <div className="inline-flex items-center px-5 py-2 bg-white/20 rounded-full text-white font-medium mb-6 border border-white/30">
                  <Target className="w-4 h-4 mr-2" />
                  Performance Marketing Results
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Performance Marketing <br />
                  That Drives Growth
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                  We optimize for what matters: your bottom line. Our performance
                  marketing engine combines deep attribution modeling with data-driven
                  scaling to maximize your ROI.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-green-100 font-bold px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
                    onClick={() => setOpen(true)}
                  >
                    Scale Your ROI
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
                <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                    alt="Performance Marketing Data and ROI Analytics"
                    className="relative w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Statistics Badges */}
                <div className="absolute -top-10 -right-10 p-6 bg-white rounded-2xl shadow-2xl animate-float hidden md:block">
                  <div className="text-4xl font-black text-blue-600">12.5x</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Average ROAS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 bg-background">
          <div className="flex justify-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-[1.28]">
              Our Performance in{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h2>
          </div>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="text-center bg-gradient-card border-0 shadow-card text-black"
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="opacity-90">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Performance Marketing Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive performance marketing solutions designed to maximize
                your return on investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Multi-Platform Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                We optimize campaigns across all major advertising platforms for
                maximum reach and efficiency
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-card rounded-full text-black font-medium"
                  >
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Performance Marketing Works
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Performance marketing focuses on measurable outcomes, ensuring
                  every marketing dollar contributes to your bottom line with
                  transparent tracking and optimization.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg hover:shadow-glow transition-all"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl p-8 text-white hover:shadow-glow transition-all">
                  <Zap className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Accelerate Your Growth
                  </h3>
                  <p className="mb-6 opacity-90">
                    Get a custom performance marketing strategy that delivers
                    measurable results from day one.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    onClick={() => setOpen(true)}
                  >
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Maximize Your Marketing ROI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's create performance marketing campaigns that deliver measurable
              results and drive sustainable growth.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow font-semibold text-white inline-flex items-center justify-center"
              >
                Get Performance Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PerformanceMarketing;
