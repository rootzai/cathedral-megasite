import { Separator } from "@/components/ui/separator";

interface PageHeroProps {
  sectionNumber: string;
  title: string;
  subtitle?: string;
  titleHighlight?: string;
  children?: React.ReactNode;
}

export function PageHero({ sectionNumber, title, subtitle, titleHighlight, children }: PageHeroProps) {
  return (
    <section className="relative border-b border-border pb-16">
      <div className="w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
            SECTION {sectionNumber}
          </div>
          <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
            {title} {titleHighlight && <span className="text-destructive">{titleHighlight}</span>}
          </h1>
          {subtitle && (
            <p className="font-serif italic text-2xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
