import { useState } from "react";
import { PopupModal } from "react-calendly";
import {
  ArrowRight,
  Calendar,
  Phone,
  Target,
  Zap,
  Clock,
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

const AdsToAppointment = () => {
  const [open, setOpen] = useState(false);

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Targeted Ad Campaigns",
      description:
        "Precision-targeted ads that reach your ideal customers at the perfect moment",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Seamless Booking",
      description:
        "Frictionless appointment booking system integrated directly with your ads",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Automated Follow-up",
      description:
        "Smart follow-up sequences to convert leads into confirmed appointments",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Real-time Scheduling",
      description:
        "Live calendar integration with instant appointment confirmation",
    },
  ];

  const benefits = [
    "Reduce lead-to-appointment conversion time by 75%",
    "Increase appointment show-up rates by 60%",
    "Lower cost per appointment acquisition",
    "Automated lead nurturing and follow-up",
    "Real-time analytics and reporting",
    "Mobile-optimized booking experience",
  ];

  const process = [
    {
      step: "01",
      title: "Ad Creation",
      description: "We create compelling ads targeted to your ideal customers",
    },
    {
      step: "02",
      title: "Landing Page",
      description: "Custom landing pages optimized for appointment conversions",
    },
    {
      step: "03",
      title: "Booking System",
      description:
        "Seamless integration with your calendar and CRM system",
    },
    {
      step: "04",
      title: "Follow-up",
      description:
        "Automated reminders and nurture sequences for confirmed appointments",
    },
  ];

  const industries = [
    "Healthcare & Medical",
    "Legal Services",
    "Real Estate",
    "Financial Services",
    "Beauty & Wellness",
    "Professional Services",
    "Automobile",
    "Home Services",
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

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-green-500 overflow-hidden text-white">
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
                <Target className="w-4 h-4 mr-2" />
                Ads to Appointment System
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Turn Ads Into <br /> Appointments
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Revolutionary ads-to-appointment system that converts your
                advertising spend directly into booked appointments. No more lead
                chasing - just confirmed appointments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-green-100 font-bold px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
                  onClick={() => setOpen(true)}
                >
                  Book Demo Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1200"
                  alt="Advertising to Appointment Conversion System"
                  className="relative w-full h-auto object-cover transition-transform duration-500 hover:rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Ads-to-Appointment Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to convert ad clicks into confirmed
              appointments seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
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
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process converts ad clicks into appointments in
              minutes, not days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all"
              >
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Service-Based Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Our ads-to-appointment system works across multiple industries and
              service types
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-card rounded-lg text-center font-medium"
                >
                  {industry}
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
                Why Ads-to-Appointment Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Traditional lead generation creates friction. Our system
                eliminates steps, reduces abandonment, and converts more
                prospects into paying customers.
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
                  Ready to Fill Your Calendar?
                </h3>
                <p className="mb-6 opacity-90">
                  Stop chasing leads and start booking appointments. See how our
                  system can transform your business.
                </p>
                {/* Contact page link */}
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="w-full">
                    Schedule Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Lead Generation Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of businesses using our ads-to-appointment system to
            book more appointments and grow faster.
          </p>
          {/* Contact page link */}
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow font-semibold inline-flex items-center justify-center"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdsToAppointment;
