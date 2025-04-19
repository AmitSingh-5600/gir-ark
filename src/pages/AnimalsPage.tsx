import React, { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Rabbit, Filter, Plus } from 'lucide-react';

interface Animal {
  id: string;
  name: string;
  species: string;
  trackerID: string;
  gender: string;
  age: string;
  health: 'healthy' | 'injured' | 'sick';
  location: string;
  lastSeen: string;
}

const animals: Animal[] = [
  { id: '1', name: 'Raja', species: 'Asiatic Lion', trackerID: 'AL-301', gender: 'Male', age: '8 years', health: 'healthy', location: 'Northeast Gir Waterhole', lastSeen: '10 minutes ago' },
  { id: '2', name: 'Rani', species: 'Asiatic Lion', trackerID: 'AL-241', gender: 'Female', age: '7 years', health: 'injured', location: 'Eastern Gir Boundary', lastSeen: '2 hours ago' },
  { id: '3', name: 'Spot', species: 'Leopard', trackerID: 'LP-108', gender: 'Male', age: '5 years', health: 'healthy', location: 'Southern Gir Grasslands', lastSeen: '45 minutes ago' },
  { id: '4', name: 'Bagheera', species: 'Indian Leopard', trackerID: 'LP-099', gender: 'Male', age: '6 years', health: 'healthy', location: 'Western Gir Forest', lastSeen: '30 minutes ago' },
  { id: '5', name: 'Kaalu', species: 'Sloth Bear', trackerID: 'SB-452', gender: 'Male', age: '5 years', health: 'healthy', location: 'Central Gir Plains', lastSeen: '15 minutes ago' },
  { id: '6', name: 'Tusker', species: 'Indian Elephant', trackerID: 'EL-287', gender: 'Male', age: '25 years', health: 'healthy', location: 'Northeast Gir Waterhole', lastSeen: '1 hour ago' },
  { id: '7', name: 'Shera', species: 'Asiatic Lion', trackerID: 'AL-143', gender: 'Male', age: '10 years', health: 'healthy', location: 'Pride Rock', lastSeen: '3 hours ago' },
  { id: '8', name: 'Cheetal', species: 'Spotted Deer', trackerID: 'SD-079', gender: 'Female', age: '3 years', health: 'sick', location: 'Grassland Meadow', lastSeen: '4 hours ago' },
];

const getHealthColor = (health: Animal['health']) => {
  switch (health) {
    case 'healthy':
      return 'bg-green-500 text-white';
    case 'injured':
      return 'bg-amber-500 text-white';
    case 'sick':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const AnimalsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAnimals = animals.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.trackerID.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Animals</h1>
            <p className="text-muted-foreground">
              Manage and track all animals in the Gir Forest sanctuary
            </p>
          </div>
          <Button className="bg-forest hover:bg-forest-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Animal
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, species, or ID..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Animals</TabsTrigger>
            <TabsTrigger value="lions">Asiatic Lions</TabsTrigger>
            <TabsTrigger value="leopards">Leopards</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAnimals.map((animal) => (
                <Card key={animal.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Rabbit className="h-5 w-5 text-forest" />
                          {animal.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{animal.species} · {animal.trackerID}</p>
                      </div>
                      <Badge className={getHealthColor(animal.health)}>
                        {animal.health}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Gender</p>
                        <p>{animal.gender}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Age</p>
                        <p>{animal.age}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">Last Location</p>
                        <p>{animal.location}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">Last Seen</p>
                        <p>{animal.lastSeen}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="lions" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAnimals
                .filter(animal => animal.species === 'Asiatic Lion')
                .map((animal) => (
                  <Card key={animal.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Rabbit className="h-5 w-5 text-forest" />
                            {animal.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{animal.species} · {animal.trackerID}</p>
                        </div>
                        <Badge className={getHealthColor(animal.health)}>
                          {animal.health}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Gender</p>
                          <p>{animal.gender}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Age</p>
                          <p>{animal.age}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Last Location</p>
                          <p>{animal.location}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Last Seen</p>
                          <p>{animal.lastSeen}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="leopards" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAnimals
                .filter(animal => animal.species.includes('Leopard'))
                .map((animal) => (
                  <Card key={animal.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Rabbit className="h-5 w-5 text-forest" />
                            {animal.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{animal.species} · {animal.trackerID}</p>
                        </div>
                        <Badge className={getHealthColor(animal.health)}>
                          {animal.health}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Gender</p>
                          <p>{animal.gender}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Age</p>
                          <p>{animal.age}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Last Location</p>
                          <p>{animal.location}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Last Seen</p>
                          <p>{animal.lastSeen}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="others" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAnimals
                .filter(animal => animal.species !== 'Asiatic Lion' && animal.species !== 'Leopard')
                .map((animal) => (
                  <Card key={animal.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Rabbit className="h-5 w-5 text-forest" />
                            {animal.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{animal.species} · {animal.trackerID}</p>
                        </div>
                        <Badge className={getHealthColor(animal.health)}>
                          {animal.health}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Gender</p>
                          <p>{animal.gender}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Age</p>
                          <p>{animal.age}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Last Location</p>
                          <p>{animal.location}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Last Seen</p>
                          <p>{animal.lastSeen}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AnimalsPage;
