"use client"

import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Sound = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(!isPlaying);
        if (newState) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        localStorage.setItem("musicConsent", String(isPlaying));
    }
    
  return (
    <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
      <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}

        className='w-10 h-10 xs:w-14 xs:h-14 rounded-full text-white border border-purple-600 group-hover:text-blue-600 shadow-glass-inset hover:shadow-glass-sm flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4'
        aria-label={"Home"}
        name={"Home"}
      >
        {
            isPlaying ? <Volume2 className='w-full h-full text-white group-hover:text-blue-500' strokeWidth={1.5} /> : <VolumeX className='w-full h-full text-white group-hover:text-blue-500' strokeWidth={1.5} />
        }
      </motion.button>
    </div>
  )
}

export default Sound
