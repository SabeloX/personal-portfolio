import { Button, Container, Typography } from "@mui/material"
import Image from "next/image";

export interface HeroProps {
    name: string;
    profession: string;
    slogan: string;
}

export const Hero = ({ name, profession, slogan } : HeroProps) => {
    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am Sabelo Mtetwa</span>
                </h1>
                <p className="header-subtitle">SOFTWARE DEVELOPER</p>            

                <button className="btn btn-primary">Get in touch</button>
            </div>              
        </header>
    )
}