"use client"
import { Hero } from '@/components/audience/hero'
import { details, projects, skills } from '@/samples';
import { Navbar } from '@/components/audience/navbar';
import { About } from '@/components/audience/about';
import { Skills } from '@/components/audience/skills';
import { Projects } from '@/components/audience/projects';
import { Contact } from '@/components/audience/contact';
import { Footer } from '@/components/audience/footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useRef } from 'react';

export default function Home() {
  const domainRef = useRef<string>("");
  const largeScreen = useMediaQuery("(min-width: 992px)");
  useEffect(() => {
    domainRef.current = window.location.origin
  }, []);

  return (
    <ParallaxProvider>
      <>
        <Navbar
          largeScreen={largeScreen}
        />
        <Hero
          name={`${details.name} ${details.surname}`}
          slogan={details.slogan}
          domain={domainRef.current}
          profession={details.profession}
        />
        <About
          aboutImage={details.profile}
          aboutText={details.about}
          domain={domainRef.current}
        />
        <Skills
          skills={skills}
        />
        <Projects
          projects={projects}
          largeScreen={largeScreen}
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
