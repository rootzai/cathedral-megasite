import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  decorative?: boolean;
}

export default function SectionHeader({ title, subtitle, className, decorative = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 relative", className)}>
      {decorative && (
        <div className="absolute -top-4 left-0 w-12 h-1 bg-accent" />
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
