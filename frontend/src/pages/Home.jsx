import CategoryCarousel from "@/components/CategoryCarousel";
import HeroSection from "@/components/HeroSection";
import LatestJobs from "@/components/LatestJobs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users?.user?.data);

  useEffect(() => {
    if (user?.role == "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </div>
  );
};

export default Home;
