
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Plus, Search, User, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Ranger {
  id: string;
  name: string;
  role: string;
  zone: string;
  status: 'active' | 'off-duty' | 'on-leave';
  imageUrl?: string;
  initials: string;
  recentActivity: string;
  contactInfo: string;
}

const rangers: Ranger[] = [
  {
    id: '1',
    name: 'Amit Singh Kushwaha',
    role: 'Senior Conservation Officer',
    zone: 'Northern Gir Sector',
    status: 'active',
    initials: 'ASK',
    recentActivity: 'Reported Asiatic lion sighting 2 hours ago',
    contactInfo: 'Radio: CH1 · Phone: +91-9876543210',
  },
  {
    id: '2',
    name: 'Rajesh Patel',
    role: 'Lead Ranger',
    zone: 'Central Gir HQ',
    status: 'active',
    initials: 'RP',
    recentActivity: 'Completed lion health inspection 45 minutes ago',
    contactInfo: 'Radio: CH1 · Phone: +91-9876543211',
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    role: 'Wildlife Veterinarian',
    zone: 'Medical Facility',
    status: 'active',
    initials: 'PS',
    recentActivity: 'Treated injured lioness 3 hours ago',
    contactInfo: 'Radio: CH2 · Phone: +91-9876543212',
  },
  {
    id: '4',
    name: 'Neha Mehta',
    role: 'Wildlife Specialist',
    zone: 'Eastern Gir Boundary',
    status: 'active',
    initials: 'NM',
    recentActivity: 'Monitoring leopard movement pattern',
    contactInfo: 'Radio: CH1 · Phone: +91-9876543213',
  },
  {
    id: '5',
    name: 'Vikram Desai',
    role: 'Security Lead',
    zone: 'Perimeter Patrol',
    status: 'active',
    initials: 'VD',
    recentActivity: 'Patrolling western boundary',
    contactInfo: 'Radio: CH3 · Phone: +91-9876543214',
  },
  {
    id: '6',
    name: 'Ananya Joshi',
    role: 'Junior Ranger',
    zone: 'Southern Gir Sector',
    status: 'off-duty',
    initials: 'AJ',
    recentActivity: 'Off-duty until tomorrow',
    contactInfo: 'Radio: CH1 · Phone: +91-9876543215',
  },
  {
    id: '7',
    name: 'Dr. Arjun Malhotra',
    role: 'Senior Veterinarian',
    zone: 'Medical Facility',
    status: 'on-leave',
    initials: 'AM',
    recentActivity: 'On leave until April 15',
    contactInfo: 'Radio: CH2 · Phone: +91-9876543216',
  },
];

interface Patrol {
  id: string;
  rangerName: string;
  rangerInitials: string;
  zone: string;
  startTime: string;
  endTime: string;
  status: 'active' | 'completed' | 'scheduled';
  observations: string;
}

const patrols: Patrol[] = [
  {
    id: '1',
    rangerName: 'Amit Singh Kushwaha',
    rangerInitials: 'ASK',
    zone: 'Northern Gir Sector',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    status: 'active',
    observations: 'Observed Asiatic lion pride at northeast waterhole, all animals appear healthy',
  },
  {
    id: '2',
    rangerName: 'Vikram Desai',
    rangerInitials: 'VD',
    zone: 'Western Gir Boundary',
    startTime: '09:30 AM',
    endTime: '01:30 PM',
    status: 'active',
    observations: 'No unusual activity, fences intact, spotted two leopards near forest edge',
  },
  {
    id: '3',
    rangerName: 'Neha Mehta',
    rangerInitials: 'NM',
    zone: 'Eastern Gir Boundary',
    startTime: '07:00 AM',
    endTime: '11:00 AM',
    status: 'completed',
    observations: 'Spotted nilgai herd migrating south, counted approximately 35 individuals',
  },
  {
    id: '4',
    rangerName: 'Rajesh Patel',
    rangerInitials: 'RP',
    zone: 'Southern Gir Sector',
    startTime: '01:00 PM',
    endTime: '05:00 PM',
    status: 'scheduled',
    observations: 'Scheduled routine patrol',
  },
  {
    id: '5',
    rangerName: 'Dr. Priya Sharma',
    rangerInitials: 'PS',
    zone: 'Medical Response',
    startTime: '10:00 AM',
    endTime: '02:00 PM',
    status: 'completed',
    observations: 'Responded to alert about injured lion, provided medical treatment',
  },
];

