import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { currentTheme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className={`text-9xl font-bold ${
          currentTheme === 'theme3' 
            ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' 
            : 'text-primary'
        }`}>
          404
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            {currentTheme === 'theme3' ? 'Oopsie! Page Not Found! 😅' : 'Page Not Found'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            {currentTheme === 'theme3' 
              ? "Looks like this page went on a little adventure without us! Let's get you back to safety! 🏠" 
              : currentTheme === 'theme2'
              ? "The page you're looking for has moved or no longer exists. Allow us to guide you back to familiar territory."
              : "Sorry, we couldn't find the page you're looking for. Let's get you back on track."
            }
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </Link>
          </Button>
          
          <Button asChild size="lg" className={
            currentTheme === 'theme3' 
              ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white' 
              : ''
          }>
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>{currentTheme === 'theme3' ? 'Take Me Home! 🚀' : 'Return Home'}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
