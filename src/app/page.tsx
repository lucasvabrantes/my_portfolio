"use client";
import { GlobalStyle } from "@/styles/global";
import { StyledBody } from "./style";
import {
    Header,
    AboutMe,
    Contact,
    HardSkills,
    Portfolio,
    WelcomeContainer,
    Footer,
} from "../components";
import { useState } from "react";

export default function Home() {
    const [colorChange, setColorChange] = useState<boolean>(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 70) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <>
            <GlobalStyle />
            <StyledBody>
                <div>
                    <Header colorChange={colorChange} />
                    <WelcomeContainer />
                    <AboutMe />
                    <HardSkills />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </div>
            </StyledBody>
        </>
    );
}
