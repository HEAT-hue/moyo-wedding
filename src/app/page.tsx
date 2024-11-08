import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import ViewMap from "@/components/ViewMap";
import Registry from "@/components/Registry";
import ImageGrid from "@/components/GridGallery";
import { gridImages } from "@/lib/data";
import YouTubeEmbed from "@/components/YouTube";
import ScrollingText from "@/components/FooterScroll";
import Footer from "@/components/Footer";
import WeddingBell from "@/components/WeddingBells";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ViewMap />
      <ImageSlider />
      <Registry />
      <div className="h-max">
        <YouTubeEmbed videoId="Gntw1sB1FoQ" />
      </div>
      <ImageGrid images={gridImages} />
      <Footer />
      <ScrollingText />
      <div className="fixed bottom-[1rem] right-[1rem] z-40">
        <WeddingBell />
      </div>
    </div>
  );
}
