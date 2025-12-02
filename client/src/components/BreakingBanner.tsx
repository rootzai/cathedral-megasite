import { AlertCircle } from "lucide-react";

export default function BreakingBanner() {
  const scrollToVaultOpens = () => {
    const element = document.querySelector("#act-viii");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 flex-wrap text-center">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-bold text-sm sm:text-base">BREAKING:</span>
            <span className="text-sm sm:text-base">
              Judge Orders Release of Latham Report & 20,500 Pages of Documents
            </span>
            <button
              onClick={scrollToVaultOpens}
              className="underline underline-offset-4 hover:no-underline text-sm sm:text-base font-medium"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
