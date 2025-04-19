
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Elephants', healthy: 108, injured: 12, sick: 4 },
  { name: 'Lions', healthy: 72, injured: 8, sick: 7 },
  { name: 'Rhinos', healthy: 36, injured: 4, sick: 2 },
  { name: 'Giraffes', healthy: 68, injured: 6, sick: 4 },
  { name: 'Zebras', healthy: 142, injured: 10, sick: 4 },
];

interface AnimalHealthStatusCardProps {
  className?: string;
}

export function AnimalHealthStatusCard({ className }: AnimalHealthStatusCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Health Status</CardTitle>
        <CardDescription>Current health conditions by species</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" scale="band" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="healthy" fill="#40916C" name="Healthy" />
              <Bar dataKey="injured" fill="#E9C46A" name="Injured" />
              <Bar dataKey="sick" fill="#E76F51" name="Sick" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
