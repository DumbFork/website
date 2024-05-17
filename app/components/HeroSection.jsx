"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'; 
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section className='lg:py-16 '>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{opacity: 0, scale:0.5 }} 
        animate={{opacity: 1,scale:1}} 
        transition={{duration: 0.5}}
        className="col-span-7 place-self-center text-center sm:text-left justify-self-start"> 
        <h1 className="text-white mb-8 text-4xl sm:text-5xl  lg:text-7xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9932cc] to-[#48d1cc]">
             Hello, I'm {""}</span>
             <br></br>
        
          <TypeAnimation
      sequence={[
        'Pratik',
        2000,
        'a Bartender',
        1000,
        'a Staff Manager',
        1000,
        'an Accountent',
        1000,
        'a Store Officer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <br></br>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        Hey there! I am Pratik G.C., a versatile professional with expertise across multiple domains, I bring adaptability and a commitment to excellence to any team or organization. </p>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> Let's connect and explore how I can contribute to your success!</p>
       
        <div>
        <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#76E3D8] to-[#6f00ff] hover:bg-slate-800 text-white">
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/uc?export=download&id=1O2_iDnrWgOlYqCHvoRbyqh2luKkc4Wit"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#76E3D8] to-[#6f00ff] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#001919] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>

        </div>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, scale:0.5 }} 
        animate={{opacity: 1,scale:1}} 
        transition={{duration: 0.5}}v className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#001919] bg-opacity-80 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
          <Image
           src="/images/hero-image.png"
           priority={false}
           alt="hero-image"
           className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
           width={500}
           height={500}
           
          />
        </div>
      </motion.div>
      </div>
  </section>
  );
};
const func = () => {
  return (
    <div >
       you&apos;re free
      </div>
  )}


export default HeroSection