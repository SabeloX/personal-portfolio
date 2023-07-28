"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Hero } from '@/components/audience/hero'
import { useEffect, useState } from 'react';
import { Colours } from '@/colours';
import { details, projects, skills } from '@/samples';
import { Container } from '@mui/material';
import { Navbar } from '@/components/audience/navbar';
import { About } from '@/components/audience/about';
import { Skills } from '@/components/audience/skills';
import { Projects } from '@/components/audience/projects';
import { Contact } from '@/components/audience/contact';
import { Footer } from '@/components/audience/footer';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

export default function Home() {

  return (
    <ParallaxProvider>
      <>
        <Navbar/>
        <Hero
          name={`${details.name} ${details.surname}`}
          slogan={details.slogan}
          profession={details.profession}
        />
        <About
          aboutImage={details.profile}
          aboutText={details.about}
        />
        <Skills
          skills={skills}
        />
        <Projects
          projects={projects}
        />
        <section className="section-sm bg-primary">
          <div className="container text-center text-sm-left">
            <div className="row align-items-center">
                <div className="col-sm offset-md-1 mb-4 mb-md-0">
                    <h6 className="title text-light">Want to work with me?</h6>
                    <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
                </div>
                <div className="col-sm offset-sm-2 offset-md-3">
                    <a href="#contact" className="btn btn-lg my-font btn-light rounded">Hire Me</a>
                </div>
            </div>
          </div>
        </section>
        <Contact
          contact={details.contact}
          email={details.email}
        />
        <Footer/>
      </>
    </ParallaxProvider>
  )
}
