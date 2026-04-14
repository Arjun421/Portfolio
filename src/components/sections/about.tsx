"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
    "React", "Next.js","JavaScript", "TypeScript", "Tailwind CSS", "mongoDB", "Express.js",
    "Node.js", "Python", "AI/ML", "DSA","Figma", "Git", "GitHub"   
];

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            Crafting Digital <span className="text-primary">Experiences</span>
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-foreground/75">
                            <p>
                                I&apos;m <span className="text-foreground font-medium">Arjun Singh</span>, a B.Tech
                                student at Newton School of Technology with a strong focus on{" "}
                                <span className="text-foreground font-medium">Full Stack Development</span> and emerging{" "}
                                <span className="text-foreground font-medium">Generative AI systems</span>.
                            </p>

                            <p>
                                I specialize in building <span className="text-foreground font-medium">scalable, production-ready web applications</span>{" "}
                                using React, Node.js, Express, MongoDB, and REST APIs. I enjoy designing clean
                                architectures and creating seamless user experiences backed by efficient backend systems.
                            </p>

                            <p>
                                Currently, I&apos;m deeply exploring <span className="text-foreground font-medium">Generative AI</span>,
                                working with LLMs, AI APIs, and AI SDKs to integrate intelligent features into real-world applications.
                            </p>

                            <p>
                                I also have a strong foundation in <span className="text-foreground font-medium">Data Structures &amp; Algorithms</span>,
                                having solved <span className="text-foreground font-medium">300+ problems on LeetCode</span>,
                                which strengthens my problem-solving and optimization skills.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="p-8 rounded-3xl glass-dark border border-white/10 relative z-10">
                            <h3 className="text-xl font-semibold mb-6">Tech Arsenal</h3>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/5 hover:bg-primary/20 transition-colors border-white/10">
                                            {tech}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
