"use client";
import Color from "color-thief-react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface LazyColorThiefProps {
  src: string;
  format?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  children: (props: {
    data: string;
    loading: boolean;
    error: Error | null;
  }) => ReactNode;
  fallbackColor?: string;
}

export function LazyColorThief({
  src,
  format = "rgbString",
  crossOrigin = "anonymous",
  children,
  fallbackColor = "rgba(0, 0, 0, 0.1)",
}: LazyColorThiefProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before visible
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  if (!isVisible) {
    return (
      <div ref={containerRef} style={{ minHeight: "1px" }}>
        {children({ data: fallbackColor, loading: true, error: null })}
      </div>
    );
  }

  return (
    <Color src={src} format={format as any} crossOrigin={crossOrigin}>
      {children as any}
    </Color>
  );
}

