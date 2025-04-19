
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, Clock, Filter, Map, MoreHorizontal, Rabbit, Search, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface Alert {
  id: string;
  title: string;
  description: string;
  animal?: {
    id: string;
    name: string;
    species: string;
  };
  location: string;
  priority: 'high' | 'medium' | 'low';
  time: string;
  status: 'active' | 'resolved' | 'investigating';
}

const alerts: Alert[] = [
  {
    id: '1',
    title: 'Injured animal',
    description: 'Lion #241 reported with leg injury near Eastern boundary',
    animal: {
      id: 'LN-241',
      name: 'Leo',
      species: 'Lion',
    },
    location: 'Eastern Boundary',
    priority: 'high',
    time: '20 minutes ago',
    status: 'active',
  },
  {
    id: '2',
    title: 'Territory breach',
    description: 'Elephant #125 has left the protected zone',
    animal: {
      id: 'EL-125',
      name: 'Tusker',
      species: 'Elephant',
    },
    location: 'Northern Perimeter',
    priority: 'high',
    time: '2 hours ago',
    status: 'investigating',
  },
  {
    id: '3',
    title: 'Unusual movement',
    description: 'Rhino group changing migration pattern',
    animal: {
      id: 'RH-108',
      name: 'Rhonda',
      species: 'Rhino',
    },
    location: 'Southern Grasslands',
    priority: 'medium',
    time: '4 hours ago',
    status: 'active',
  },
  {
    id: '4',
    title: 'Missing tracking data',
    description: 'Giraffe #099 collar not transmitting for 24 hours',
    animal: {
      id: 'GR-099',
      name: 'Gerald',
      species: 'Giraffe',
    },
    location: 'Western Acacia Forest',
    priority: 'medium',
    time: '1 day ago',
    status: 'active',
  },
  {
    id: '5',
    title: 'Potential poaching activity',
    description: 'Suspicious vehicle detected near western boundary',
    location: 'Western Boundary',
    priority: 'high',
    time: '30 minutes ago',
    status: 'investigating',
  },
  {
    id: '6',
    title: 'Water source contamination',
    description: 'Possible contamination at northeast waterhole',
    location: 'Northeast Waterhole',
    priority: 'medium',
    time: '5 hours ago',
    status: 'resolved',
  },
  {
    id: '7',
    title: 'Fence damage',
    description: 'Section of perimeter fence damaged in southern sector',
    location: 'Southern Perimeter',
    priority: 'medium',
    time: '12 hours ago',
    status: 'resolved',
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

const getStatusColor = (status: Alert['status']) => {
  switch (status) {
    case 'active':
      return 'bg-alert text-white';
    case 'investigating':
      return 'bg-amber-500 text-white';
    case 'resolved':
      return 'bg-green-500 text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const Alerts = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
            <p className="text-muted-foreground">
              Manage and respond to sanctuary alerts and incidents
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Alert Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-500" />
                Alert Summary
              </CardTitle>
              <CardDescription>Current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-2">
                <div className="grid grid-cols-2 items-center">
                  <div>Active</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-alert h-full" style={{ width: '43%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">3</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>Investigating</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '28%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">2</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>Resolved</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '28%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">2</span>
                  </div>
                </div>
                <div className="h-px bg-border my-2"></div>
                <div className="grid grid-cols-2 items-center">
                  <div>High Priority</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-alert h-full" style={{ width: '43%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">3</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>Medium Priority</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '57%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">4</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-3">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search alerts..."
                    className="pl-8"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.filter(a => a.status !== 'resolved').slice(0, 3).map((alert) => (
                  <div key={alert.id} className="flex justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <Badge className={`mt-1 ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </Badge>
                      <div>
                        <h4 className="font-medium">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Map className="h-3 w-3" />
                            <span>{alert.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{alert.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Assign Ranger</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Alerts</CardTitle>
            <CardDescription>Complete alert history</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="investigating">Investigating</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4 space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <Badge className={`mt-1 ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </Badge>
                      <div>
                        <h4 className="font-medium">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                        {alert.animal && (
                          <div className="flex items-center gap-2 mt-2 text-sm">
                            <Rabbit className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {alert.animal.name} ({alert.animal.id}) - {alert.animal.species}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Map className="h-3 w-3" />
                            <span>{alert.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{alert.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Assign Ranger</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="active" className="mt-4 space-y-4">
                {alerts
                  .filter(alert => alert.status === 'active')
                  .map((alert) => (
                    <div key={alert.id} className="flex justify-between p-4 border rounded-lg">
                      {/* Same card content as above */}
                      <div className="flex items-start gap-3">
                      <Badge className={`mt-1 ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </Badge>
                      <div>
                        <h4 className="font-medium">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                        {alert.animal && (
                          <div className="flex items-center gap-2 mt-2 text-sm">
                            <Rabbit className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {alert.animal.name} ({alert.animal.id}) - {alert.animal.species}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Map className="h-3 w-3" />
                            <span>{alert.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{alert.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Assign Ranger</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    </div>
                ))}
              </TabsContent>
              {/* Similar TabsContent for other tabs */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Alerts;
