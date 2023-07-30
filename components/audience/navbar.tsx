import { AppBar, Box, Collapse, Container, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Close } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Colours } from "@/colours";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link"
import { useMediaQuery } from "@mantine/hooks";

export interface NavbarProps {
    largeScreen: boolean;
}

export const Navbar = ({ largeScreen } : NavbarProps) => {
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
        const timer = setTimeout(() => {
            if (ulRef.current) {
                largeScreen ? ulRef.current.classList.add("show") : ulRef.current.classList.remove("show")
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [largeScreen]);
    useEffect(() => {
        scrollEvent();
        window.addEventListener("scroll", scrollEvent)
    });
    return (
        <nav ref={navbarRef} className="custom-navbar" data-spy="affix" data-offset-top="20">
            <div className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <a
                    className="logo"
                    href="#"
                >
                    Sabelo
                </a>         
                <ul ref={ulRef} className="nav">
                    {
                        [
                            { label: "Home", route: "#home" },
                            { label: "About", route: "#about" },
                            { label: "Skills", route: "#service" },
                            { label: "Projects", route: "#portfolio" },
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="item"
                                onClick={() => {
                                    if (menuRef.current && ulRef.current) {
                                        menuRef.current.classList.toggle("is-active")
                                        ulRef.current.classList.toggle("show")
                                    }
                                }}
                            >
                                <a className="link" href={item.route}>{item.label}</a>
                            </li>
                        ))
                    }
                    <li
                        onClick={() => {
                            if (menuRef.current && ulRef.current) {
                                menuRef.current.classList.toggle("is-active")
                                ulRef.current.classList.toggle("show")
                            }
                        }}
                        className="item ml-md-3"
                    >
                        <a className="btn btn-primary" href="#contact">Contact</a>
                    </li>
                </ul>
                {
                    !largeScreen &&
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
                }
                </div>          
        </nav>
    )
}