"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Globe,
  Layout,
  Server,
  Wrench,
  CreditCard,
  GitBranch,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { StaggerItem } from "@/components/animations/stagger-item";
import { m } from "framer-motion";
import Image from "next/image";

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,

      items: [
        {
          name: "HTML5",
          icon: "/assets/frontend/html.svg",
        },
        {
          name: "CSS3",
          icon: "/assets/frontend/css.svg",
        },
        {
          name: "JavaScript",
          icon: "/assets/frontend/javascript.svg",
        },
        {
          name: "React",
          icon: "/assets/frontend/reactjs.svg",
        },
        {
          name: "Next.js",
          icon: "/assets/frontend/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/assets/frontend/tailwind.svg",
        },
        {
          name: "Redux",
          icon: "/assets/frontend/redux.svg",
        },
        {
          name: "TypeScript",
          icon: "/assets/frontend/typescript.svg",
        },
        {
          name: "Shadcn UI",
          icon: "/assets/frontend/shadcn.svg",
        },
        {
          name: "Material UI",
          icon: "/assets/frontend/mui.svg",
        },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Node.js",
          icon: "/assets/backend/nodejs.svg",
        },
        {
          name: "Express",
          icon: "/assets/backend/express.svg",
        },
        {
          name: "RESTful APIs",
          icon: "/assets/backend/rest.svg",
        },

        {
          name: "PostgreSQL",
          icon: "/assets/backend/postgresql.svg",
        },
        {
          name: "Socket.io",
          icon: "/assets/backend/socket.svg",
        },
      ],
    },
    // {
    //   category: "Design",
    //   icon: <Palette className="h-8 w-8 text-primary" />,
    //   items: ["Figma", "Responsive Design", "UI/UX Principles"],
    // },
    {
      category: "DevOps",
      icon: <Globe className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "AWS",
          icon: "/assets/devops/aws.svg",
        },

        {
          name: "Docker",
          icon: "/assets/devops/docker.svg",
        },
      ],
    },
    {
      category: "Artificial Intelligence",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "OpenAI",
          icon: "/assets/ai/openai.svg",
        },
        {
          name: "Claude",
          icon: "/assets/ai/claude.svg",
        },
        {
          name: "Cursor",
          icon: "/assets/ai/cursor.svg",
        },
      ],
    },
    {
      category: "Payment Gateway",
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Stripe",
          icon: "/assets/payment/stripe.svg",
        },
        {
          name: "PayPal",
          icon: "/assets/payment/paypal.svg",
        },
      ],
    },
    {
      category: "Version Control",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Git",
          icon: "/assets/version/git.svg",
        },
        {
          name: "GitHub",
          icon: "/assets/version/github-logo.svg",
        },
        {
          name: "GitLab",
          icon: "/assets/version/gitlab.svg",
        },
        {
          name: "Bitbucket",
          icon: "/assets/version/bitbucket.svg",
        },
      ],
    },
    {
      category: "Tools",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Figma",
          icon: "/assets/tools/figma.svg",
        },
        {
          name: "Postman",
          icon: "/assets/tools/postman.svg",
        },
        {
          name: "Postico",
          icon: "/assets/tools/postico.png",
        },
      ],
    },
    {
      category: "No-Code Tools",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Webflow",
          icon: "/assets/no-code/webflow.svg",
        },
        {
          name: "Memberstack",
          icon: "/assets/no-code/memberstack.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Skills & Tools</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Technologies I use to build fast, scalable, and user-friendly
              products.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <StaggerItem key={index}>
              <m.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Card className="h-full min-h-[183px] border-border/60 bg-card/50 backdrop-blur-sm">
                  <CardContent className="space-y-5 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <m.div
                          className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10"
                          animate={{ rotate: [0, 8, 0] }}
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
                        <h3 className="text-lg font-semibold text-primary">
                          {skill.category}
                        </h3>
                      </div>
                      
                    </div>

                    <StaggerChildren
                      className="flex flex-wrap gap-2"
                      staggerDelay={0.04}
                    >
                      {skill.items.map((item, itemIndex) => (
                        <StaggerItem key={itemIndex} direction="right">
                          <m.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.15 }}
                            className="group relative"
                          >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-300/80 bg-zinc-700 shadow-[0_0_18px_rgba(59,130,246,0.25)] transition-all group-hover:border-primary/70 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]">
                              <Image
                                src={item.icon}
                                alt={`${item.name} icon`}
                                width={20}
                                height={20}
                                className="h-6 w-6 object-contain "
                              />
                            </span>
                            <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 rounded-md border border-border/70 bg-background/95 px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-md transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                              {item.name}
                            </span>
                          </m.div>
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
