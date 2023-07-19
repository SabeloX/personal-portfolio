import Image from "next/image";

export interface AboutProps {
    aboutText: string;
    aboutImage: string;
}

export const About = ({ aboutText, aboutImage } : AboutProps) => {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <Image width={400} height={400} src="/profile.png" className="about-img" alt="Sabelo profile image"/>
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            My interest in the field began as a hobby, but as I discovered my passion for it, I decided to pursue it professionally. I studied Electrical and Computer Engineering at the University of Cape Town, majoring in Computer Science and Embedded Systems. I am eager to make a contribution to the tech industry and be a part of something remarkable.              
                        </p>
                        <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                    </div>              
                </div>
            </div>
        </section>
    )
}