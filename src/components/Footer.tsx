import { Dumbbell, Heart, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FitTracker</span>
            </div>
            <p className="text-sm opacity-80">
              Your complete fitness companion for a healthier lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#workouts" className="hover:text-primary transition-colors">Workout Plans</a></li>
              <li><a href="#health" className="hover:text-primary transition-colors">Health Guides</a></li>
              <li><a href="#progress" className="hover:text-primary transition-colors">Progress Tracking</a></li>
              <li><a href="#tools" className="hover:text-primary transition-colors">BMI Calculator</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm opacity-80 mb-4">
              Get fitness tips and updates delivered to your inbox.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 opacity-60" />
              <span className="text-sm opacity-80">newsletter@fittracker.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-primary" /> for your fitness journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;