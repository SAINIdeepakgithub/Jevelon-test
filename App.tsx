import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import FAQPage from "./pages/FAQPage";
import SupportPage from "./pages/SupportPage";
import CareersPage from "./pages/CareersPage";
import TeamPage from "./pages/TeamPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import ContactPage from "./pages/ContactPage";
import FrontendDevelopmentPage from "./pages/FrontendDevelopmentPage";
import BackendDevelopmentPage from "./pages/BackendDevelopmentPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./pages/MobileAppDevelopmentPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";

export default function App() {
  useEffect(() => {
    // Enable dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen dark">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            {/* Service Pages */}
            <Route path="/services/frontend-development" element={<FrontendDevelopmentPage />} />
            <Route path="/services/backend-development" element={<BackendDevelopmentPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            {/* Handle preview_page.html and other unmatched routes */}
            <Route path="/preview_page.html" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}