const getStatusColor = (status: Ranger['status'] | Patrol['status']) => {
  switch (status) {
    case 'active':
      return 'bg-green-500 text-white';
    case 'off-duty':
      return 'bg-gray-500 text-white';
    case 'on-leave':
      return 'bg-amber-500 text-white';
    case 'completed':
      return 'bg-sky text-white';
    case 'scheduled':
      return 'bg-purple-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const Rangers = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Rangers</h1>
            <p className="text-muted-foreground">
              Manage rangers, patrols, and field operations
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-forest hover:bg-forest-dark">
              <Plus className="h-4 w-4 mr-2" />
              Add Ranger
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-forest" />
                Ranger Status
              </CardTitle>
              <CardDescription>Personnel overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-2">
                <div className="grid grid-cols-2 items-center">
                  <div>Active</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '71%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">5</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>Off-Duty</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-gray-500 h-full" style={{ width: '14%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">1</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>On Leave</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '14%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">1</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-3">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle>Active Patrols</CardTitle>
                  <CardDescription>Current field operations</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Patrol
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patrols.filter(p => p.status === 'active').map((patrol) => (
                  <div key={patrol.id} className="flex justify-between items-start p-3 border rounded-lg">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{patrol.rangerInitials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{patrol.rangerName}</h4>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{patrol.zone}</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{patrol.startTime} - {patrol.endTime}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(patrol.status)}>
                      {patrol.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-forest" />
                  Ranger Directory
                </CardTitle>
                <CardDescription>All personnel</CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search rangers..."
                  className="pl-8"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Rangers</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="offDuty">Off-Duty</TabsTrigger>
                <TabsTrigger value="onLeave">On Leave</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {rangers.map((ranger) => (
                    <Card key={ranger.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-4 border-b">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <Avatar>
                                {ranger.imageUrl && <AvatarImage src={ranger.imageUrl} />}
                                <AvatarFallback className="bg-forest text-white">{ranger.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-medium">{ranger.name}</h3>
                                <p className="text-sm text-muted-foreground">{ranger.role}</p>
                              </div>
                            </div>
                            <Badge className={getStatusColor(ranger.status)}>
                              {ranger.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm text-muted-foreground">Zone</p>
                              <p className="text-sm flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {ranger.zone}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Recent Activity</p>
                              <p className="text-sm">{ranger.recentActivity}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Contact</p>
                              <p className="text-sm">{ranger.contactInfo}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="active" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {rangers.filter(r => r.status === 'active').map((ranger) => (
                    <Card key={ranger.id} className="overflow-hidden">
                      {/* Card contents same as above */}
                      <CardContent className="p-0">
                        <div className="p-4 border-b">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <Avatar>
                                {ranger.imageUrl && <AvatarImage src={ranger.imageUrl} />}
                                <AvatarFallback className="bg-forest text-white">{ranger.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-medium">{ranger.name}</h3>
                                <p className="text-sm text-muted-foreground">{ranger.role}</p>
                              </div>
                            </div>
                            <Badge className={getStatusColor(ranger.status)}>
                              {ranger.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm text-muted-foreground">Zone</p>
                              <p className="text-sm flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {ranger.zone}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Recent Activity</p>
                              <p className="text-sm">{ranger.recentActivity}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Contact</p>
                              <p className="text-sm">{ranger.contactInfo}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Similar content for other tabs */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Rangers;
