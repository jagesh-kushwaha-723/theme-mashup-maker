import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatusSummaryProps {
  totalSensors: number;
  activeSensors: number;
  averageTemp: number;
}

export const StatusSummary = ({ totalSensors, activeSensors, averageTemp }: StatusSummaryProps) => {
  return (
    <Card className="bg-gradient-card border-border shadow-elegant">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
          Live Sensor Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">{totalSensors}</div>
            <div className="text-sm text-muted-foreground">Sensors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-1">{activeSensors}</div>
            <div className="text-sm text-muted-foreground">With Data</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-1">
              {averageTemp.toFixed(1)} <span className="text-2xl text-muted-foreground">°C</span>
            </div>
            <div className="text-sm text-muted-foreground">Avg Temp (shown)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};