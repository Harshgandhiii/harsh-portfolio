"use client"

import type { ReactNode } from "react"
import { m } from "framer-motion"

interface StaggerItemProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  distance?: number
}

export function StaggerItem({ children, direction = "up", className = "", distance = 30 }: StaggerItemProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  }

  const item = {
    hidden: { opacity: 0, ...directions[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.45, 0.46, 1],
      },
    },
  }

  return (
    <m.div variants={item} className={className}>
      {children}
    </m.div>
  )
}

