'use client';

import { testimonials } from '@testimonial-constants/testimonials';
import { TestimonialsGrid } from '@testimonial-components/ui/TestinonialCard';

export default function Testimonials() {
  return (
    <section className="w-full pt-8 pb-20 px-2 lg:px-12">
      {/* Grid */}
      <TestimonialsGrid testimonials={testimonials} />
    </section>
  );
}
