import Image from "next/image";

export interface AboutProps {
    aboutText: string;
    aboutImage: string;
}

export const About = ({ aboutText, aboutImage } : AboutProps) => {
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
                        <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                    </div>              
                </div>
            </div>
        </section>
    )
}