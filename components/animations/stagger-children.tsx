"use client"

import type { ReactNode } from "react"
import { m, useInView } from "framer-motion"
import { useRef } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
  once?: boolean
}

export function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <m.div ref={ref} variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className={className}>
      {children}
    </m.div>
  )
}

