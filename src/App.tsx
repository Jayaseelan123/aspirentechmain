import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop"; // 👈 Added

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Service Pages
import ContentMarketing from "./pages/services/ContentMarketing";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import AdsToAppointment from "./pages/services/AdsToAppointment";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import BusinessAutomation from "./pages/services/BusinessAutomation";
import SEOServices from "./pages/services/SEOServices";
import PersonalBranding from "./pages/services/PersonalBranding";
import WebAppDevelopment from "./pages/services/WebAppDevelopment";

// Product Pages
import Botzup from "./pages/products/Botzup";
import Tapion from "./pages/products/Tapion";
import Ecom from "./pages/products/Ecom";
import Ziya from "./pages/products/Ziya";
import LogoPage from "./pages/LogoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 Scroll reset on route change */}
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />

            {/* Service Routes */}
            <Route path="/services/seo-services" element={<SEOServices />} />
            <Route path="/services/personal-branding" element={<PersonalBranding />} />
            <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/services/ads-to-appointment" element={<AdsToAppointment />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/business-automation" element={<BusinessAutomation />} />

            {/* Product Routes */}
            <Route path="/products/botzup" element={<Botzup />} />
            <Route path="/products/tapion" element={<Tapion />} />
            <Route path="/products/ecom" element={<Ecom />} />
            <Route path="/products/ziya" element={<Ziya />} />
            <Route path="/new-logo" element={<LogoPage />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
