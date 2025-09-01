import { Button } from "@/components/ui/button";
import { Dumbbell, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">FitTracker</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#workouts" className="text-foreground hover:text-primary transition-colors">
              Workouts
            </a>
            <a href="#health" className="text-foreground hover:text-primary transition-colors">
              Health
            </a>
            <a href="#progress" className="text-foreground hover:text-primary transition-colors">
              Progress
            </a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">
              Tools
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="#workouts" className="block px-3 py-2 text-foreground hover:text-primary">
                Workouts
              </a>
              <a href="#health" className="block px-3 py-2 text-foreground hover:text-primary">
                Health
              </a>
              <a href="#progress" className="block px-3 py-2 text-foreground hover:text-primary">
                Progress
              </a>
              <a href="#tools" className="block px-3 py-2 text-foreground hover:text-primary">
                Tools
              </a>
              <div className="pt-4 pb-2">
                <Button variant="ghost" className="w-full mb-2">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;