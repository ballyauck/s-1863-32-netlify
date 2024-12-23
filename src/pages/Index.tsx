import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="pt-32 px-6" style={{ backgroundColor: '#E9AF76' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to Yuccan Technologies. We are committed to delivering innovative solutions
            that transform businesses and drive success.
          </p>
        </div>
      </section>

      <Stats />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
