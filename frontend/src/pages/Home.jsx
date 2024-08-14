import CategoryCarousel from "@/components/CategoryCarousel";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
       <CategoryCarousel />
      {/*<LatestJobs />
      <Footer /> */}
    </div>
  );
};

export default Home;
