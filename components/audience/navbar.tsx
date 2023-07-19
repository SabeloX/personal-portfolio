import { AppBar, Box, Collapse, Container, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Close } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Colours } from "@/colours";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link"

const locations = [
    {
        label: "Home",
        path: "home"
    },
    {
        label: "About",
        path: "about"
    },
    {
        label: "Skills",
        path: "skills"
    },
    {
        label: "Projects",
        path: "projects"
    },
    {
        label: "Contact",
        path: "contact"
    },
]

const logoText = "Sabelo";

export interface NavbarProps {
    setTheme: (value: "dark" | "light") => void;
    lightShadeColor: string;
}

export const Navbar = () => {
    const textColor = Colours.red;
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLAnchorElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const navbarRef = useRef<HTMLElement>(null);
    const scrollEvent = () => {
        if (window.scrollY >= 85) {
            if (navbarRef.current) {
                navbarRef.current.classList.add("affix")
                navbarRef.current.classList.remove("affix-top")
            }
        }
        else {
            if (navbarRef.current) {
                navbarRef.current.classList.add("affix-top")
                navbarRef.current.classList.remove("affix")
            }
        }
    }
    useEffect(() => {
        scrollEvent();
        window.addEventListener("scroll", scrollEvent)
    });
    return (
        <nav ref={navbarRef} className="custom-navbar" data-spy="affix" data-offset-top="20">
            <div className="container">
                <a className="logo" href="#">Sabelo</a>         
                <ul ref={ulRef} className="nav">
                    <li className="item">
                        <a className="link" href="#home">Home</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#about">About</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#service">Skills</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#contact">Contact</a>
                    </li>
                    <li className="item ml-md-3">
                        <a href="components.html" className="btn btn-primary">Components</a>
                    </li>
                </ul>
                <div
                    onClick={() => {
                        if (menuRef.current && ulRef.current) {
                            menuRef.current.classList.toggle("is-active")
                            ulRef.current.classList.toggle("show")
                        }
                    }}
                >
                    <Link
                        href=""
                        id="nav-toggle"
                        className="hamburger hamburger--elastic"
                        ref={menuRef}
                    >
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </Link>
                </div>
            </div>          
        </nav>
    )
}