"use client"

import type { ReactNode } from "react"
import { m as motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
  distance?: number
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
  distance = 50,
  once = true,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  }

  const initial = {
    opacity: 0,
    ...directions[direction],
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.45, 0.46, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

