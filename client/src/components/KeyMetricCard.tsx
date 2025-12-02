import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

interface KeyMetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  description?: string;
  className?: string;
  highlight?: boolean;
}

export default function KeyMetricCard({ 
  title, 
  value, 
  change, 
  trend, 
  description, 
  className,
  highlight = false
}: KeyMetricCardProps) {
  return (
    <Card className={cn(
      "border-l-4 shadow-sm transition-all duration-200 hover:shadow-md", 
      highlight ? "border-l-accent bg-accent/5" : "border-l-primary/20",
      className
    )}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-serif font-bold text-primary">
            {value}
          </div>
          {change && (
            <div className={cn(
              "flex items-center text-sm font-medium px-2 py-0.5 rounded-full",
              trend === "up" ? "text-emerald-700 bg-emerald-50" : 
              trend === "down" ? "text-rose-700 bg-rose-50" : 
              "text-slate-600 bg-slate-100"
            )}>
              {trend === "up" && <ArrowUpRight className="w-3 h-3 mr-1" />}
              {trend === "down" && <ArrowDownRight className="w-3 h-3 mr-1" />}
              {trend === "neutral" && <Minus className="w-3 h-3 mr-1" />}
              {change}
            </div>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed border-t border-border/50 pt-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
