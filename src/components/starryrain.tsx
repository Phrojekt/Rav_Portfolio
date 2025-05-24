"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  left: number
  animationDuration: number
  size: number
  opacity: number
  delay: number
  trailLength: number
  sway: number
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
  duration: number
}

interface StaticStar {
  id: string
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

export default function StarryRain() {
  const [stars, setStars] = useState<Star[]>([])
  const [particles, setParticles] = useState<Particle[]>([])
  const [staticStars, setStaticStars] = useState<StaticStar[]>([])

  useEffect(() => {
    // Falling stars
    const newStars: Star[] = []
    for (let i = 0; i < 40; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 6 + 4,
        size: Math.random() * 4 + 3,
        opacity: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 10,
        trailLength: Math.random() * 80 + 40,
        sway: Math.random() * 30 + 10,
      })
    }
    setStars(newStars)

    // Floating particles
    const newParticles: Particle[] = []
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
      })
    }
    setParticles(newParticles)

    // Static stars
    const arr: StaticStar[] = []
    for (let i = 0; i < 60; i++) {
      arr.push({
        id: `static-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })
    }
    setStaticStars(arr)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={`particle-${particle.id}`}
            className="absolute rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(44, 13, 15, ${particle.opacity}) 0%, rgba(60, 20, 25, ${particle.opacity * 0.5}) 50%, transparent 100%)`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: `0 0 ${particle.size * 3}px rgba(44, 13, 15, 0.4)`,
            }}
          />
        ))}
      </div>

      {/* Static background stars */}
      <div className="absolute inset-0">
        {staticStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(44,13,15,0.6) 50%, transparent 70%)`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              boxShadow: `0 0 ${star.size * 3}px rgba(44, 13, 15, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Falling stars with trails */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-fall-natural"
          style={
            {
              left: `${star.left}%`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.delay}s`,
              "--sway": `${star.sway}px`,
            } as React.CSSProperties
          }
        >
          {/* Star trail */}
          <div
            className="absolute rounded-full opacity-90"
            style={{
              width: `${star.size * 0.6}px`,
              height: `${star.trailLength}px`,
              top: `-${star.trailLength}px`,
              left: "50%",
              transform: "translateX(-50%)",
              background: `linear-gradient(to bottom, 
                rgba(44, 13, 15, 1) 0%, 
                rgba(60, 20, 25, 0.9) 30%, 
                rgba(80, 30, 35, 0.7) 60%, 
                transparent 100%)`,
              boxShadow: `0 0 ${star.size * 4}px rgba(44, 13, 15, 0.8)`,
            }}
          />

          {/* Main star */}
          <div
            className="relative rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `radial-gradient(circle, 
                rgba(255,255,255,${star.opacity}) 0%, 
                rgba(200,180,180,${star.opacity * 0.8}) 20%, 
                rgba(44,13,15,${star.opacity * 0.6}) 60%, 
                transparent 100%)`,
              boxShadow: `
                0 0 ${star.size * 3}px rgba(255,255,255,1),
                0 0 ${star.size * 6}px rgba(44,13,15,0.8),
                0 0 ${star.size * 9}px rgba(44,13,15,0.5)
              `,
            }}
          />

          {/* Sparkle effect */}
          <div
            className="absolute inset-0 animate-spin"
            style={{
              animationDuration: `${star.animationDuration * 0.7}s`,
            }}
          >
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent top-1/2 transform -translate-y-1/2 opacity-80" />
            <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-white to-transparent left-1/2 transform -translate-x-1/2 opacity-80" />
          </div>
        </div>
      ))}

      {/* Animations */}
      <style jsx>{`
        @keyframes fall-natural {
          0% {
            transform: translateY(-100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          20% {
            opacity: 1;
            transform: translateY(-80vh) translateX(calc(var(--sway) * 0.3)) rotate(2deg);
          }
          40% {
            opacity: 1;
            transform: translateY(-40vh) translateX(calc(var(--sway) * 0.7)) rotate(-1deg);
          }
          60% {
            opacity: 1;
            transform: translateY(-10vh) translateX(calc(var(--sway) * 0.9)) rotate(1deg);
          }
          80% {
            opacity: 1;
            transform: translateY(20vh) translateX(var(--sway)) rotate(-0.5deg);
          }
          95% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) translateX(calc(var(--sway) * 1.2)) rotate(0deg);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          25% {
            opacity: 0.6;
            transform: scale(1.1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
          75% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        .animate-fall-natural {
          animation: fall-natural ease-in-out infinite;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}