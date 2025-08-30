import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SensorData {
  id: string;
  temperature: number;
  humidity: number;
  zone: string;
  status: 'active' | 'inactive' | 'warning';
  lastUpdate: string;
}

interface SensorCardProps {
  sensor: SensorData;
}

export const SensorCard = ({ sensor }: SensorCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success text-success-foreground';
      case 'warning':
        return 'bg-warning text-warning-foreground';
      case 'inactive':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const hasData = sensor.temperature > 0;

  return (
    <Card className="bg-gradient-card border-border shadow-elegant hover:shadow-glow transition-smooth group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-primary">{sensor.id}</CardTitle>
          <Badge className={getStatusColor(sensor.status)} variant="secondary">
            {sensor.zone}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasData ? (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-smooth">
                {sensor.temperature.toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">°C</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-smooth">
                {sensor.humidity.toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">%</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-muted-foreground">
                {((sensor.temperature + sensor.humidity) / 2).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">%</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl font-light text-muted-foreground mb-2">— — —</div>
            <div className="text-sm text-muted-foreground">No recent data</div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground">{sensor.lastUpdate}</div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary hover:text-primary-foreground hover:bg-primary transition-smooth"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};