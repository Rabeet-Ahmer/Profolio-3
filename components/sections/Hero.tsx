"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { slideUp, fadeIn } from "@/lib/animations";
import About from "./About";

const Hero = () => {
  const headline = "Creative Frontend Engineer";
  const subheadline = "I build beautiful, interactive, and resilient web experiences.";

  return (
    <>
      <motion.section 
        id="hero" 
        className='relative h-screen flex items-center justify-center text-center overflow-hidden'
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className='z-10 flex flex-col items-center px-4'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-4'>
            {headline.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={slideUp}
                custom={index}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>
          <motion.p 
            className='max-w-2xl text-lg md:text-xl text-muted-foreground'
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.75, duration: 0.75 }}
          >
            {subheadline}
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.section>
      <About />
    </>
  )
}

export default Hero;
