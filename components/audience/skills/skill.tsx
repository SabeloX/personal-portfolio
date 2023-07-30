import { SkillsDocument } from "@/lib/database"
import { Carousel } from "@mantine/carousel";
import { Divider, Flex, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export type SkillProps = {
    skill: SkillsDocument;
}

export const Skill = ({ skill } : SkillProps) => {
    const autoPlayer = useRef(Autoplay({ delay: 1000 }));
    return (
        <div
            className="col-md-6 col-lg-4"
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
                            onMouseEnter={autoPlayer.current.stop}
                            onMouseLeave={autoPlayer.current.reset}
                            plugins={[autoPlayer.current]}
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
    )
}