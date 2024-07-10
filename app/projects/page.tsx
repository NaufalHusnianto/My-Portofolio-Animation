"use client";

import CardProject from "@/components/CardProject";
import Background from "@/components/ui/background";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Background>
        <div className="h-screen relative w-full flex justify-center items-center rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={2}
              maxSize={3}
              particleDensity={10}
              className="w-full h-full"
              particleColor="#FFFFFF"
              />
          </div>

          <div className="absolute cursor-pointer top-4 left-4 z-50 border border-purple-600 rounded-full p-2 hover:text-blue-600">
            <Link href="/" aria-label="Home">
              <Home />
            </Link>
          </div>

          <div className="w-full h-full flex flex-col items-center justify-center">
            <TextGenerateEffect words="The Wizard Project" className="font-bold text-center mt-56" />
            <div className='w-5/6 h-full grid grid-cols-1 md:grid-cols-2 gap-5'>
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
          </div>
        </div>
      </Background>
    </main>
  );
}
