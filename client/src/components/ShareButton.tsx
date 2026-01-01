import { Button } from "@/components/ui/button";
import { Share2, Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function ShareButton({ 
  title = document.title, 
  text = "Check out this investigation.", 
  url = window.location.href,
  className,
  variant = "outline"
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title,
      text,
      url,
    };

    // Try Web Share API first
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        console.log("Share failed or cancelled, falling back to clipboard", err);
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <Button 
      variant={variant} 
      size="sm" 
      className={`font-mono text-xs uppercase tracking-wider gap-2 ${className}`}
      onClick={handleShare}
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      {copied ? "Copied" : "Share Chapter"}
    </Button>
  );
}
