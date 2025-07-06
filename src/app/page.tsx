import FixedPanel from "@/components/FixedPanel";
import Navbar from "@/components/Navbar";
import ProfileArticle from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex lg:h-screen">
      {/* Left half - Navbar and Profile */}
      <div className="w-full lg:w-1/2 lg:overflow-y-auto">
        <div className="space-y-1 lg:p-4 lg:pt-6 lg:pr-3">
          <Navbar />
          <ProfileArticle />
        </div>
      </div>
      
      {/* Right half - Fixed Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 lg:relative lg:pt-6 lg:pr-6">
        <FixedPanel />
      </div>
    </div>
  );
}
