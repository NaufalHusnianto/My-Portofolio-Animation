import React from 'react'
import { SparklesCore } from './ui/sparkles'
import Background from './ui/background'
import GLBViewer from './GLBViewer'
import Navigation from './ui/navigation'

const Hero = () => {
  return (
    <Background>
      <div className="h-screen relative w-full flex justify-center items-center overflow-hidden rounded-md">
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
          <Navigation />
          <GLBViewer url={"/models/isometric_game_wizard.glb"} />
        </div>
      </div>
    </Background>
  )
}

export default Hero
