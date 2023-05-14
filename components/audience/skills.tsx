import { Box, Container, Typography } from "@mui/material"
import { ComponentShell } from "../component-shell"
import { SkillsDocument } from "../../lib/database";
import Image from "next/image";

export interface SkillsProps {
    textColor: string;
    skills: SkillsDocument[];
    mainColor: string;
    theme: string;
}

export const Skills = ({textColor, skills, mainColor, theme}: SkillsProps) => {
    return (
        <ComponentShell
            heading="Skills"
            textColor={textColor}
            id="skills"
        >
            <Container
                sx={{
                    padding: "0px !important",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "20px",
                }}
            >
                {
                    skills.map((item, index) => (
                        <Box
                            key={item._id + index}
                            sx={{
                                backgroundColor: mainColor,
                                borderRadius: "20px",
                                boxShadow: `2px 2px 12px ${theme === "dark" ? "rgba(255,255,255,30%)" : "rgba(0,0,0,30%)"}`,
                                border: `1px solid ${theme === "dark" ? "#fff" : "#000"}`,
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                height: "400px",
                                width: { sm: "400px" }
                            }}
                        >
                            <Typography
                                className="heading"
                                variant="h5"
                                fontSize={30}
                                color={textColor}
                                sx={{
                                    textDecoration: "underline"
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Container
                                sx={{
                                    padding: "0 !important",
                                    display: "flex",
                                    // flexDirection: "column",
                                    flexWrap: "wrap",
                                    // minHeight: "160px",
                                    gap: "10px"
                                }}
                            >
                                {
                                    item.data.map((skill: any, index: number) => (
                                        <Container
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                                padding: "0 !important",
                                                width: "unset"
                                            }}
                                        >
                                            {skill.icon && <Image
                                                src={skill.icon}
                                                width={30}
                                                height={30}
                                                alt="icon"
                                            />}
                                            <Typography
                                                key={index + skill}
                                                variant="body1"
                                                className="text"
                                                sx={{
                                                    color: textColor
                                                }}
                                                fontSize={22}
                                                lineHeight={1.75}
                                            >
                                                { skill.skill }
                                            </Typography>
                                        </Container>
                                    ))
                                }
                            </Container>
                        </Box>
                    ))
                }
            </Container>
        </ComponentShell>
    )
}