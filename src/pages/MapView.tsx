
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rabbit, Mouse, Squirrel, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MapView = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Map View</h1>
          <p className="text-muted-foreground">
            Track the real-time location of animals in the Gir Forest sanctuary
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search locations or animals..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <Card className="h-[600px] overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Gir Forest Map</CardTitle>
                <CardDescription>Live animal locations and movement</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[520px] bg-forest-light/10 flex items-center justify-center">
                  <div className="text-center p-6 bg-white/60 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      I wii add an interactive map showing animal locations in Gir National Park.   
                    </p>
                  </div>
                  
                  {/* Example map markers */}
                  <div className="absolute top-1/4 left-1/4 bg-forest text-white p-1 rounded-full h-5 w-5 flex items-center justify-center" title="Lion #301">
                    <span className="sr-only">Lion</span>
                  </div>
                  
                  <div className="absolute top-1/3 right-1/3 bg-amber-500 text-white p-1 rounded-full h-5 w-5 flex items-center justify-center" title="Lion #241">
                    <span className="sr-only">Lion</span>
                  </div>
                  
                  <div className="absolute bottom-1/4 left-1/3 bg-slate-700 text-white p-1 rounded-full h-5 w-5 flex items-center justify-center" title="Leopard #108">
                    <span className="sr-only">Leopard</span>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/4 bg-sky text-white p-1 rounded-full h-5 w-5 flex items-center justify-center" title="Sloth Bear #099">
                    <span className="sr-only">Sloth Bear</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-[600px] overflow-auto">
              <CardHeader className="pb-2">
                <CardTitle>Tracked Animals</CardTitle>
                <CardDescription>Active trackers online: 356</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                    <TabsTrigger value="mammals" className="flex-1">Predators</TabsTrigger>
                    <TabsTrigger value="birds" className="flex-1">Prey</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-4 space-y-4">
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-green-100 rounded-full">
                          <Rabbit className="h-4 w-4 text-forest" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Asiatic Lion #301</h4>
                          <p className="text-xs text-muted-foreground">Northeast Gir Waterhole</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between bg-amber-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-amber-100 rounded-full">
                          <Mouse className="h-4 w-4 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Asiatic Lion #241</h4>
                          <p className="text-xs text-muted-foreground">Eastern Gir Boundary</p>
                        </div>
                      </div>
                      <Badge className="bg-amber-500">Warning</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-slate-100 rounded-full">
                          <Squirrel className="h-4 w-4 text-slate-700" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Indian Leopard #108</h4>
                          <p className="text-xs text-muted-foreground">Southern Gir Grasslands</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between bg-sky-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-sky-100 rounded-full">
                          <Rabbit className="h-4 w-4 text-sky" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Sloth Bear #099</h4>
                          <p className="text-xs text-muted-foreground">Western Gir Forest</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-green-100 rounded-full">
                          <Rabbit className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Spotted Deer #452</h4>
                          <p className="text-xs text-muted-foreground">Central Gir Plains</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Online</Badge>
                    </div>
                    
                    {/* More animal entries would go here */}
                  </TabsContent>
                  
                  <TabsContent value="mammals" className="mt-4">
                    {/* Content for mammals tab */}
                  </TabsContent>
                  
                  <TabsContent value="birds" className="mt-4">
                    {/* Content for birds tab */}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MapView;
