import { Box, Container, Typography } from "@mui/material"
import { ComponentShell } from "../component-shell"
import { SkillsDocument } from "../../lib/database";
import Image from "next/image";

export interface SkillsProps {
    skills: SkillsDocument[];
}

export const Skills = ({skills}: SkillsProps) => {
    return (
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What Skills Do I Have ?</p>
                <h6 className="section-title mb-6">Skills</h6>

                <div className="row">
                    {
                        skills.map((skill, index) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={index}
                            >
                                <div className="service-card">
                                    <div className="body">
                                        <Image width={55} height={55} src="/icons/fe.png" alt="" className="icon" />
                                        <h6 className="title">Adipisicing</h6>
                                        <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
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