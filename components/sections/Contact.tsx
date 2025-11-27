"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className='py-24'
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className='container mx-auto px-4'>
        <motion.h2 variants={fadeIn} className='text-4xl font-bold mb-8 text-center'>Get In Touch</motion.h2>
        <motion.form 
          variants={fadeIn} 
          className="max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={fadeIn}>
              <Input type="text" placeholder="Your Name" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Input type="email" placeholder="Your Email" />
            </motion.div>
          </div>
          <motion.div variants={fadeIn} className="mb-6">
            <Textarea placeholder="Your Message" />
          </motion.div>
          <motion.div variants={fadeIn} className="text-center">
            <Button size="lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Send Message</Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact;
