import Image from "next/image";
import { ProjectsDocument } from "../../../lib/database";
import { Flex } from "@mantine/core";
import { Project } from "./project";

export interface ProjectsProps {
    projects: ProjectsDocument[];
    largeScreen: boolean;
}

export const Projects = ({ projects, largeScreen } : ProjectsProps) => {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Projects</h6>
                <div className="row">
                    {
                        projects.map((project, index) => (
                            <Project
                                key={index}
                                project={project}
                                largeScreen={largeScreen}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}