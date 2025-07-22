import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { Testimonials } from '@/components/sections/Testimonials';
import { Newsletter } from '@/components/sections/Newsletter';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </div>
  );
}