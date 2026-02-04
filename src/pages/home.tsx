import { ThemeProvider } from "@/components/ui/theme-provider";
import HeroSection from "@/components/custom/hero-section";
import TextTransitionSection from "@/components/custom/text-transition-section";
import AboutUsSection from "@/components/custom/about-us-section";
import Footer from "@/components/custom/footer";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="bg-[#050505] min-h-screen overflow-x-hidden">
        {/* Hero Section with scattered sticker images */}
        <HeroSection />
        
        {/* Text Transition Zone */}
        <TextTransitionSection />
        
        {/* About Us Bento Grid */}
        <AboutUsSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default Home;
