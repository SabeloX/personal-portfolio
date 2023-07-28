import { Button, Container, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { ComponentShell } from "../component-shell"
import { ProjectsDocument } from "../../lib/database";
import { Flex } from "@mantine/core";

export interface ProjectsProps {
    projects: ProjectsDocument[];
}

export const Projects = ({ projects } : ProjectsProps) => {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Projects</h6>
                <div className="row">
                    {
                        projects.map((project, index) => (
                            <div
                                key={index}
                                className="col-md-4"
                            >
                                <a className="portfolio-card">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={`${project.image}`}
                                        className="portfolio-card-img"
                                        alt=""
                                        style={{
                                            objectFit: "contain"
                                        }}
                                    />
                                    <span className="portfolio-card-overlay">
                                        <span className="portfolio-card-caption">
                                            <h4>{project.title}</h4>
                                            <p className="font-weight-normal">{project.description}</p>
                                            <Flex
                                                justify="center"
                                                gap={20}
                                            >
                                                <a href={project.demo} target="_blank" className="btn btn-primary">View</a>
                                                <a href={project.source} target="_blank" className="btn btn-primary">Code</a>
                                            </Flex>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}