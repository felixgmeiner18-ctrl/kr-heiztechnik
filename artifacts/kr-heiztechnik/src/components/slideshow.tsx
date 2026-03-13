import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  label: string;
  alt: string;
}

interface SlideshowProps {
  slides: Slide[];
  autoPlayMs?: number;
  className?: string;
  imageClassName?: string;
}

export function Slideshow({ slides, autoPlayMs = 3500, className = "", imageClassName = "" }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
  }, [next, autoPlayMs, paused, slides.length]);

  if (slides.length === 0) return null;

  const slide = slides[current];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image */}
      <img
        key={current}
        src={slide.src}
        alt={slide.alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${imageClassName}`}
      />

      {/* Label */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-lg text-sm font-bold shadow-lg ${
          slide.label === "Nachher"
            ? "bg-primary text-white shadow-primary/30"
            : slide.label === "Vorher"
            ? "bg-black/60 backdrop-blur-sm text-white/90"
            : "bg-black/60 backdrop-blur-sm text-white/80"
        }`}>
          {slide.label}
        </span>
      </div>

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Voriges Bild"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-5" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
