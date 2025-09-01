import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkoutPlans from "@/components/WorkoutPlans";
import HealthGuides from "@/components/HealthGuides";
import ProgressDashboard from "@/components/ProgressDashboard";
import BMICalculator from "@/components/BMICalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="workouts">
        <WorkoutPlans />
      </div>
      <div id="health">
        <HealthGuides />
      </div>
      <div id="progress">
        <ProgressDashboard />
      </div>
      <div id="tools">
        <BMICalculator />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
