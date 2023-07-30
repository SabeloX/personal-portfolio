import { Button, Container, Typography } from "@mui/material"
import Image from "next/image";

export interface HeroProps {
    name: string;
    profession: string;
    slogan: string;
    domain: string;
}

export const Hero = ({ name, profession, slogan, domain }: HeroProps) => {
    return (
        <header id="home" className="header"
            style={{
                backgroundImage: `url(${domain}/bg-img.jpg)`,
                backgroundSize: "cover",
            }}
        >
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    {/* <span className="up">HI!</span> */}
                    <span style={{ color: "#fff" }} className="down">{name}</span>
                </h1>
                <p className="header-subtitle" style={{ color: "#fff" }}>{profession.toUpperCase()}</p>            

                <a href="#contact" className="btn btn-primary">Get in touch</a>
            </div>              
        </header>
    )
}