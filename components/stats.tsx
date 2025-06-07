"use client"

import { useState, useEffect, useRef } from "react"

const stats = [
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 98, label: "Client Satisfaction", suffix: "%" },
  { number: 50, label: "Team Members", suffix: "+" },
  { number: 5, label: "Years Experience", suffix: "+" },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let start = 0
      const end = stat.number
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = end
            return newCounts
          })
          clearInterval(timer)
        } else {
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(start)
            return newCounts
          })
        }
      }, 16)
    })
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
