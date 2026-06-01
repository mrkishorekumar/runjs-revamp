import Footer from "@/components/ui/Footer";
import DynamicBackgroundPattern from "@/components/ui/GridBackground";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <DynamicBackgroundPattern patternType="BigGrid">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
      </div>
    </DynamicBackgroundPattern>
  );
}
