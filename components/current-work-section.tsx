"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, MapPin, Briefcase } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { m } from "framer-motion";
import Image from "next/image";

export function CurrentWorkSection() {
  return (
    <section id="current-work" className="py-16 md:py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Where I Work
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="overflow-hidden bg-blue-50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <m.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Company Building"
                        fill
                        className="object-cover"
                      />
                    </m.div>
                  </div>
                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <m.div
                        className="inline-block mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "rgba(163, 22, 33, 0.1)" }}
                        >
                          <Building className="h-8 w-8 text-primary" />
                        </div>
                      </m.div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        Seaflux Technologies
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        Junior Software Engineer
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 flex-shrink-0 text-primary" />
                        <p>
                        Working on front-end and back-end development tasks, collaborating with senior developers, and continuously learning new technologies
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 flex-shrink-0 text-primary" />
                        <p>January 2024 - Present</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                        <p>Ahmedabad, Gujarat</p>
                      </div>
                    </div>

                    <m.div
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="https://www.seaflux.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        Visit Company Website
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </m.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
