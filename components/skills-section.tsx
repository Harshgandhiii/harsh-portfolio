"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Layout,
  Palette,
  Server,
  Wrench,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { StaggerItem } from "@/components/animations/stagger-item";
import { m } from "framer-motion";

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: ["Node.js", "Express", "RESTful APIs"],
    },
    // {
    //   category: "Database",
    //   icon: <Database className="h-8 w-8 text-primary" />,
    //   items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    // },
    {
      category: "Design",
      icon: <Palette className="h-8 w-8 text-primary" />,
      items: ["Figma", "Responsive Design", "UI/UX Principles"],
    },
    {
      category: "DevOps",
      icon: <Globe className="h-8 w-8 text-primary" />,
      items: ["Git", "GitHub", "CI/CD", "AWS"],
    },
    {
      category: "Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      category: "No-Code Tools",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      items: ["Webflow", "Memberstack", "Airtable"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Skills
          </h2>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <StaggerItem key={index}>
              <m.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <m.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        {skill.icon}
                      </m.div>
                      <h3 className="text-xl font-semibold text-primary">
                        {skill.category}
                      </h3>
                    </div>
                    <StaggerChildren
                      className="grid grid-cols-2 gap-x-4 gap-y-2"
                      staggerDelay={0.05}
                    >
                      {skill.items.map((item, itemIndex) => (
                        <StaggerItem key={itemIndex} direction="right">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-primary">{item}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerChildren>
                  </CardContent>
                </Card>
              </m.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
