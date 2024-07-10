"use client";

import GLBViewer from '@/components/GLBViewer';
import Background from '@/components/ui/background'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Vortex } from '@/components/ui/vortex'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className="min-h-screen">
      <Background>
        <div className="h-screen relative w-full flex justify-center items-center rounded-md overflow-hidden bg-black bg-opacity-50">

          <div className="fixed top-4 left-4 xs:left-6.5 z-50 group">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}

              className='w-10 h-10 xs:w-14 xs:h-14 rounded-full text-white border border-purple-600 group-hover:text-blue-600 shadow-glass-inset hover:shadow-glass-sm flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4'
              aria-label={"Home"}
              name={"Home"}
            >
              <Link href="/" aria-label="Home">
                <Home />
              </Link>
            </motion.button>
          </div>

          <div className='w-full h-full'>
            <Vortex particleCount={300} baseRadius={6} baseHue={180} rangeY={200} className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
                <GLBViewer url={"/models/isometric_game_wizard.glb"} />

                <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
                    Naufal Husnianto
                </h2>
                <p className="text-white text-md max-w-xl mt-3 text-center">
                    Meet the wizard behind this portfolio.
                </p>
            </Vortex>
          </div>
          
        </div>
      </Background>

      <div className='h-full w-full px-10'>
        <HoverEffect items={arr} />
      </div>
    </main>
  )
}

export const arr = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default About;
