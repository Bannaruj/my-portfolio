import React from 'react';
import { ArrowRight, Code, Terminal, Server, Smartphone, Award, Mail, Github, Linkedin, Database, Layout, LayoutTemplate, Palette, FileCode, Braces, Cpu } from 'lucide-react';
import Image from 'next/image';

import HTMLIcon from './assets/logo/HTML.png';
import CSSIcon from './assets/logo/CSS.png';
import JSIcon from './assets/logo/JS.png';
import TSIcon from './assets/logo/TS.png';
import DartIcon from './assets/logo/DART.png';
import PythonIcon from './assets/logo/Python.png';
import CppIcon from './assets/logo/C.png';
import ReactIcon from './assets/logo/react-reactNative.png';
import FlutterIcon from './assets/logo/Flutter.png'
import NodeJSIcon from './assets/logo/Node.png';
import SupabaseIcon from './assets/logo/Supabase.png';
import FirebaseIcon from './assets/logo/Firebase.png';
import MySQLIcon from './assets/logo/MySQL.png';
import PHPIcon from './assets/logo/php.png';
import NextIcon from './assets/logo/Next.jpg'

import ITPEImage from './assets/images/ITPE.png';
import ICDLImage from './assets/images/ICDL.png';
import MOSImage from './assets/images/MOS.png';
import SkillBadge1 from './assets/images/skillbadge1.png';
import SkillBadge2 from './assets/images/skillbadge2.png';
import SkillBadge3 from './assets/images/skillbadge3.png';
import CoffeeAppImage from './assets/images/coffee-app.png';
import MoneyTrackingAppImage from './assets/images/money-tracking-app.png';
import BMRAppImage from './assets/images/bmr-cal-app.png';
import ProfileImage from './assets/images/me.jpg';

