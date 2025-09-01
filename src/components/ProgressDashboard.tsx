import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Activity, Calendar } from "lucide-react";

const ProgressDashboard = () => {
  const stats = [
    {
      title: "Weekly Goal",
      value: "4 of 5 workouts",
      progress: 80,
      icon: Target,
      color: "text-primary"
    },
    {
      title: "Calories Burned",
      value: "2,340 kcal",
      progress: 75,
      icon: Activity,
      color: "text-success"
    },
    {
      title: "Streak",
      value: "12 days",
      progress: 60,
      icon: Calendar,
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Track Your Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your fitness journey with detailed analytics and insights that keep you motivated.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-lg">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <Progress value={stat.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.progress}% complete
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Your latest fitness milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <h4 className="font-semibold">First HIIT Workout Completed</h4>
                    <p className="text-sm text-muted-foreground">Burned 320 calories in 20 minutes</p>
                  </div>
                  <Badge variant="secondary">Yesterday</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <h4 className="font-semibold">7-Day Streak Achieved</h4>
                    <p className="text-sm text-muted-foreground">Consistent daily workouts</p>
                  </div>
                  <Badge variant="secondary">3 days ago</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <h4 className="font-semibold">Personal Best: Deadlift</h4>
                    <p className="text-sm text-muted-foreground">New record of 180 lbs</p>
                  </div>
                  <Badge variant="secondary">1 week ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;