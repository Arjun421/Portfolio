"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
    {
        id: 1,
        title: "NoteNest – Full Stack Notes App",
        description:
            "A secure full-stack web app to create, manage, and organize personal notes with JWT authentication.",
        longDescription:
            "NoteNest is a full-stack web application that allows users to securely create, manage, and organize personal notes in one place. The system uses JWT-based authentication and bcrypt.js for secure user access and data protection. Built with a Node.js + Express.js backend and a React.js frontend, it supports full CRUD operations for notes. PostgreSQL with Prisma ORM is used for efficient data management, and the application is deployed with a scalable cloud setup.",
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "JWT",
            "bcrypt.js",
            "JavaScript",
        ],
        github: "https://github.com/Arjun421/capstone",
        live: "https://capstone-duke.vercel.app/",
        image: "/notenest.png",
    },
    {
        id: 2,
        title: "Resume Builder – Full Stack Resume Generation Platform",
        description:
            "A full-stack app to create, customize, and download professional resumes with multiple templates and PDF export.",
        longDescription:
            "Resume Builder is a full-stack web application that enables users to create, customize, and download professional resumes with multiple templates and color themes. The system features JWT-based authentication, real-time resume preview, and one-click PDF download. Built with a React (Vite) frontend and a Node.js + Express backend, it uses MongoDB for data persistence and supports file uploads via Multer. The application is deployed on Vercel and Render for scalable access.",
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Multer",
            "Axios",
        ],
        github: "https://github.com/Arjun421/Resume_Builder",
        live: "https://resume-builder-fawn-beta-79.vercel.app/",
        image: "/resumebuilder.png",
    },
    {
        id: 3,
        title: "Budget Buddy – Personal Finance Management System",
        description:
            "A full-stack finance app to track income, expenses, and budgets with visual analytics and category-wise insights.",
        longDescription:
            "Budget Buddy is a full-stack personal finance application designed to track income, expenses, and manage budgets effectively. The system provides JWT-based authentication, transaction management with filtering and analytics, and category-wise budget tracking with visual insights. Built with a React (Vite) frontend and a Node.js + Express backend, it uses PostgreSQL with Prisma ORM for efficient data handling. Interactive dashboards are powered by Recharts, and the application is deployed on Vercel and Render.",
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "JWT",
            "Recharts",
        ],
        github: "https://github.com/Arjun421/Budget_Buddy",
        live: "https://budget-buddy-alpha-five.vercel.app/",
        image: "/budgetbuddy.png",
    },
];



const ProjectCard = ({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="relative h-[400px] w-full rounded-3xl glass-dark border border-white/5 overflow-hidden cursor-pointer group"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            >
                <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                            <Badge key={t} variant="secondary" className="bg-white/10 text-[10px] uppercase tracking-wider">
                                {t}
                            </Badge>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">{project.description}</p>
                </div>
            </div>

            <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover -z-10 transition-transform duration-500 group-hover:scale-110"
            />
        </motion.div>
    );
};

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        A selection of my recent work, ranging from AI applications to immersive e-commerce experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-3xl glass-dark border-white/10 text-foreground p-0 overflow-y-auto max-h-[90vh]">
                    {selectedProject && (
                        <div className="flex flex-col">
                            <div className="relative h-64 w-full bg-white/5 shrink-0">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            </div>
                            <div className="p-8">
                                <DialogHeader>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedProject.tech.map((t) => (
                                            <Badge key={t} variant="secondary" className="bg-primary/20 text-primary border-primary/20">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                    <DialogTitle className="text-3xl font-bold mb-4">{selectedProject.title}</DialogTitle>
                                    <DialogDescription className="text-lg text-foreground/70 leading-relaxed">
                                        {selectedProject.longDescription}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex gap-4 mt-8">
                                    <Button asChild className="rounded-full px-6">
                                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="rounded-full px-6 glass">
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> GitHub
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
