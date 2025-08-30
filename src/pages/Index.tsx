import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatusSummary } from "@/components/dashboard/StatusSummary";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { AlertPanel } from "@/components/dashboard/AlertPanel";

const Index = () => {
  const [selectedZone, setSelectedZone] = useState("food | j102");
  
  // Mock data - in a real app, this would come from an API
  const sensorData = [
    {
      id: "j101",
      temperature: 4.0,
      humidity: 4.0,
      zone: "medicines",
      status: 'active' as const,
      lastUpdate: "1:13:33 AM"
    },
    {
      id: "j102", 
      temperature: 99.5,
      humidity: 99.5,
      zone: "food",
      status: 'warning' as const,
      lastUpdate: "1:13:24 AM"
    },
    {
      id: "j103",
      temperature: 0,
      humidity: 0,
      zone: "soft drink",
      status: 'inactive' as const,
      lastUpdate: "No recent data"
    },
    {
      id: "j104",
      temperature: 0,
      humidity: 0,
      zone: "room temp",
      status: 'inactive' as const,
      lastUpdate: "No recent data"
    }
  ];

  const alerts = [
    {
      id: "1",
      sensor: "j102",
      message: "Initial breach detected. Value: 99.22",
      zone: "food",
      time: "8/31/2025, 1:36:00 AM",
      severity: 'high' as const
    },
    {
      id: "2", 
      sensor: "j102",
      message: "Initial breach detected. Value: 99.42",
      zone: "food",
      time: "8/31/2025, 1:35:00 AM",
      severity: 'high' as const
    }
  ];

  const activeSensors = sensorData.filter(sensor => sensor.temperature > 0).length;
  const averageTemp = sensorData.reduce((sum, sensor) => sum + sensor.temperature, 0) / sensorData.filter(sensor => sensor.temperature > 0).length || 0;

  const handleRefresh = () => {
    // In a real app, this would refresh the data
    console.log("Refreshing data...");
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <DashboardHeader userName="jagesh" userRole="Admin" />
      
      <div className="p-6 space-y-6">
        <StatusSummary 
          totalSensors={sensorData.length}
          activeSensors={activeSensors}
          averageTemp={averageTemp}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sensorData.map((sensor) => (
                <SensorCard key={sensor.id} sensor={sensor} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <AlertPanel 
              alerts={alerts}
              selectedZone={selectedZone}
              onZoneChange={setSelectedZone}
              onRefresh={handleRefresh}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
