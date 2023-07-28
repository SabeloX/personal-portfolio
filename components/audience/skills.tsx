import { Divider, Flex, Text } from "@mantine/core";
import { SkillsDocument } from "../../lib/database";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export interface SkillsProps {
    skills: SkillsDocument[];
}

export const Skills = ({ skills }: SkillsProps) => {
    const inhancedSkills = skills.map(skill => { return { ...skill, autoPlayer: useRef(Autoplay({ delay: 1000 }))}})
    return (
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What Skills Do I Have ?</p>
                <h6 className="section-title text-blue mb-6">Skills</h6>

                <div className="row">
                    {
                        inhancedSkills.map((skill, index) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={index}
                            >
                                <div className="service-card">
                                    <div className="body">
                                        <Image
                                            width={55}
                                            height={55}
                                            src={skill.icon}
                                            alt="skill category icon"
                                            className="icon"
                                        />
                                        <h6 className="title">{skill.title}</h6>
                                        <div className="subtitle" style={{ display: "flex", gap: "10px" }}>
                                            <Carousel
                                                slideGap="md"
                                                loop
                                                draggable={false}
                                                withControls={false}
                                                align="start"
                                                onMouseEnter={skill.autoPlayer.current.stop}
                                                onMouseLeave={skill.autoPlayer.current.reset}
                                                plugins={[skill.autoPlayer.current]}
                                                mx="auto"
                                                maw={360}
                                            >
                                                {
                                                    skill.data.map((item, index) => (
                                                        <Carousel.Slide
                                                            key={index}
                                                            sx={{
                                                                flex: 1,
                                                            }}
                                                        >
                                                            <Flex
                                                                align="center"
                                                                gap={20}
                                                                sx={{
                                                                    marginLeft: "30px",
                                                                }}
                                                            >
                                                                <Image
                                                                    src={item.icon as string}
                                                                    alt="skill icon"
                                                                    width={50}
                                                                    height={50}
                                                                />
                                                                <Text>{item.skill}</Text>
                                                                <Divider
                                                                    sx={{
                                                                        marginLeft: "30px"
                                                                    }}
                                                                    orientation="vertical"
                                                                />
                                                            </Flex>
                                                        </Carousel.Slide>
                                                    ))
                                                }
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                    {/* <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/responsive.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon">
                                <h6 className="title">Sapiente</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/toolbox.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon">
                                <h6 className="title">Placeat</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <Image width={55} height={55} src="/icons/fe.png" alt="" className="icon"/>
                                <h6 className="title">Iusto</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}