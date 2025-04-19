
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rabbit, Map, Activity, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Activity = {
  id: string;
  type: 'sighting' | 'health' | 'territory' | 'alert';
  description: string;
  time: string;
};

const activities: Activity[] = [
  {
    id: '1',
    type: 'sighting',
    description: 'Ranger Sarah reported sighting of Elephant #301 at Northeast waterhole',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'health',
    description: 'Veterinarian completed health check for Lion #241, status: Healthy',
    time: '3 hours ago',
  },
  {
    id: '3',
    type: 'territory',
    description: 'Rhino #108 moved outside usual territory, now at Southern grasslands',
    time: '5 hours ago',
  },
  {
    id: '4',
    type: 'alert',
    description: 'Potential poaching activity detected near Western boundary',
    time: '6 hours ago',
  },
  {
    id: '5',
    type: 'sighting',
    description: 'New birth recorded: Zebra #452 gave birth to healthy foal',
    time: '8 hours ago',
  },
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'sighting':
      return <Rabbit className="h-4 w-4 text-sky" />;
    case 'health':
      return <Activity className="h-4 w-4 text-green-500" />;
    case 'territory':
      return <Map className="h-4 w-4 text-earth" />;
    case 'alert':
      return <AlertCircle className="h-4 w-4 text-alert" />;
    default:
      return null;
  }
};

interface RecentActivityCardProps {
  className?: string;
}

export function RecentActivityCard({ className }: RecentActivityCardProps) {
  return (
    <Card className={cn("col-span-2", className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest reports and observations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-0.5">{getActivityIcon(activity.type)}</div>
              <div>
                <p className="text-sm">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
