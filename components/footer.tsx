"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { m } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <FadeIn>
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Harsh Gandhi. All rights reserved.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <nav className="flex gap-4">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <m.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              </m.div>
            ))}
          </nav>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex gap-4">
            {[
              { icon: <Mail className="h-5 w-5" />, href: "mailto:gandhiharsh799@gmail.com", label: "Email" },
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/Harshgandhiii", label: "GitHub" },
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: "https://www.linkedin.com/in/harsh-gandhi-505437204/",
                label: "LinkedIn",
              },
              { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/yourusername", label: "Twitter" },
            ].map((social, i) => (
              <m.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -4, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {social.icon}
              </m.a>
            ))}
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

