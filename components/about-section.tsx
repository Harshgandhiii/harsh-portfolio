"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { m } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="right">
            <div className="flex justify-center">
              <m.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder.svg?height=320&width=320" alt="Your Name" fill className="object-cover" />
              </m.div>
            </div>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn direction="left" delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Hello! I'm a passionate developer with expertise in building modern web applications. I specialize in
                frontend technologies, creating responsive and user-friendly interfaces.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <p className="text-lg text-muted-foreground">
                With a background in frontend development, I bring a unique perspective to every project. I'm constantly
                learning and exploring new technologies to stay at the forefront of web development.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.6}>
              <div className="pt-4">
                <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="gap-2 border-primary">
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </Button>
                </m.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

