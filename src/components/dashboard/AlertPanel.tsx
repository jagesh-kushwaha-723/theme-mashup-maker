import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Settings } from "lucide-react";

interface Alert {
  id: string;
  sensor: string;
  message: string;
  zone: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

interface AlertPanelProps {
  alerts: Alert[];
  selectedZone: string;
  onZoneChange: (zone: string) => void;
  onRefresh: () => void;
}

export const AlertPanel = ({ alerts, selectedZone, onZoneChange, onRefresh }: AlertPanelProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="bg-gradient-card border-border shadow-elegant">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
            Active Alerts
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onRefresh}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Refresh
            </Button>
            <div className="text-sm text-muted-foreground">Auto-refresh every 30s</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-muted-foreground">Zone-Sensor:</label>
            <Select value={selectedZone} onValueChange={onZoneChange}>
              <SelectTrigger className="w-[200px] bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food | j102">food | j102</SelectItem>
                <SelectItem value="medicines | j101">medicines | j101</SelectItem>
                <SelectItem value="room temp | j104">room temp | j104</SelectItem>
                <SelectItem value="soft drink | j103">soft drink | j103</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-4 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-smooth"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Badge className={getSeverityColor(alert.severity)} variant="secondary">
                  {alert.severity.toUpperCase()}
                </Badge>
                <span className="font-medium text-foreground">Sensor: {alert.sensor}</span>
                <Badge variant="outline" className="border-primary text-primary">
                  Operator
                </Badge>
              </div>
            </div>
            <p className="text-foreground mb-2">{alert.message}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Zone: {alert.zone}</span>
              <span>Time: {alert.time}</span>
            </div>
            <div className="mt-3">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
              >
                Acknowledge
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};