"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { m, motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./animations/background-beams";
import { TextGenerateEffect } from "./animations/text-generate-effect";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative py-20 md:py-32 flex items-center min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <FadeIn>
              <TextGenerateEffect
                words="Hi, I'm"
                className="text-4xl md:text-6xl font-bold tracking-tight text-black"
                name="Harsh Gandhi"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <TextGenerateEffect
                words="A passionate front-end developer crafting beautiful and
                functional web experiences"
                className="text-xl md:text-2xl text-muted-foreground"
              />
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="relative overflow-hidden group"
                  >
                    <Link href="#projects">
                      <span className="relative z-10">View My Work</span>
                      <m.span
                        className="absolute inset-0 bg-primary/80"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="relative overflow-hidden group border-primary"
                  >
                    <Link href="#contact">
                      <span className="relative z-10">Contact Me</span>
                      <m.span
                        className="absolute inset-0 bg-muted"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn
          direction="down"
          delay={0.8}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Link href="#about">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 border border-primary hover:"
              >
                <ArrowDown className="h-5 w-5" />
                <span className="sr-only">Scroll down</span>
              </Button>
            </Link>
          </m.div>
        </FadeIn>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
