"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.js</li>
                <li>PhotoShop</li>
                <li>Ms Office</li>
                <li>Team Leading</li>
                <li>Communication</li>
                <li>Customer Service</li>
                <li>Problem solving</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
<ul className='list-disc pl-2'>
                    <li>Horizon GBS</li>
                <li>Butwal Public School</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
<ul className='list-disc pl-2'>
                    <li>+2 Graduate </li>
                <li>B1 Goethe Zentrum KTM</li>
                <li>Old School of Tourism and Hospitality Management</li>
            </ul>
        )
    },
    {
        title: "Former",
        id: "former",
        content: (
<ul className='list-disc pl-2'>
                    <li>Bartender</li>
                <li>Barista Trainer</li>
                <li>Staff Manager</li>
                <li>Store Officer</li>
                <li>Assistant Accountant</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition, ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} alt=""/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
    Welcome! to my Portfolio, I'm a multi professional individual. With a love for exploring new opportunities.</p>
    <p className="text-base lg:text-lg">
    I am experienced in the field of hospitality, store operation, customer service, bartending, barista trainer, graphic designer and basic coding.
I excel in: Communication, Diverse Learning, Creativity and Teamwork.</p><p className="text-base lg:text-lg"> I am a quick learner and I am always
            looking to expand my knowledge and skill set. Beyond work, I enjoy travelling, sketching and music.</p><p className="text-base lg:text-lg">
Join me on this journey of creativity and discovery!
    </p>
    <div className="flex flex-row justify-start mt-8">   
     <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("former")}
              active={tab === "former"}
            >
              {" "}
              Former{" "}
            </TabButton>
    </div>
    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}

    </div>
    </div>
    </div>
    </section>
  )
}
const func = () => {
  return (
    <div >
       you&apos;re free
      </div>
  )}

export default AboutSection