import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export function ImageModal({ src, alt, className, caption }: ImageModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("relative group cursor-zoom-in overflow-hidden rounded-lg border border-border/50", className)}>
          <img 
            src={src} 
            alt={alt} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs text-white/90 font-mono text-center">{caption}</p>
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none overflow-hidden flex flex-col items-center justify-center">
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-auto h-auto max-w-full max-h-[90vh]">
          <img 
            src={src} 
            alt={alt} 
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl border border-border/20"
          />
          {caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <p className="text-sm text-white font-medium">{caption}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
