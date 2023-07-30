import { ProjectsDocument } from "@/lib/database"
import { Flex } from "@mantine/core";
import Image from "next/image";
import { useRef } from "react";

export type ProjectProps = {
    project: ProjectsDocument;
    largeScreen: boolean;
}

export const Project = ({ project, largeScreen }: ProjectProps) => {
    const cardRef = useRef<HTMLSpanElement>(null);
    return (
        <div
            className="col-md-4"
            onClick={() => {
                if (cardRef.current && !largeScreen) {
                    cardRef.current.classList.toggle("active")
                }
            }}
        >
            <a
                className="portfolio-card"
            >
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
                <span
                    className="portfolio-card-overlay"
                    ref={cardRef}
                >
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
    )
}