import { useState } from "react";
import { ArrowRight, Zap, Clock, Settings, Workflow, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";
// import automationHero from "@/assets/business-automation-hero.png"; // Placeholder for future image

const BusinessAutomation = () => {
  const [open, setOpen] = useState(false);

  const automationAreas = [
    {
      icon: <Settings className="h-8 w-8 text-gradient" />,
      title: "Sales Automation",
      description: "Automate your entire sales funnel from lead capture to deal closure"
    },
    {
      icon: <Workflow className="h-8 w-8 text-gradient" />,
      title: "Marketing Workflows",
      description: "Streamline marketing campaigns with intelligent automation sequences"
    },
    {
      icon: <Clock className="h-8 w-8 text-gradient" />,
      title: "Task Management",
      description: "Eliminate repetitive tasks and focus on strategic business activities"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-gradient" />,
      title: "Reporting & Analytics",
      description: "Automated reporting and real-time business intelligence dashboards"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase team productivity by 300%",
    "Eliminate human errors in repetitive tasks",
    "24/7 automated customer interactions",
    "Faster response times and better customer service",
    "Scalable processes that grow with your business"
  ];

  const processes = [
    {
      title: "Lead Generation",
      description: "Automated lead capture, scoring, and nurturing sequences",
      savings: "Save 20+ hours/week"
    },
    {
      title: "Customer Onboarding",
      description: "Seamless new customer welcome sequences and setup processes",
      savings: "90% faster onboarding"
    },
    {
      title: "Invoice & Billing",
      description: "Automated invoicing, payment processing, and follow-ups",
      savings: "Reduce processing time by 80%"
    },
    {
      title: "Customer Support",
      description: "AI-powered chatbots and automated ticket routing systems",
      savings: "Handle 3x more inquiries"
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated reorder systems",
      savings: "Prevent 95% of stockouts"
    },
    {
      title: "Social Media",
      description: "Automated content scheduling and social media management",
      savings: "Save 15+ hours/week"
    }
  ];

  const tools = [
    "Zapier", "HubSpot", "Salesforce", "Mailchimp", "Slack", "Asana",
    "Microsoft Power Automate", "Webhooks", "Custom APIs", "AI Chatbots"
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
                <Settings className="w-4 h-4 mr-2" />
                Intelligent Business Automation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Business Automation <br /> Solutions
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Streamline your operations, eliminate manual tasks, and scale your business with
                intelligent automation solutions that work 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-green-100 font-bold px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105">
                    Get Automation Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                <img
                  src="/src/assets/auto.png"
                  alt="Futuristic Business Automation and Digital Transformation"
                  className="relative w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center bg-white text-blue-500 border shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2">60%</div>
                <div>Cost Reduction</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white text-blue-500 border shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2">300%</div>
                <div>Productivity Increase</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white text-blue-500 border shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div>Automation Uptime</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white text-blue-500 border shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div>Error Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Business Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From sales to marketing, operations to customer service - we automate every aspect of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationAreas.map((area, index) => (
              <Card key={index} className="border shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full w-fit text-white">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Automation Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Processes We Automate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform these time-consuming manual processes into efficient automated workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="bg-white text-foreground border shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{process.title}</CardTitle>
                  <div className="text-sm font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit">
                    {process.savings}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Integration */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration With Your Favorite Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              We work with all major business tools and platforms to create seamless automation workflows
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="px-6 py-3 bg-white text-blue-600 border rounded-full font-medium shadow-sm">
                  {tool}
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
                Why Business Automation is Essential
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's competitive landscape, automation isn't just nice to have - it's essential for survival.
                Businesses that automate scale faster, operate more efficiently, and provide better customer experiences.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl p-8 text-white shadow-lg">
                <Zap className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Automate Your Success</h3>
                <p className="mb-6 opacity-90">
                  Ready to eliminate manual work and scale your business? Let's identify the automation
                  opportunities that will have the biggest impact on your bottom line.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-green-100"
                  onClick={() => setOpen(true)}
                >
                  Start Automation Journey
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stop wasting time on repetitive tasks. Let's build automation systems that free up your time
            to focus on growing your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold">
              Get Free Automation Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessAutomation;
