import { cn } from "@/lib/utils";

interface DarkGradientOverlayProps {
  children: React.ReactNode;
  className?: string;
  direction?: "to-t" | "to-b" | "to-l" | "to-r";
}

/**
 * Enforces text-white on children rendered over a dark gradient overlay.
 * Use this instead of manually combining bg-gradient + text color classes 
 * to prevent dark-on-dark contrast bugs.
 */
export function DarkGradientOverlay({ 
  children, 
  className,
  direction = "to-t" 
}: DarkGradientOverlayProps) {
  const gradientClass = `bg-gradient-${direction}`;
  return (
    <div className={cn(
      "absolute inset-0",
      gradientClass,
      "from-black via-transparent to-transparent"
    )} />
  );
}

export function DarkGradientCaption({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn("absolute bottom-0 left-0 p-6 text-white", className)}>
      {children}
    </div>
  );
}
