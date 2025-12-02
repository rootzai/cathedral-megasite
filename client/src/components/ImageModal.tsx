import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Share2, X, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  children: React.ReactNode;
}

export default function ImageModal({ src, alt, title, caption, children }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop() || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const text = `Check out this image from the Seton Hall Endgame dossier: ${title || alt}`;
    
    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="cursor-zoom-in">
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <Button variant="ghost" size="icon" onClick={handleDownload} className="text-white hover:bg-white/20">
            <Download className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleShare('twitter')} className="text-white hover:bg-white/20">
            <Twitter className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleShare('linkedin')} className="text-white hover:bg-white/20">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
        </div>

        {(title || caption) && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              {title && <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>}
              {caption && <p className="text-gray-300 font-serif italic">{caption}</p>}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
