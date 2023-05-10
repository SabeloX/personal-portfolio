"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Hero } from '@/components/audience/hero'
import { useEffect, useState } from 'react';
import { Colours } from '@/colours';
import { details } from '@/samples';

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
    <main className={styles.main}>
      <Hero
        textColor={textColor}
        name={details.name}
        profession={details.profession}
        slogan={details.slogan}
      />
    </main>
  )
}
