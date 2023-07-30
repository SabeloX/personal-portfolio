import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export interface AboutProps {
    aboutText: string;
    aboutImage: string;
    domain: string;
}

export const About = ({ aboutText, aboutImage, domain }: AboutProps) => {
    const downloadCV = () => {
        axios.get(`${domain}/CV Sabelo Mtetwa.pdf`)
    }
    console.log(`${domain}/CV Sabelo Mtetwa.pdf`)
    
    return (
        <section className="section" id="about">
            <div className="container text-center">
                <div className="about" style={{ gap: "50px"}}>
                    <div className="about-img-holder" style={{ justifyContent: "center"}}>
                        <Image
                            style={{
                                objectFit: "contain",
                                maxWidth: "100%",
                            }}
                            width={400}
                            height={400}
                            src={aboutImage}
                            className="about-img"
                            alt="Sabelo profile image"
                        />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            { aboutText }
                        </p>
                        <a
                            className="btn-rounded btn btn-outline-primary mt-4"
                            href={`${domain}/CV Sabelo Mtetwa.pdf`}
                            target="_blank"
                        >
                            Download CV</a>
                    </div>              
                </div>
            </div>
        </section>
    )
}