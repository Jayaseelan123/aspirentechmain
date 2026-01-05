import { useState } from "react";
import { ArrowRight, Share2, Users, Heart, TrendingUp, Camera, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";

const SocialMediaMarketing = () => {
  const [open, setOpen] = useState(false);

  const platforms = [
    { name: "Instagram", description: "Visual storytelling and influencer partnerships" },
    { name: "Facebook", description: "Community building and targeted advertising" },
    { name: "LinkedIn", description: "B2B networking and thought leadership" },
    { name: "TikTok", description: "Viral content and Gen Z engagement" },
    { name: "Twitter/X", description: "Real-time engagement and brand voice" },
    { name: "YouTube", description: "Video content and educational series" }
  ];

  const services = [
    { icon: <Camera className="h-8 w-8 text-primary" />, title: "Content Creation", description: "Professional photography, videography, and graphic design for all platforms" },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Community Management", description: "Active engagement, response management, and community building" },
    { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: "Social Media Advertising", description: "Targeted campaigns across all major social media platforms" },
    { icon: <Heart className="h-8 w-8 text-primary" />, title: "Influencer Partnerships", description: "Strategic collaborations with relevant influencers in your niche" }
  ];

  const benefits = [
    "Increased brand awareness and recognition",
    "Higher engagement rates and community growth",
    "Improved customer loyalty and retention",
    "Direct communication channel with customers",
    "Cost-effective marketing with high ROI",
    "Real-time feedback and market insights"
  ];

  const metrics = [
    { value: "500%", label: "Average Engagement Increase" },
    { value: "10M+", label: "Impressions Generated" },
    { value: "150%", label: "Follower Growth Rate" },
    { value: "300%", label: "Lead Generation Boost" }
  ];

  return (
    <div className="min-h-screen">

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

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left order-2 lg:order-1">
              <div className="inline-flex items-center px-5 py-2 bg-white/20 rounded-full text-white font-medium mb-6 border border-white/30">
                <Share2 className="w-4 h-4 mr-2" />
                Social Media Marketing Excellence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Social Media <br /> Marketing Excellence
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Build meaningful connections, grow your community, and drive business results through strategic social media marketing across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-green-100 font-bold px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105">
                    Get Social Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
                  alt="Social Media Marketing Management"
                  className="relative w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Platform Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We create tailored strategies for each social media platform to maximize your reach and engagement
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{platform.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Social Media Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From content creation to community management, we handle every aspect of your social media presence
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Content Strategy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Content That Converts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our social media strategies go beyond posting. We create content that tells your brand story, engages your audience, and drives meaningful business results.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center flex-shrink-0">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Brand Storytelling</h3>
                  <p className="text-muted-foreground">Craft compelling narratives that resonate with your audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Building</h3>
                  <p className="text-muted-foreground">Foster genuine connections and build loyal communities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Performance Optimization</h3>
                  <p className="text-muted-foreground">Continuously optimize content based on performance data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly CTA */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white hover:shadow-glow transition-all">
              <Heart className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Go Viral?</h3>
              <p className="mb-6 opacity-90">
                Let's create a social media presence that not only engages but also converts followers into customers.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => setOpen(true)}
              >
                Start Your Social Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Calendly Modal */}
              <PopupModal
                url="https://calendly.com/salmanabs1512/30min"
                onModalClose={() => setOpen(false)}
                open={open}
                rootElement={document.getElementById("root")!}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Social Media Marketing Matters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Social media isn't just about likes and follows - it's about building relationships that drive business growth
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg hover:shadow-glow transition-all">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Social Media?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's create a social media strategy that builds your brand, engages your audience, and drives real results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow font-semibold inline-flex items-center justify-center">
              Get Your Social Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
