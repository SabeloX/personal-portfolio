import { Button, Container, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { ComponentShell } from "../component-shell"
import { ProjectsDocument } from "../../lib/database";

export interface ProjectsProps {
    textColor: string;
    lightShadeColor: string;
    mainColor: string;
    projects: ProjectsDocument[];
    theme: string;
}

export const Projects = ({ textColor, lightShadeColor, mainColor, projects, theme } : ProjectsProps) => {
    return (
        <ComponentShell
            textColor={textColor}
            heading="Projects"
            sx={{
                justifyContent: "center"
            }}
            id="projects"
        >
            {
                projects.map((item, index) => (
                    <Container
                        key={index}
                        sx={{
                            display: "flex",
                            backgroundColor: mainColor,
                            width: { md: "780px", xs: "100%" },
                            borderRadius: "20px",
                            padding: "0 !important",
                            flexDirection: {md: "row", xs: "column"},
                            minHeight: "400px",
                            // gap: "40px",
                            margin: "0 !important",
                            placeSelf: "center",
                            boxShadow: `2px 2px 12px ${theme === "dark" ? "rgba(255,255,255,30%)" : "rgba(0,0,0,30%)"}`,
                            border: `1px solid ${theme === "dark" ? "#fff" : "#000"}`,
                        }}
                    >
                        <Container
                            sx={{
                                width: { md: "50%", xs: "100%" },
                                display: "flex",
                                justifyContent: "center",
                                padding: { md: "0 !important", xs: "30px" },
                                order: { md: index % 2 === 0 ? 2 : 0, xs: 0 },
                                alignItems: { xs: "center"}
                            }}
                        >
                            <Image
                                src={item.image}
                                width={300}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px",
                                    minWidth: "200px",
                                    boxShadow: "2px 2px 12px rgba(0,0,0,30%)",
                                }}
                                loading="lazy"
                                height={300}
                                alt="project image"
                            />
                        </Container>
                        <Container
                            sx={{
                                width: { md: "50%", xs: "100%" },
                                display: "flex",
                                flexDirection: "column",
                                padding: "30px",
                                gap: "20px",
                                overflow: "auto",
                            }}
                        >
                            <Typography
                                variant="h4"
                                color={textColor}
                                className="heading"
                                sx={{
                                    textDecoration: "underline"
                                }}
                            >
                                <a
                                    href={item.demo}
                                    target="_blank"
                                >
                                    {item.title}
                                </a>
                            </Typography>
                            <Container
                                sx={{
                                    padding: "0 !important"
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    color={textColor}
                                    className="text"
                                >
                                    {item.description}
                                </Typography>
                                <Container
                                    sx={{
                                        padding: "0 !important"
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        color={textColor}
                                        className="text"
                                    >
                                        Concepts:
                                    </Typography>
                                    <List
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap"
                                        }}
                                    >
                                        {
                                            item.concepts.map((concept, index) => (
                                                <ListItem
                                                    key={index}
                                                    sx={{
                                                        width: "unset"
                                                    }}
                                                >
                                                    <Typography
                                                        className="text"
                                                        color={textColor}
                                                        fontSize={14}
                                                    >
                                                        {concept}
                                                    </Typography>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Container>
                            </Container>
                            <Container
                                sx={{
                                    padding: "0 !important"
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    color={textColor}
                                    className="text"
                                >
                                    Tools I used:
                                </Typography>
                                <List
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }}
                                >
                                    {
                                        item.tools.map((tool, index) => (
                                            <ListItem
                                                key={index}
                                                sx={{
                                                    width: "unset"
                                                }}
                                            >
                                                <Typography
                                                    className="text"
                                                    color={textColor}
                                                    fontSize={14}
                                                >
                                                    {tool}
                                                </Typography>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Container>
                            {/* <Container
                                sx={{
                                    gap: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "0 !important"
                                }}
                            >
                                {
                                    [
                                        {
                                            text: "View",
                                            url: item.demo
                                        },
                                        {
                                            text: "Source code",
                                            url: item.source
                                        }
                                    ].map((item, index) => (
                                        <Button
                                            key={index}
                                            sx={{
                                                backgroundColor: `${mainColor} !important`,
                                                width: "200px",
                                                borderRadius: "15px",
                                                height: "35px",
                                                color: textColor,
                                                boxShadow: `2px 2px 12px ${theme === "dark" ? "rgba(255,255,255,30%)" : "rgba(0,0,0,30%)"}`,
                                                textTransform: "unset !important",
                                                border: `1px solid ${theme === "dark" ? "#fff" : "#000"}`,
                                                padding: "10px 0"
                                            }}
                                        >
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                style={{
                                                    height: "inherit",
                                                    width: "inherit",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                            >
                                                {item.text}
                                            </a>
                                        </Button>
                                    ))
                                }
                            </Container> */}
                        </Container>
                    </Container>
                ))
            }
        </ComponentShell>
    )
}