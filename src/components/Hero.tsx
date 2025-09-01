import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/fitness-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People exercising in a modern gym" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block bg-fitness-gradient bg-clip-text text-transparent">
            Fitness Journey
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Personalized workout plans, expert health guidance, and progress tracking 
          to help you achieve your fitness goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 text-sm opacity-75">
          <div className="text-center">
            <div className="text-2xl font-bold">10K+</div>
            <div>Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div>Workout Plans</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div>Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;