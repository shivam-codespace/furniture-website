import { ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/features/product/data/productDetail";

interface TestimonialsSectionProps {
  rating: number;
  reviewCount: number;
}

export function TestimonialsSection({ rating, reviewCount }: TestimonialsSectionProps) {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="container-luxury flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-dark/30">07</span>
          <h2 className="font-heading text-2xl leading-snug text-dark sm:text-3xl">
            Loved by 5000+ Families
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col gap-4 rounded-2xl border border-dark/8 p-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-dark/70">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
                  {t.name.charAt(0)}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium text-dark">{t.name}</span>
                  <span className="text-xs text-dark/45">{t.location}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-start justify-center gap-3 rounded-2xl bg-primary-50 p-5">
            <span className="font-heading text-4xl font-semibold text-dark">{rating}</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-gold text-gold" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xs text-dark/50">({reviewCount} Reviews)</span>
            <button className="group mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-dark hover:text-primary">
              View All Reviews
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
