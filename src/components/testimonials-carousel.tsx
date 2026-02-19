"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    image?: string | null;
    rating: number;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 md:pl-8 py-4">
                        <Card className="h-full glass-card border-border hover:border-foreground/10 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <CardContent className="p-8 flex flex-col h-full relative overflow-hidden">
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-foreground/5 opacity-10" />

                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "w-4 h-4",
                                                i < testimonial.rating ? "fill-brand-gold text-brand-gold" : "text-muted-foreground"
                                            )}
                                        />
                                    ))}
                                </div>

                                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border border-border">
                                        {testimonial.image ? (
                                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-brand-navy text-white font-bold">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
