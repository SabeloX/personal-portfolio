import { Button, Container, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { ComponentShell } from "../component-shell"
import { ProjectsDocument } from "../../lib/database";

export interface ProjectsProps {
    projects: ProjectsDocument[];
}

export const Projects = ({ projects } : ProjectsProps) => {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    {
                        projects.map((project, index) => (
                            <div
                                key={index}
                                className="col-md-4"
                            >
                                <a href="#" className="portfolio-card">
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
                                            <h4>Web Designing</h4>
                                            <p className="font-weight-normal">Category: Web Templates</p>
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