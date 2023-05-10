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

export default function Home() {

  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [textColor, setTextColor] = useState<string>(Colours.darkThemeTextColor);
  const [mainColor, setMainColor] = useState<string>(Colours.darkThemeMainColor);
  const [lightShadeColor, setLightShadeColor] = useState<string>(Colours.darkThemeLightToneColor);
  useEffect(() => {
    if (theme === "dark") {
      setTextColor(Colours.darkThemeTextColor);
      setMainColor(Colours.darkThemeMainColor);
      setLightShadeColor(Colours.darkThemeLightToneColor);
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = Colours.darkThemeMainColor
      }
    }
    else if(theme === "light"){
      setTextColor(Colours.lightThemeTextColor);
      setMainColor(Colours.lightThemeMainColor);
      setLightShadeColor(Colours.lightThemeLightToneColor);
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = Colours.lightThemeMainColor
      }
    }
  }, [theme]);  return (
    <Container
        sx={{
          padding: "0px !important",
          minHeight: "100vh",
          maxWidth: "1360px !important"
        }}
        id="home"
      >
        <Navbar
          textColor={textColor}
          backgroundColor={mainColor}
          setTheme={setTheme}
          theme={theme}
          lightShadeColor={lightShadeColor}
        />
        <main className={styles.main}>
          <Hero
            textColor={textColor}
            name={`${details.name} ${details.surname}`}
            slogan={details.slogan}
            profession={details.profession}
          />
          <About
            textColor={textColor}
            aboutImage={details.profile}
            aboutText={details.about}
          />
          <Skills
            skills={skills}
            textColor={textColor}
            lightShadeColor={lightShadeColor}
          />
          <Projects
            textColor={textColor}
            lightShadeColor={lightShadeColor}
            mainColor={mainColor}
            projects={projects}
          />
          <Contact
            textColor={textColor}
            lightShadeColor={lightShadeColor}
            contact={details.contact}
            email={details.email}
          />
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </Container>
  )
}
