import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";

const WorkoutPlans = () => {
  const plans = [
    {
      title: "Beginner Strength",
      description: "Perfect for those starting their fitness journey",
      duration: "30 mins",
      difficulty: "Beginner",
      participants: "2.5K",
      color: "bg-primary",
    },
    {
      title: "HIIT Cardio Blast",
      description: "High-intensity interval training for maximum results",
      duration: "20 mins",
      difficulty: "Intermediate",
      participants: "3.2K",
      color: "bg-secondary",
    },
    {
      title: "Advanced Powerlifting",
      description: "Build serious strength with compound movements",
      duration: "45 mins",
      difficulty: "Advanced",
      participants: "1.8K",
      color: "bg-accent",
    },
    {
      title: "Yoga & Flexibility",
      description: "Improve mobility and find inner peace",
      duration: "35 mins",
      difficulty: "All Levels",
      participants: "4.1K",
      color: "bg-success",
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Workout Plans for Every Goal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our expertly designed workout programs tailored to your fitness level and objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${plan.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {plan.duration}
                  </div>
                  <Badge variant="secondary">{plan.difficulty}</Badge>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {plan.participants} participants
                </div>
                
                <Button className="w-full mt-4" variant="outline">
                  Start Workout
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;