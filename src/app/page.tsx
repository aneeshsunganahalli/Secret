import FixedPanel from "@/components/FixedPanel";
import Navbar from "@/components/Navbar";
import ProfileArticle from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex lg:h-screen">
      {/* Left 2/5 - Navbar and Profile */}
      <div className="w-full lg:w-[40vw] lg:min-w-[40vw] lg:max-w-[40vw] lg:flex-shrink-0 lg:overflow-y-auto">
        <div className="space-y-1 lg:p-4 lg:pt-6 lg:pr-3">
          <Navbar />
          <ProfileArticle />
        </div>
      </div>
      
      {/* Right 3/5 - Fixed Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-[60vw] lg:min-w-[60vw] lg:max-w-[60vw] lg:flex-shrink-0 lg:relative lg:pt-6 lg:pr-6 lg:overflow-y-auto">
        <FixedPanel />
      </div>
    </div>
  );
}
