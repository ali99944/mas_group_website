import React from 'react'

interface SectionHeaderProps {
    name: string
}

function SectionHeader({ name }: SectionHeaderProps) {
  return (
    <div>
        <div className="flex items-center gap-4 mb-12">
            <div className="h-[1.6px] w-full bg-black/40 flex-1"></div>
            <p className="text-primary text-lg font-bold tracking-wide uppercase">{name}</p>
            <div className="h-[1.6px] w-full bg-black/40 flex-1"></div>
        </div>
    </div>
  )
}

export default SectionHeader