import {
  HERO_DISCOVER_CATEGORIES,
  HERO_TRUST_POINTS,
} from "@/lib/blog-data";
import { HeroAnimated } from "@/components/home/hero-animated";

export function Hero() {
  return (
    <HeroAnimated
      trustPoints={HERO_TRUST_POINTS}
      categories={HERO_DISCOVER_CATEGORIES}
    />
  );
}
