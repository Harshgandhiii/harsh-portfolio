"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { StaggerItem } from "@/components/animations/stagger-item";
import { m } from "framer-motion";

export function ProjectsSection() {
	const projects = [
		{
			title: "Advanced Crypto Trading Platform",
			description:
				"Built a secure and scalable platform that enables users to connect their exchanges and trade cryptocurrencies seamlessly. Supports spot and futures trading along with automated trading bots for strategy execution. Integrated real-time market data, analytics, and risk management features to enhance the trading experience.",
			image: "/crypto-trading.webp?height=400&width=600",
			tags: ["React", "PayPal", "Tailwind CSS", "TypeScript", "Shadcn UI"],
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			title: "Event Management & Ticketing Platform",
			description:
				"Developed a user-friendly platform where audiences can explore events, view details, and access passes, packages, and announcements. Event management, including registrations and content updates, is handled through a separate admin panel, ensuring a seamless experience for both users and organizers.",
			image: "/event.webp?height=400&width=600",
			tags: ["Next.js", "Tailwind CSS", "Stripe", "Shadcn UI"],
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			title: "Project Three",
			description:
				"A responsive landing page for a SaaS product with animations and interactive elements.",
			image: "/placeholder.svg?height=400&width=600",
			tags: ["HTML", "CSS", "JavaScript", "GSAP"],
			liveUrl: "#",
			githubUrl: "#",
		},
	];

	return (
		<section id="projects" className="py-16 md:py-24 bg-muted/50">
			<div className="container">
				<FadeIn>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
						My Projects
					</h2>
				</FadeIn>

				<StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<StaggerItem key={index}>
							<m.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
								<Card className="overflow-hidden flex flex-col h-full">
									<m.div
										className="relative h-48 w-full"
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3 }}
									>
										<Image
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											fill
											className="object-cover transition-transform"
										/>
									</m.div>
									<CardHeader>
										<CardTitle>{project.title}</CardTitle>
										<CardDescription>{project.description}</CardDescription>
									</CardHeader>
									<CardContent className="flex-grow">
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, tagIndex) => (
												<m.div
													key={tagIndex}
													whileHover={{ scale: 1.1 }}
													transition={{ duration: 0.2 }}
												>
													<Badge variant="secondary">{tag}</Badge>
												</m.div>
											))}
										</div>
									</CardContent>
									{/* <CardFooter className="flex gap-2">
                    <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" className="gap-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </m.div>
                    <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" className="gap-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </m.div>
                  </CardFooter> */}
								</Card>
							</m.div>
						</StaggerItem>
					))}
				</StaggerChildren>
			</div>
		</section>
	);
}
