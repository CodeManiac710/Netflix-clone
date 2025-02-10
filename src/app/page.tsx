import { Navbar } from "@/components/home/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-full text-white bg-black">
      <header className="w-full h-screen bg-heroImage bg-center bg-cover">
        <div className=" w-full h-full bg-gradient-to-b from-black via-black/15 to-black/90">
          <Navbar />
        </div>
        
      </header>
    </div>
  );
}
