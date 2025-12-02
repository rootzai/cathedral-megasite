import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export function ScreamToggle() {
  const [isScreamMode, setIsScreamMode] = useState(false);

  useEffect(() => {
    if (isScreamMode) {
      document.body.classList.add("scream-mode");
    } else {
      document.body.classList.remove("scream-mode");
    }
  }, [isScreamMode]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsScreamMode(!isScreamMode)}
        className={`rounded-full w-12 h-12 border-2 transition-all duration-500 ${
          isScreamMode
            ? "bg-primary text-primary-foreground border-primary animate-pulse shadow-[0_0_20px_var(--primary)]"
            : "bg-background/80 text-muted-foreground border-muted-foreground/50 hover:border-primary hover:text-primary"
        }`}
        title={isScreamMode ? "Disable Scream Mode" : "Enable Scream Mode"}
      >
        {isScreamMode ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
      </Button>
    </div>
  );
}
