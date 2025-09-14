"use client"

import { useId } from "react"

interface BlueprintGridProps {
  className?: string
  opacity?: number
  primaryColor?: string
  secondaryColor?: string
  gridSize?: number
  subgridDivisions?: number
}

export function BlueprintGrid({
  className = "",
  opacity = 0.4,
  primaryColor = "#0057b7",
  secondaryColor = "#f59e0b",
  gridSize = 50,
  subgridDivisions = 5,
}: BlueprintGridProps) {
  const id = useId()
  const subgridSize = gridSize / subgridDivisions

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`blueprint-grid-${id}`} width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            {/* Main grid lines */}
            <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" stroke={primaryColor} strokeWidth="0.5" />

            {/* Subgrid lines */}
            {Array.from({ length: subgridDivisions - 1 }).map((_, i) => (
              <path
                key={`vertical-${i}`}
                d={`M ${(i + 1) * subgridSize} 0 L ${(i + 1) * subgridSize} ${gridSize}`}
                fill="none"
                stroke={primaryColor}
                strokeWidth="0.2"
                strokeDasharray="2,2"
              />
            ))}

            {Array.from({ length: subgridDivisions - 1 }).map((_, i) => (
              <path
                key={`horizontal-${i}`}
                d={`M 0 ${(i + 1) * subgridSize} L ${gridSize} ${(i + 1) * subgridSize}`}
                fill="none"
                stroke={primaryColor}
                strokeWidth="0.2"
                strokeDasharray="2,2"
              />
            ))}

            {/* Accent elements */}
            <circle
              cx={gridSize / 2}
              cy={gridSize / 2}
              r={subgridSize / 4}
              fill="none"
              stroke={secondaryColor}
              strokeWidth="0.3"
              opacity="0.5"
            />

            <path
              d={`M ${gridSize * 0.8} ${gridSize * 0.2} L ${gridSize * 0.9} ${gridSize * 0.3}`}
              stroke={secondaryColor}
              strokeWidth="0.3"
              opacity="0.5"
            />

            <path
              d={`M ${gridSize * 0.2} ${gridSize * 0.8} L ${gridSize * 0.3} ${gridSize * 0.9}`}
              stroke={secondaryColor}
              strokeWidth="0.3"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#blueprint-grid-${id})`} />
      </svg>
    </div>
  )
}

