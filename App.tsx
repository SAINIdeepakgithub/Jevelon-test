import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
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
import FrontendDevelopmentPage from "./pages/FrontendDevelopmentPage";
import BackendDevelopmentPage from "./pages/BackendDevelopmentPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./pages/MobileAppDevelopmentPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import { useScrollToTop } from "./utils/useScrollToTop";

function AppContent() {
  useScrollToTop(); // Add scroll to top functionality inside Router context

  return (
    <div className="min-h-screen dark">
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
          <Route path="/#contact" element={<HomePage />} />
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
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Enable dark theme by default
    document.documentElement.classList.add("dark");
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Router>
      <AppContent />
    </Router>
  );
}