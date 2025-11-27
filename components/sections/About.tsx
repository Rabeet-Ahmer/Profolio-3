"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeIn } from "@/lib/animations";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "WebGL", "Node.js"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      id="about" 
      ref={ref}
      className='py-24'
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className='container mx-auto px-4'>
        <motion.h2 variants={fadeIn} className='text-4xl font-bold mb-8 text-center'>About Me</motion.h2>
        <motion.p variants={fadeIn} className='max-w-3xl mx-auto text-lg text-center text-muted-foreground mb-12'>
          I am a passionate frontend engineer with a love for creating beautiful, intuitive, and performant user experiences. I thrive on bridging the gap between design and technology, and I am always looking for new ways to push the boundaries of what's possible on the web.
        </motion.p>
        <motion.div variants={fadeIn} className='flex flex-wrap justify-center gap-4'>
          {skills.map((skill, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Badge variant="secondary">{skill}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About;
