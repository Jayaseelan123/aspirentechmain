import { useState } from "react";
import { PopupModal } from "react-calendly";
import { ArrowRight, FileText, Target, TrendingUp, Users, BookOpen, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
// import contentHero from "@/assets/content-marketing-hero.png"; // Placeholder for future image

const ContentMarketing = () => {
  const [open, setOpen] = useState(false);

  const benefits = [
    "Improved search engine rankings and organic traffic",
    "Enhanced brand authority and thought leadership",
    "Higher engagement rates across all channels",
    "Cost-effective lead generation",
    "Long-term sustainable marketing results",
    "Better customer education and retention"
  ];

  const contentTypes = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Blog Content",
      description: "SEO-optimized blog posts that educate, engage, and convert your audience"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Ebooks & Whitepapers",
      description: "In-depth resources that establish authority and generate quality leads"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Social Media Content",
      description: "Engaging posts and campaigns tailored for each social platform"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Video Content",
      description: "Compelling video content for improved engagement and conversions"
    }
  ];

  const process = [
    { step: "01", title: "Strategy Development", description: "We analyze your audience and create a comprehensive content strategy" },
    { step: "02", title: "Content Creation", description: "Our expert writers create high-quality, SEO-optimized content" },
    { step: "03", title: "Distribution", description: "Strategic distribution across multiple channels for maximum reach" },
    { step: "04", title: "Performance Analysis", description: "Continuous monitoring and optimization for better results" }
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
                <Globe className="w-4 h-4 mr-2" />
                Strategic Content Marketing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Content Marketing <br /> That Converts
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Create compelling content that builds trust, drives engagement, and converts visitors into loyal customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-green-100 font-bold px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105">
                    Start Content Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2340&auto=format&fit=crop"
                  alt="Content Strategy and Creation"
                  className="relative w-full h-auto transition-transform duration-500 hover:-rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Content That Drives Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From blog posts to video content, we create engaging materials that resonate with your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating content that drives engagement and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Content Marketing Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Content marketing generates 3x more leads than paid search advertising while costing 62% less.
                Build lasting relationships with your audience through valuable, consistent content.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg hover:shadow-glow transition-all">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white hover:shadow-glow transition-all">
                <Users className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Build Your Content Empire</h3>
                <p className="mb-6 opacity-90">
                  Create a content strategy that positions your brand as an industry leader and drives consistent growth.
                </p>
                <Button onClick={() => setOpen(true)} variant="secondary" size="lg" className="w-full">
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
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's create content that not only engages your audience but also drives real business results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow font-semibold inline-flex items-center justify-center">
              Start Content Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/salmanabs1512/30min"
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={document.getElementById("root")!}
      />
    </div>
  );
};

export default ContentMarketing;
