
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Rabbit, 
  Map, 
  Activity, 
  LineChart, 
  Users, 
  Bell, 
  Settings, 
  Menu 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const links: SidebarLink[] = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Animals', href: '/animals', icon: Rabbit },
  { name: 'Map View', href: '/map', icon: Map },
  { name: 'Health Reports', href: '/health', icon: Activity },
  { name: 'Analytics', href: '/analytics', icon: LineChart },
  { name: 'Rangers', href: '/rangers', icon: Users },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function AppSidebar({ className }: SidebarProps) {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const SidebarContent = () => (
    <div className="space-y-4 py-4">
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold tracking-tight text-forest-dark flex items-center gap-2">
          <Rabbit className="h-6 w-6" />
          <span>Gir Ark</span>
        </h2>
        <p className="text-xs text-muted-foreground">Wildlife Tracking System</p>
      </div>
      <div className="px-3">
        <div className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-forest-light hover:text-white transition-colors",
                location.pathname === link.href 
                  ? "bg-forest text-white" 
                  : "text-muted-foreground"
              )}
            >
              <link.icon className="h-4 w-4" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-40">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className={cn("w-64 border-r h-screen sticky top-0", className)}>
      <SidebarContent />
    </aside>
  );
}
