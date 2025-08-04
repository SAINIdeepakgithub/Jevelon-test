import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useScrollToTop } from "./utils/useScrollToTop";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));
const FrontendDevelopmentPage = lazy(() => import("./pages/FrontendDevelopmentPage"));
const BackendDevelopmentPage = lazy(() => import("./pages/BackendDevelopmentPage"));
const WebDevelopmentPage = lazy(() => import("./pages/WebDevelopmentPage"));
const MobileAppDevelopmentPage = lazy(() => import("./pages/MobileAppDevelopmentPage"));
const DigitalMarketingPage = lazy(() => import("./pages/DigitalMarketingPage"));

// Loading component for lazy routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function AppContent() {
  useScrollToTop();

  return (
    <div className="min-h-screen dark">
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/team" element={<TeamPage />} />
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Reduced splash screen time from 3s to 1.5s for faster loading
    const timer = setTimeout(() => setShowSplash(false), 1500);
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