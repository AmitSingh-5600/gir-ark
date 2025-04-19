
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Elephants', value: 124, color: '#40916C' },
  { name: 'Lions', value: 87, color: '#E9C46A' },
  { name: 'Rhinos', value: 42, color: '#A98467' },
  { name: 'Giraffes', value: 78, color: '#E76F51' },
  { name: 'Zebras', value: 156, color: '#52B69A' },
];

interface SpeciesDistributionCardProps {
  className?: string;
}

export function SpeciesDistributionCard({ className }: SpeciesDistributionCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Species Distribution</CardTitle>
        <CardDescription>Animal population by species</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} animals`, 'Population']}
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value) => <span className="text-xs">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
