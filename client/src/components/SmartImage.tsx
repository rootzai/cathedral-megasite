import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    priority?: boolean;
}

export function SmartImage({
    src,
    alt,
    className,
    priority = false,
    ...props
}: SmartImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={cn("relative overflow-hidden bg-muted/20 flex items-center justify-center", className)}>
            {!isLoaded && !error && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin text-muted-foreground/50" />
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground bg-destructive/10">
                    Image unavailable
                </div>
            )}
            <img
                src={src}
                alt={alt || "Image"}
                loading={priority ? "eager" : "lazy"}
                decoding={priority ? "sync" : "async"}
                onLoad={() => setIsLoaded(true)}
                onError={() => setError(true)}
                className={cn(
                    "w-full h-full object-cover transition-opacity duration-300",
                    className,
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                {...props}
            />
        </div>
    );
}
