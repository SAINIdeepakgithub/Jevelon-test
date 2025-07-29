import Contact from "../components/Contact";
import PageHeader from "../components/shared/PageHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team"
        description="Ready to start your next project? Contact us today for a free consultation and let's discuss how we can help your business grow with our comprehensive IT services."
      />
      <Contact />
    </div>
  );
}