import { useState } from "react";
import {
  ArrowRight,
  Share2,
  Users,
  Heart,
  TrendingUp,
  Camera,
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";

const SocialMediaMarketing = () => {
  const [open, setOpen] = useState(false);

  /* ✅ Platforms with Icons */
  const platforms = [
    {
      name: "Instagram",
      description: "Visual storytelling and influencer partnerships",
      icon: <Instagram className="h-8 w-8 text-primary" />
    },
    {
      name: "Facebook",
      description: "Community building and targeted advertising",
      icon: <Facebook className="h-8 w-8 text-primary" />
    },
    {
      name: "LinkedIn",
      description: "B2B networking and thought leadership",
      icon: <Linkedin className="h-8 w-8 text-primary" />
    },
    {
      name: "TikTok",
      description: "Viral content and Gen Z engagement",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      name: "Twitter/X",
      description: "Real-time engagement and brand voice",
      icon: <Twitter className="h-8 w-8 text-primary" />
    },
    {
      name: "YouTube",
      description: "Video content and educational series",
      icon: <Youtube className="h-8 w-8 text-primary" />
    }
  ];

  const services = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description:
        "Professional photography, videography, and graphic design for all platforms"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Management",
      description:
        "Active engagement, response management, and community building"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Social Media Advertising",
      description:
        "Targeted campaigns across all major social media platforms"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Influencer Partnerships",
      description:
        "Strategic collaborations with relevant influencers in your niche"
    }
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

      {/* HERO SECTION */}
      <section className="relative py-28 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-5 py-2 bg-white/20 rounded-full mb-6">
              <Share2 className="w-4 h-4 mr-2" />
              Social Media Marketing Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Social Media <br /> Marketing Excellence
            </h1>
            <p className="text-xl mb-8 max-w-xl">
              Build meaningful connections and drive business growth through
              strategic social media marketing.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600">
                Get Social Strategy <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/src/assets/social.jpg"
              alt="Social Media Marketing"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary">
                  {metric.value}
                </div>
                <div className="text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ✅ MULTI-PLATFORM EXPERTISE (ICONS ADDED HERE ONLY) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Multi-Platform Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored strategies for each social media platform
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-glow transition-all"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {platform.icon}
                </div>
                <CardTitle className="text-2xl font-bold">
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  {platform.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 p-4">
              <CheckCircle className="text-primary" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Dominate Social Media?
        </h2>
        <Button
          size="lg"
          onClick={() => setOpen(true)}
          className="bg-gradient-primary"
        >
          Start Your Social Journey
        </Button>

        <PopupModal
          url="https://calendly.com/salmanabs1512/30min"
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={document.getElementById("root")!}
        />
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
