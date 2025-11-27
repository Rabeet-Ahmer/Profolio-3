"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project One",
    description: "A stunningly designed e-commerce platform with a focus on user experience and performance.",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    title: "Project Two",
    description: "An interactive data visualization dashboard for a leading analytics company.",
    tags: ["React", "D3.js", "GSAP"],
  },
  {
    title: "Project Three",
    description: "A collaborative real-time editor built with modern web technologies for seamless teamwork.",
    tags: ["Node.js", "WebSockets", "MongoDB"],
  },
  {
    title: "Project Four",
    description: "A beautiful and fast portfolio website for a world-renowned photographer.",
    tags: ["Gatsby", "GraphQL", "Framer Motion"],
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className='py-24'
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className='container mx-auto px-4'>
        <motion.h2 variants={fadeIn} className='text-4xl font-bold mb-12 text-center'>My Work</motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;
