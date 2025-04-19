
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Alert = {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  time: string;
};

const alerts: Alert[] = [
  {
    id: '1',
    title: 'Injured animal',
    description: 'Lion #241 reported with leg injury near Eastern boundary',
    priority: 'high',
    time: '20 minutes ago',
  },
  {
    id: '2',
    title: 'Territory breach',
    description: 'Elephant #125 has left the protected zone',
    priority: 'high',
    time: '2 hours ago',
  },
  {
    id: '3',
    title: 'Unusual movement',
    description: 'Rhino group changing migration pattern',
    priority: 'medium',
    time: '4 hours ago',
  },
  {
    id: '4',
    title: 'Missing tracking data',
    description: 'Giraffe #099 collar not transmitting for 24 hours',
    priority: 'medium',
    time: '1 day ago',
  },
];

const getPriorityColor = (priority: Alert['priority']) => {
  switch (priority) {
    case 'high':
      return 'bg-alert text-white';
    case 'medium':
      return 'bg-amber-500 text-white';
    case 'low':
      return 'bg-sky text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

interface AlertsCardProps {
  className?: string;
}

export function AlertsCard({ className }: AlertsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
        <CardDescription>Requires attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-3">
              <Badge className={cn("rounded-full mt-0.5", getPriorityColor(alert.priority))}>
                {alert.priority}
              </Badge>
              <div>
                <h4 className="text-sm font-medium">{alert.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
