import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Utensils, Moon } from "lucide-react";
import healthIcons from "@/assets/health-icons.jpg";

const HealthGuides = () => {
  const guides = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Learn how to strengthen your heart and improve circulation",
      tips: "Regular cardio exercise, healthy diet, stress management",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Strategies for maintaining good mental health and focus",
      tips: "Meditation, adequate sleep, social connections",
      color: "text-purple-500"
    },
    {
      icon: Utensils,
      title: "Nutrition Basics",
      description: "Essential nutrition guidelines for optimal health",
      tips: "Balanced meals, hydration, portion control",
      color: "text-green-500"
    },
    {
      icon: Moon,
      title: "Sleep Optimization",
      description: "Improve your sleep quality for better recovery",
      tips: "Sleep schedule, bedroom environment, relaxation techniques",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Health,
              <span className="block text-primary">Our Guidance</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access expert health tips and evidence-based guidance to support your wellness journey beyond just exercise.
            </p>
            
            <div className="space-y-6">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <guide.icon className={`h-6 w-6 ${guide.color}`} />
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-2">
                      {guide.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      <strong>Key focus:</strong> {guide.tips}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button size="lg" className="mt-8">
              Explore All Guides
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={healthIcons} 
              alt="Health and wellness illustration" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-fitness-gradient opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthGuides;