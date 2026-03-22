import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
  decorative?: boolean;
}

export default function SectionHeader({ number, title, subtitle, className, decorative = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 relative", className)}>
      {decorative && (
        <div className="absolute -top-4 left-0 w-12 h-1 bg-accent" />
      )}
      <div className="flex items-baseline gap-4">
        {number && (
          <span className="text-4xl md:text-5xl font-mono text-primary/20 select-none">
            {number}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-tight mb-3">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
