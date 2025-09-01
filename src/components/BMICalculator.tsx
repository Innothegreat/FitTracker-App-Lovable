import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(Number(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight": return "text-blue-500";
      case "Normal weight": return "text-success";
      case "Overweight": return "text-warning";
      case "Obese": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            BMI Calculator
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate your Body Mass Index to understand your current health status.
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Calculator className="h-5 w-5 mr-2 text-primary" />
                Calculate Your BMI
              </CardTitle>
              <CardDescription>
                Enter your height and weight to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                onClick={calculateBMI} 
                className="w-full" 
                size="lg"
                disabled={!height || !weight}
              >
                Calculate BMI
              </Button>
              
              {bmi && (
                <div className="mt-6 p-6 rounded-lg bg-muted/50 text-center">
                  <h3 className="text-2xl font-bold mb-2">Your BMI: {bmi}</h3>
                  <p className={`text-lg font-semibold ${getCategoryColor(category)}`}>
                    {category}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>BMI Categories:</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                      <span>Underweight: &lt; 18.5</span>
                      <span>Normal: 18.5 - 24.9</span>
                      <span>Overweight: 25 - 29.9</span>
                      <span>Obese: ≥ 30</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;