"use client"

import { useId } from "react"

interface DotPatternProps {
  className?: string
  dotColor?: string
  dotSize?: number
  spacing?: number
  opacity?: number
}

export function DotPattern({
  className = "",
  dotColor = "#000000",
  dotSize = 2,
  spacing = 20,
  opacity = 0.1,
}: DotPatternProps) {
  const id = useId()

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`dot-pattern-${id}`} width={spacing} height={spacing} patternUnits="userSpaceOnUse">
            <circle cx={spacing / 2} cy={spacing / 2} r={dotSize} fill={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dot-pattern-${id})`} />
      </svg>
    </div>
  )
}