export default function PortfolioPage() {
  const skillCategories = [
    {
      title: "Programming Skills",
      skills: [
        { title: "HTML", icon: <Image src={HTMLIcon} alt="HTML" className="w-8 h-8 object-contain" /> },
        { title: "CSS", icon: <Image src={CSSIcon} alt="CSS" className="w-8 h-8 object-contain" /> },
        { title: "JavaScript", icon: <Image src={JSIcon} alt="JavaScript" className="w-8 h-8 object-contain" /> },
        { title: "PHP", icon: <Image src={PHPIcon} alt="PHP" className="w-8 h-8 object-contain" /> },
        { title: "TypeScript", icon: <Image src={TSIcon} alt="TypeScript" className="w-8 h-8 object-contain" /> },
        { title: "Dart", icon: <Image src={DartIcon} alt="Dart" className="w-8 h-8 object-contain" /> },
        { title: "Python", icon: <Image src={PythonIcon} alt="Python" className="w-8 h-8 object-contain" /> },
        { title: "C++", icon: <Image src={CppIcon} alt="C++" className="w-8 h-8 object-contain" /> },
      ]
    },
    {
      title: "Framework Skills",
      skills: [
        { title: "React", icon: <Image src={ReactIcon} alt="React" className="w-8 h-8 object-contain" /> },
        { title: "Next.js", icon: <Image src={NextIcon} alt="Next" className="w-8 h-8 object-contain" /> },
        { title: "React Native", icon: <Image src={ReactIcon} alt="ReactNative" className="w-8 h-8 object-contain" /> },
        { title: "Node.js", icon: <Image src={NodeJSIcon} alt="Node.js" className="w-8 h-8 object-contain" /> },
        { title: "Flutter", icon: <Image src={FlutterIcon} alt="Flutter" className="w-8 h-8 object-contain" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { title: "MySQL", icon: <Image src={MySQLIcon} alt="MySQL" className="w-8 h-8 object-contain" /> },
        { title: "Firebase", icon: <Image src={FirebaseIcon} alt="Firebase" className="w-8 h-8 object-contain" /> },
        { title: "Supabase", icon: <Image src={SupabaseIcon} alt="Supabase" className="w-8 h-8 object-contain" /> },
      ]
    }
  ];

  const projects = [
    {
      title: "rn-bkk-coffee-app",
      description: "App developed to search for coffee shops in Bangkok.",
      tags: ["React Native"],
      color: "bg-amber-100",
      link: "https://github.com/Bannaruj/rn-bkk-coffee-app",
      image: CoffeeAppImage
    },
    {
      title: "money_tracking_app",
      description: "Goal money management app for tracking incoming and outgoing money.",
      tags: ["Flutter"],
      color: "bg-emerald-100",
      link: "https://github.com/Bannaruj/money_tracking_app",
      image: MoneyTrackingAppImage
    },
    {
      title: "rn-bmr-calculator-app",
      description: "Calculate the bmr by using weight height age and gender",
      tags: ["React Native"],
      color: "bg-sky-100",
      link: "https://github.com/Bannaruj/rn-dti-bmr-calculator-app",
      image: BMRAppImage
    }
  ];

  const certificates = [
    { title: "ITPE Certificate", issuer: "ITPE", image: ITPEImage },
    { title: "ICDL Certificate", issuer: "ICDL", image: ICDLImage },
    { title: "MOS Certificate", issuer: "Microsoft", image: MOSImage },
    { title: "Google Cloud Skill", issuer: "Google Cloud", image: SkillBadge1 },
    { title: "Google Cloud Skill", issuer: "Google Cloud", image: SkillBadge2 },
    { title: "Google Cloud Skill", issuer: "Google Cloud", image: SkillBadge3 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-zinc-800">BL.</span>
          <div className="space-x-6 text-sm font-medium text-zinc-600 hidden md:flex">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-indigo-600 transition-colors">Certificates</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>
          
          <div className="relative mb-12 mt-6 group flex items-center justify-center">
            {/* Ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 hover:from-indigo-600 to-emerald-400 hover:to-emerald-500 rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
            
            {/* Profile Image container with asymmetric rounded corners */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden border-4 border-white shadow-2xl bg-white rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem] transform transition duration-500 group-hover:scale-[1.03]">
              <Image src={ProfileImage} alt="Bannaruj Limsomwong" className="w-full h-full object-cover object-center" />
            </div>
            
            {/* Interactive floating emoji badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center border border-zinc-100 transform transition-transform duration-500 group-hover:-translate-y-2 hover:rotate-12 cursor-default">
              <span className="text-3xl md:text-4xl">👋</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 drop-shadow-sm">
            Bannaruj Limsomwong
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-600 font-medium mb-10 max-w-2xl leading-relaxed">
            Crafting scalable web experiences & robust mobile applications. <br className="hidden md:block"/>
            <span className="text-zinc-800 font-semibold">Fullstack</span> & <span className="text-zinc-800 font-semibold">Mobile App Developer</span>.
          </h2>
          <div className="flex items-center space-x-4">
            <a href="mailto:hello@example.com" className="bg-zinc-900 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-zinc-800 transition-all flex items-center group shadow-md hover:shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <div className="flex items-center space-x-2">
              <a href="https://github.com/Bannaruj" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white text-zinc-600 hover:text-indigo-600 border border-zinc-200 rounded-lg hover:border-indigo-200 transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Skill</h3>
            <p className="text-zinc-600 max-w-2xl text-lg">Fluent in multiple programming languages and web technologies, capable of building robust cross-platform applications.</p>
          </div>
          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h4 className="text-2xl font-bold text-zinc-800 mb-8 pb-2 border-b border-zinc-100">{category.title}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="p-6 border border-zinc-100 rounded-2xl bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-zinc-100 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-bold text-zinc-800">{skill.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-4">Selected Works</h3>
              <p className="text-zinc-600 max-w-2xl text-lg">A showcase of production-ready applications spanning web and mobile platforms.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className={`h-48 w-full ${project.color} relative overflow-hidden flex items-center justify-center p-6`}>
                  {project.image ? (
                    <Image src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl" />
                  ) : (
                    <>
                      {/* Abstract representation of a project image placeholder */}
                      <div className="w-32 h-32 bg-white/40 backdrop-blur-sm rounded-full mix-blend-overlay animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">{project.title}</h4>
                  <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-700 group-hover:underline decoration-2 underline-offset-4">
                    View Project <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section id="certificates" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Professional Certifications</h3>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">Continuous learning and validated expertise across industry-standard technologies.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="flex-none basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]">
                <div className="p-8 pb-10 border border-zinc-200 rounded-3xl bg-zinc-50 relative overflow-hidden group hover:border-indigo-200 transition-colors">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award className="w-24 h-24 text-indigo-600" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-full h-40 relative mb-6 rounded-xl overflow-hidden bg-white flex items-center justify-center p-3 border border-zinc-100 shadow-sm">
                      <Image src={cert.image} alt={cert.title} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">{cert.title}</h4>
                    <p className="text-zinc-500 font-medium text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-900 text-zinc-400 text-center border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <span className="font-bold text-2xl tracking-tight text-white mb-6">BL.</span>
          <p className="mb-6 max-w-md mx-auto">
            Building intelligent software solutions with a focus on design, performance, and user experience.
          </p>
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/Bannaruj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bannaruj Limsomwong. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
