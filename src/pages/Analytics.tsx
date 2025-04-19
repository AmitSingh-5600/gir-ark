
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, LineChart as LineChartIcon, BarChart as BarChartIcon, Download, PieChart as PieChartIcon } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area
} from 'recharts';

const populationTrends = [
  { year: '2020', elephants: 98, lions: 64, rhinos: 32, giraffes: 45, zebras: 120 },
  { year: '2021', elephants: 105, lions: 69, rhinos: 35, giraffes: 52, zebras: 128 },
  { year: '2022', elephants: 110, lions: 72, rhinos: 38, giraffes: 58, zebras: 132 },
  { year: '2023', elephants: 115, lions: 78, rhinos: 36, giraffes: 63, zebras: 137 },
  { year: '2024', elephants: 120, lions: 83, rhinos: 40, giraffes: 72, zebras: 145 },
  { year: '2025', elephants: 124, lions: 87, rhinos: 42, giraffes: 78, zebras: 156 },
];

const birthData = [
  { month: 'Jan', births: 3 },
  { month: 'Feb', births: 2 },
  { month: 'Mar', births: 5 },
  { month: 'Apr', births: 8 },
  { month: 'May', births: 12 },
  { month: 'Jun', births: 10 },
  { month: 'Jul', births: 7 },
  { month: 'Aug', births: 5 },
  { month: 'Sep', births: 4 },
  { month: 'Oct', births: 6 },
  { month: 'Nov', births: 3 },
  { month: 'Dec', births: 4 },
];

const genderDistribution = [
  { name: 'Male', value: 210, color: '#40916C' },
  { name: 'Female', value: 277, color: '#E76F51' },
];

const ageData = [
  { name: 'Juvenile (0-2)', value: 87 },
  { name: 'Young (3-5)', value: 125 },
  { name: 'Adult (6-15)', value: 205 },
  { name: 'Senior (16+)', value: 70 },
];

const migrationPatterns = [
  { month: 'Jan', north: 220, south: 180, east: 40, west: 47 },
  { month: 'Feb', north: 240, south: 185, east: 38, west: 44 },
  { month: 'Mar', north: 280, south: 160, east: 35, west: 32 },
  { month: 'Apr', north: 310, south: 135, east: 28, west: 34 },
  { month: 'May', north: 340, south: 100, east: 32, west: 35 },
  { month: 'Jun', north: 370, south: 85, east: 22, west: 30 },
  { month: 'Jul', north: 390, south: 70, east: 17, west: 30 },
  { month: 'Aug', north: 360, south: 90, east: 28, west: 29 },
  { month: 'Sep', north: 320, south: 130, east: 26, west: 31 },
  { month: 'Oct', north: 290, south: 155, east: 32, west: 30 },
  { month: 'Nov', north: 260, south: 170, east: 35, west: 42 },
  { month: 'Dec', north: 240, south: 175, east: 38, west: 44 },
];

const Analytics = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Detailed insights on wildlife population and behavior
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="population">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="population">Population</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="migration">Migration</TabsTrigger>
            <TabsTrigger value="breeding">Breeding</TabsTrigger>
          </TabsList>
          
          <TabsContent value="population" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChartIcon className="h-5 w-5 text-forest" />
                  Population Trends
                </CardTitle>
                <CardDescription>5-year species population growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={populationTrends}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="elephants" stroke="#40916C" name="Elephants" />
                      <Line type="monotone" dataKey="lions" stroke="#E9C46A" name="Lions" />
                      <Line type="monotone" dataKey="rhinos" stroke="#A98467" name="Rhinos" />
                      <Line type="monotone" dataKey="giraffes" stroke="#E76F51" name="Giraffes" />
                      <Line type="monotone" dataKey="zebras" stroke="#52B69A" name="Zebras" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Population</CardTitle>
                  <CardDescription>Current animal count: 487</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Elephants', value: 124, color: '#40916C' },
                            { name: 'Lions', value: 87, color: '#E9C46A' },
                            { name: 'Rhinos', value: 42, color: '#A98467' },
                            { name: 'Giraffes', value: 78, color: '#E76F51' },
                            { name: 'Zebras', value: 156, color: '#52B69A' },
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {populationTrends[5] && Object.entries(populationTrends[5])
                            .filter(([key]) => key !== 'year')
                            .map(([key, value], index) => (
                              <Cell key={`cell-${index}`} fill={
                                key === 'elephants' ? '#40916C' :
                                key === 'lions' ? '#E9C46A' :
                                key === 'rhinos' ? '#A98467' :
                                key === 'giraffes' ? '#E76F51' :
                                '#52B69A'
                              } />
                            ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value} animals`, 'Population']}
                          contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Annual Growth Rate</CardTitle>
                  <CardDescription>Year-over-year population change</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={populationTrends}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                        <Legend />
                        <Bar dataKey="elephants" name="Elephants" fill="#40916C" />
                        <Bar dataKey="lions" name="Lions" fill="#E9C46A" />
                        <Bar dataKey="rhinos" name="Rhinos" fill="#A98467" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="demographics" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gender Distribution</CardTitle>
                  <CardDescription>Male vs Female ratio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={genderDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {genderDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value} animals`, 'Count']}
                          contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                  <CardDescription>Population by age groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ageData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                        <Bar dataKey="value" name="Animals" fill="#40916C" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="migration" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Migration Patterns</CardTitle>
                <CardDescription>Seasonal movement across sanctuary regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={migrationPatterns}>
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
                      <Legend />
                      <Area type="monotone" dataKey="north" stackId="1" stroke="#40916C" fill="#40916C" name="North Region" />
                      <Area type="monotone" dataKey="south" stackId="1" stroke="#E76F51" fill="#E76F51" name="South Region" />
                      <Area type="monotone" dataKey="east" stackId="1" stroke="#E9C46A" fill="#E9C46A" name="East Region" />
                      <Area type="monotone" dataKey="west" stackId="1" stroke="#52B69A" fill="#52B69A" name="West Region" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="breeding" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Birth Rate</CardTitle>
                <CardDescription>New births recorded in the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={birthData}>
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
                      <Bar dataKey="births" name="Births" fill="#40916C" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Analytics;
