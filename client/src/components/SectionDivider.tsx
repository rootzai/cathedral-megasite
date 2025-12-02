import { Dagger } from "@/components/BoschSymbols";

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 opacity-20">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-foreground/50"></div>
      <Dagger className="w-6 h-12 mx-4 text-primary" opacity={1} />
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-foreground/50"></div>
    </div>
  );
}
