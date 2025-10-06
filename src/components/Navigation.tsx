import { Link, useLocation } from "react-router-dom";
import { Dna, Database, Shield, Activity, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Dna },
    { path: "/my-data", label: "My Data", icon: Database },
    { path: "/access-control", label: "Access Control", icon: Shield },
    { path: "/activity-log", label: "Activity Log", icon: Activity },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Dna className="w-8 h-8 text-primary transition-transform group-hover:rotate-180 duration-500" />
            <span className="text-xl font-bold text-gradient">DecentraGEN</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300",
                    isActive
                      ? "bg-primary/30 text-primary-foreground"
                      : "text-foreground/70 hover:bg-white/10 hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
