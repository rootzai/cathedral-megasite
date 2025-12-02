import { cn } from "@/lib/utils";

interface RedactedTextProps {
  children: React.ReactNode;
  className?: string;
  reveal?: boolean;
}

export default function RedactedText({ children, className, reveal = true }: RedactedTextProps) {
  return (
    <span 
      className={cn(
        "relative inline-block px-1 mx-0.5 bg-black text-white transition-all duration-700 ease-in-out cursor-help group",
        reveal ? "hover:bg-transparent hover:text-black hover:line-through decoration-destructive decoration-4" : "",
        className
      )}
    >
      <span className={cn(
        "relative z-10",
        reveal ? "group-hover:text-foreground" : "text-transparent select-none"
      )}>
        {children}
      </span>
      {reveal && (
        <span className="absolute inset-0 bg-black group-hover:w-0 transition-all duration-500 ease-out" />
      )}
    </span>
  );
}
