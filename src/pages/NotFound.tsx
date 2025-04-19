
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rabbit } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-forest-light/10 to-white">
      <div className="text-center max-w-lg px-6">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-forest/10 flex items-center justify-center">
            <Rabbit className="h-12 w-12 text-forest" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-forest mb-4">404</h1>
        <p className="text-xl text-forest-dark mb-8">
          This part of the wildlife sanctuary is still being developed.
        </p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for is currently under construction. Our rangers are working on it!
        </p>
        <Button asChild size="lg" className="bg-forest hover:bg-forest-dark">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
