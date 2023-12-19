import { useState } from "react";
import { StyledHeader, StyledNav } from "./style";
import { Sidebar } from "../Sidebar";
import Image from "next/image";

type THeaderProps = {
    colorChange: boolean;
};

export const Header = ({ colorChange }: THeaderProps) => {
    const [menuBars, setMenuBars] = useState<boolean>(false);
    const toggleMode = () => {
        setMenuBars(!menuBars);
    };

    const detectScreenWidth = () => {
        if (window.screen.width >= 769) {
            setMenuBars(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("resize", detectScreenWidth);
    }

    return (
        <StyledHeader className={colorChange ? "scrollHide" : ""}>
            {menuBars && <Sidebar />}
            <StyledNav>
                <button onClick={toggleMode} className="bars show">
                    <Image
                        width={25}
                        height={25}
                        src="../../public/images/menuIcon.svg"
                        alt="Menu Bar"
                    />
                </button>
                <a href="#about">
                    <span className={colorChange ? "numberChange" : ""}>
                        01. &nbsp;
                    </span>
                    <p> &lt;about&gt;</p>
                </a>
                <a href="#skills">
                    <span className={colorChange ? "numberChange" : ""}>
                        02. &nbsp;
                    </span>
                    <p> &lt;skills&gt; </p>
                </a>
                <a href="#portfolio">
                    <span className={colorChange ? "numberChange" : ""}>
                        03. &nbsp;
                    </span>
                    <p> &lt;portfolio&gt; </p>
                </a>
                <a href="#contact">
                    <span className={colorChange ? "numberChange" : ""}>
                        04. &nbsp;
                    </span>
                    <p> &lt;contato&gt; </p>
                </a>
            </StyledNav>
        </StyledHeader>
    );
};
