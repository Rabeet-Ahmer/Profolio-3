"use client";
import { useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerContainer, fadeIn } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Leading the development of a large-scale, interactive web application using Next.js and Three.js. Responsible for architectural decisions, performance optimization, and mentoring junior developers."
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Developed and maintained a variety of client websites, from marketing pages to e-commerce stores. Specialized in creating engaging user interfaces with GSAP and Framer Motion."
  },
  {
    role: "Junior Web Developer",
    company: "Web Wizards",
    period: "2016 - 2018",
    description: "Assisted in the development of responsive websites using HTML, CSS, and JavaScript. Gained a strong foundation in web development best practices and version control with Git."
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");
      gsap.to(items, {
        yPercent: -10 * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top top",
          end: "+=" + (items.length * 100),
          scrub: true,
          pin: true,
        }
      });
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="experience"
      ref={ref}
      className='py-24'
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className='container mx-auto px-4'>
        <motion.h2 variants={fadeIn} className='text-4xl font-bold mb-12 text-center'>My Journey</motion.h2>
        <div ref={timelineRef} className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item flex mb-12">
              <div className="w-1/3 text-right pr-8">
                <p className="font-bold">{exp.period}</p>
              </div>
              <div className="w-2/3 pl-8 border-l-2 border-primary relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-lg text-muted-foreground mb-4">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience;
