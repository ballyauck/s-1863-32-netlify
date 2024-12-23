import Navbar from "../components/Navbar";
import HeroBlockC from "../components/hero-blocks/HeroBlockC";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBlockC />
      
      {/* About Section */}
      <section id="about" className="pt-32 px-6 bg-[#E9AF76]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to Yuccan Technologies. We are committed to delivering innovative solutions
            that transform businesses and drive success.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-32 px-6 bg-[#3C8F69]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <p className="text-lg mb-6">
            Discover our comprehensive range of technology services designed to meet your business needs.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Solutions</h1>
          <p className="text-lg mb-6">
            Explore our cutting-edge solutions that help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      <Stats />

      {/* Contact Section */}
      <section id="contact" className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg mb-6">
            Get in touch with us to discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;