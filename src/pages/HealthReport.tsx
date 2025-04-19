import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Calendar, Download, Heart, Plus, Syringe, Thermometer } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const treatmentData = [
  { month: 'Jan', treatments: 12 },
  { month: 'Feb', treatments: 8 },
  { month: 'Mar', treatments: 15 },
  { month: 'Apr', treatments: 10 },
  { month: 'May', treatments: 22 },
  { month: 'Jun', treatments: 18 },
];

const healthTrends = [
  { month: 'Jan', healthy: 380, injured: 25, sick: 15 },
  { month: 'Feb', healthy: 385, injured: 22, sick: 18 },
  { month: 'Mar', healthy: 395, injured: 20, sick: 12 },
  { month: 'Apr', healthy: 400, injured: 18, sick: 14 },
  { month: 'May', healthy: 410, injured: 19, sick: 11 },
  { month: 'Jun', healthy: 415, injured: 15, sick: 10 },
];

interface MedicalRecord {
  id: string;
  animalName: string;
  animalID: string;
  species: string;
  date: string;
  treatment: string;
  diagnosis: string;
  vet: string;
  status: 'completed' | 'scheduled' | 'ongoing';
}

const medicalRecords: MedicalRecord[] = [
  { 
    id: '1', 
    animalName: 'Leo', 
    animalID: 'LN-241', 
    species: 'Lion',
    date: '2025-04-10', 
    treatment: 'Leg injury treatment - wound cleaning and antibiotics',
    diagnosis: 'Deep laceration on right hind leg',
    vet: 'Dr. Garcia',
    status: 'ongoing'
  },
  { 
    id: '2', 
    animalName: 'Bruce', 
    animalID: 'RH-079', 
    species: 'Rhino',
    date: '2025-04-09', 
    treatment: 'Antibiotic treatment - respiratory infection',
    diagnosis: 'Bacterial pneumonia - moderate severity',
    vet: 'Dr. Patel',
    status: 'ongoing'
  },
  { 
    id: '3', 
    animalName: 'Ellie', 
    animalID: 'EL-301', 
    species: 'Elephant',
    date: '2025-04-08', 
    treatment: 'Routine health checkup - blood work and parasite screening',
    diagnosis: 'Healthy - no issues detected',
    vet: 'Dr. Johnson',
    status: 'completed'
  },
  { 
    id: '4', 
    animalName: 'Rhonda', 
    animalID: 'RH-108', 
    species: 'Rhino',
    date: '2025-04-12', 
    treatment: 'Annual vaccination and health assessment',
    diagnosis: 'Pending examination',
    vet: 'Dr. Garcia',
    status: 'scheduled'
  },
  { 
    id: '5', 
    animalName: 'Simba', 
    animalID: 'LN-143', 
    species: 'Lion',
    date: '2025-04-05', 
    treatment: 'Dental examination and cleaning',
    diagnosis: 'Mild dental decay - treated',
    vet: 'Dr. Patel',
    status: 'completed'
  },
];

const getStatusColor = (status: MedicalRecord['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500 text-white';
    case 'scheduled':
      return 'bg-sky text-white';
    case 'ongoing':
      return 'bg-amber-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const HealthReport = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Health Reports</h1>
            <p className="text-muted-foreground">
              Monitor animal health status and medical treatments
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-forest hover:bg-forest-dark">
              <Plus className="h-4 w-4 mr-2" />
              New Treatment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-red-500" />
                Health Status
              </CardTitle>
              <CardDescription>Current health overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-2">
                <div className="grid grid-cols-2 items-center">
                  <div>Healthy</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">415</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>Injured</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">15</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div>Sick</div>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: '10%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">10</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-sky" />
                Treatment Summary
              </CardTitle>
              <CardDescription>Last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={treatmentData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="month" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Bar dataKey="treatments" fill="#40916C" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Upcoming Treatments
              </CardTitle>
              <CardDescription>Next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex justify-between items-center bg-sky/10 p-3 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Rhino #108 - Rhonda</h4>
                    <p className="text-xs text-muted-foreground">Annual vaccination</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs">Apr 12</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-green-100/50 p-3 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Elephant #287 - Tusker</h4>
                    <p className="text-xs text-muted-foreground">Routine checkup</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs">Apr 15</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-amber-100/50 p-3 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Lion #241 - Leo</h4>
                    <p className="text-xs text-muted-foreground">Injury follow-up</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs">Apr 17</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Health Trends</CardTitle>
            <CardDescription>6-month animal health status distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthTrends}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Line type="monotone" dataKey="healthy" stroke="#40916C" name="Healthy" />
                  <Line type="monotone" dataKey="injured" stroke="#E9C46A" name="Injured" />
                  <Line type="monotone" dataKey="sick" stroke="#E76F51" name="Sick" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Syringe className="h-5 w-5 text-sky" />
              Medical Records
            </CardTitle>
            <CardDescription>Recent and upcoming treatments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="flex justify-between items-start p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{record.animalName}</h3>
                          <p className="text-sm text-muted-foreground">{record.animalID} · {record.species}</p>
                        </div>
                        <p className="text-sm mt-1">{record.treatment}</p>
                        <div className="text-sm text-muted-foreground mt-2">
                          <p>Diagnosis: {record.diagnosis}</p>
                          <p>Veterinarian: {record.vet}</p>
                          <p>Date: {record.date}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ongoing" className="mt-4">
                <div className="space-y-4">
                  {medicalRecords
                    .filter(record => record.status === 'ongoing')
                    .map((record) => (
                      <div key={record.id} className="flex justify-between items-start p-4 border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{record.animalName}</h3>
                            <p className="text-sm text-muted-foreground">{record.animalID} · {record.species}</p>
                          </div>
                          <p className="text-sm mt-1">{record.treatment}</p>
                          <div className="text-sm text-muted-foreground mt-2">
                            <p>Diagnosis: {record.diagnosis}</p>
                            <p>Veterinarian: {record.vet}</p>
                            <p>Date: {record.date}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="completed" className="mt-4">
                <div className="space-y-4">
                  {medicalRecords
                    .filter(record => record.status === 'completed')
                    .map((record) => (
                      <div key={record.id} className="flex justify-between items-start p-4 border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{record.animalName}</h3>
                            <p className="text-sm text-muted-foreground">{record.animalID} · {record.species}</p>
                          </div>
                          <p className="text-sm mt-1">{record.treatment}</p>
                          <div className="text-sm text-muted-foreground mt-2">
                            <p>Diagnosis: {record.diagnosis}</p>
                            <p>Veterinarian: {record.vet}</p>
                            <p>Date: {record.date}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="scheduled" className="mt-4">
                <div className="space-y-4">
                  {medicalRecords
                    .filter(record => record.status === 'scheduled')
                    .map((record) => (
                      <div key={record.id} className="flex justify-between items-start p-4 border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{record.animalName}</h3>
                            <p className="text-sm text-muted-foreground">{record.animalID} · {record.species}</p>
                          </div>
                          <p className="text-sm mt-1">{record.treatment}</p>
                          <div className="text-sm text-muted-foreground mt-2">
                            <p>Diagnosis: {record.diagnosis}</p>
                            <p>Veterinarian: {record.vet}</p>
                            <p>Date: {record.date}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default HealthReport;
