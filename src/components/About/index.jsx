import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import Link from 'next/link'; 

const AboutUs = () => {
  return (
    <>
      <motion.div
        className='about-heading'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About Us</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to our company! We are dedicated to delivering the best products and services to our customers. Our team works hard to innovate and improve continuously.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Founded in 2021, our mission is to create value for our stakeholders while being environmentally conscious and socially responsible.
        </motion.p>
      </motion.div>
      <motion.div
        className='about-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <section className='about'>
          <motion.div
            className='about-image'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Image src="/images/school-image.jpg" width={600} height={400} alt='school-image' />
          </motion.div>
          <motion.div
            className='about-content'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <h2>Making College Affordable</h2>
            <p>Paying for your college degree is possible! At Park University, we offer financial aid, scholarships, grants and military discounts to help you pay for college.</p>
            <Link className='read-more' href={"/about"}>
              Read More
            </Link>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutUs;
