import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-hover p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                {!isSubmitted ? (
                  <form
                    action="https://formsubmit.co/salmanabs1512@gmail.com"
                    method="POST"
                    className="space-y-6"
                    onSubmit={() => {
                      setIsSubmitting(true);
                      setTimeout(() => {
                        setIsSubmitting(false);
                        setIsSubmitted(true);
                      }, 1500);
                    }}
                  >
                    {/* Hidden inputs for FormSubmit */}
                    <input
                      type="hidden"
                      name="_next"
                      value={window.location.href}
                    />
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <div className="flex items-center border rounded-md px-3 bg-background/50">
                        <User className="h-4 w-4 text-muted-foreground mr-2" />
                        <Input
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <div className="flex items-center border rounded-md px-3 bg-background/50">
                        <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                        <Input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <div className="flex items-center border rounded-md px-3 bg-background/50">
                        <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                        <Input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-company">Company Name</Label>
                      <div className="flex items-center border rounded-md px-3 bg-background/50">
                        <Building2 className="h-4 w-4 text-muted-foreground mr-2" />
                        <Input
                          id="contact-company"
                          type="text"
                          name="company"
                          placeholder="Company Inc."
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-service">Service Interest</Label>
                      <select
                        id="contact-service"
                        name="service"
                        className="w-full px-4 py-3 border rounded-md bg-background/50 focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="saas-products">SaaS Products</option>
                        <option value="consultation">
                          General Consultation
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <div className="flex items-start border rounded-md px-3 bg-background/50">
                        <MessageSquare className="h-4 w-4 text-muted-foreground mr-2 mt-3" />
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project or requirements..."
                          className="w-full bg-transparent focus:outline-none py-3 resize-none"
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">
                      ✅ Thank you!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-hover p-6">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a
                  href="mailto:info@aspirentech.in"
                  className="text-primary font-medium hover:text-accent transition-colors"
                >
                  info@aspirentech.in
                </a>
              </div>

              <div className="card-hover p-6">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a
                  href="tel:+919876543210"
                  className="text-primary font-medium hover:text-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="card-hover p-6">
                <Clock className="w-8 h-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="card-hover p-6">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Krishnagiri Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Tamil Nadu, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Chennai Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our offices in Krishnagiri and Chennai
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Krishnagiri Office</h3>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-muted-foreground">
                Google Maps - Krishnagiri Location
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Chennai Office</h3>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-muted-foreground">
                Google Maps - Chennai Location
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
