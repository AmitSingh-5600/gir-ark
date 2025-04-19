
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivityCard } from '@/components/dashboard/RecentActivityCard';
import { SpeciesDistributionCard } from '@/components/dashboard/SpeciesDistributionCard';
import { AnimalHealthStatusCard } from '@/components/dashboard/AnimalHealthStatusCard';
import { AlertsCard } from '@/components/dashboard/AlertsCard';
import { Rabbit, MapPin, Activity, Bell, Locate } from 'lucide-react';

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Ranger Wilson. Here's what's happening in the sanctuary today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Total Animals" 
            value="487"
            description="Protected wildlife in sanctuary" 
            icon={Rabbit}
            iconColor="text-forest"
            trend={{ value: 4.5, isPositive: true }}
          />
          <StatsCard 
            title="Active Trackers" 
            value="356"
            description="GPS collars and RFID tags" 
            icon={Locate}
            iconColor="text-sky"
            trend={{ value: 2.1, isPositive: true }}
          />
          <StatsCard 
            title="Health Incidents" 
            value="18"
            description="Animals requiring attention" 
            icon={Activity}
            iconColor="text-alert"
            trend={{ value: 12, isPositive: false }}
          />
          <StatsCard 
            title="Active Alerts" 
            value="7"
            description="High priority situations" 
            icon={Bell}
            iconColor="text-amber-500"
            trend={{ value: 3, isPositive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <RecentActivityCard className="lg:col-span-2" />
          <AlertsCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SpeciesDistributionCard />
          <AnimalHealthStatusCard />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
