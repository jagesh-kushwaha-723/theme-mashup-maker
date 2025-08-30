import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  userName: string;
  userRole: string;
}

export const DashboardHeader = ({ userName, userRole }: DashboardHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-6 bg-gradient-dark border-b border-border">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Warehouse Dashboard
        </h1>
        <div className="text-muted-foreground">
          Welcome, <span className="text-foreground font-medium">{userName}</span> ({userRole})
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
          Admin Panel
        </Button>
        <Button variant="destructive" className="hover:scale-105 transition-bounce">
          Logout
        </Button>
      </div>
    </header>
  );
};