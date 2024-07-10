"use client";

import Background from '@/components/ui/background'
import { SparklesCore } from '@/components/ui/sparkles'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      <Background>
      <div className="h-screen relative w-full flex justify-center items-center overflow-hidden rounded-md">
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
        
        <div className='w-full h-full'>
          
        </div>
      </div>
    </Background>
    </div>
  )
}

export default Contact
