import { ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/features/product/data/productDetail";

interface TestimonialsSectionProps {
  rating: number;
  reviewCount: number;
}

export function TestimonialsSection({ rating, reviewCount }: TestimonialsSectionProps) {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container-luxury flex flex-col gap-5 sm:gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold text-dark/30 sm:text-xs">07</span>
          <h2 className="font-heading text-xl leading-snug text-dark sm:text-2xl lg:text-3xl">
            Loved by 5000+ Families
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col gap-3 rounded-xl border border-dark/8 p-4 sm:gap-4 sm:rounded-2xl sm:p-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-3 fill-gold text-gold sm:size-3.5" strokeWidth={0} />
                ))}
              </div>
              <p className="flex-1 text-xs leading-relaxed text-dark/70 sm:text-sm">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-[11px] font-semibold text-primary-700 sm:size-9 sm:text-xs">
                  {t.name.charAt(0)}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-medium text-dark sm:text-sm">{t.name}</span>
                  <span className="text-[10px] text-dark/45 sm:text-xs">{t.location}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-start justify-center gap-2 rounded-xl bg-primary-50 p-4 sm:gap-3 sm:rounded-2xl sm:p-5">
            <span className="font-heading text-3xl font-semibold text-dark sm:text-4xl">{rating}</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-gold text-gold sm:size-3.5" strokeWidth={0} />
              ))}
            </div>
            <span className="text-[10px] text-dark/50 sm:text-xs">({reviewCount} Reviews)</span>
            <button className="group mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold text-dark hover:text-primary sm:text-xs">
              View All Reviews
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1 sm:size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
