import FixedPanel from "@/components/FixedPanel";
import Navbar from "@/components/Navbar";
import ProfileArticle from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex lg:h-screen">
      {/* Left 2/5 - Navbar and Profile */}
      <div className="w-full lg:w-[30.5vw] lg:min-w-[30.5vw] lg:max-w-[30.5vw] lg:flex-shrink-0 lg:overflow-y-auto">
        <div className="space-y-1 lg:p-4 lg:pt-6 lg:pr-3">
          <Navbar />
          <ProfileArticle />
        </div>
      </div>
      
      {/* Right 3/5 - Fixed Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-[69.5vw] lg:min-w-[69.5vw] lg:max-w-[69.5vw] lg:flex-shrink-0 lg:relative lg:pt-6 lg:pr-6 lg:overflow-y-auto">
        <FixedPanel />
      </div>
    </div>
  );
}
