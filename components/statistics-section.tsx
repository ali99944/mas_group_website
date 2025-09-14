"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startCount = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={counterRef} className="text-3xl md:text-4xl font-bold text-primary">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default function StatisticsSection() {
  const stats = [
    {
      value: 150,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered construction and finishing projects",
    },
    {
      value: 200,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers who trust our expertise",
    },
    {
      value: 8,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record in construction industry",
    },
    {
      value: 98,
      suffix: "%",
      label: "On-Time Delivery",
      description: "Projects completed within scheduled timeframes",
    },
  ]

  return (
    <section id="statistics" className="bg-background mt-12">
      <div className=" px-6">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Track Record</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="text-center p-4  hover:bg-primary/5 transition-colors duration-300"
              >
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{stat.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
