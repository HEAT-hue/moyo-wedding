import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import ViewMap from "@/components/ViewMap";

export default function Home() {
  return (
    <div>

      {/* HERO COMPONENT */}
      <HeroSection />

      {/* VIEW MAP */}
      <ViewMap />

      {/* Image Gallery Slider */}
      <ImageSlider />
    </div>
  );
}
