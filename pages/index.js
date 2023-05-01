import FeaturedProducts from "./Components/FeaturedProducts";
import Hero from "./Components/Hero";
import OurStory from "./Components/OurStory";
import ProductCarousel from "./Components/ProductCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <ProductCarousel />
      <FeaturedProducts />
    </>
  );
}
