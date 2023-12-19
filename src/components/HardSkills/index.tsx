import { StyledSection } from "./style";
import HTML from "../../assets/skillsIcons/html.svg";
import GIT from "../../assets/skillsIcons/git.svg";
import CSS from "../../assets/skillsIcons/css.svg";
import JS from "../../assets/skillsIcons/js.svg";
import NODE from "../../assets/skillsIcons/node.svg";
import PSQL from "../../assets/skillsIcons/psql.svg";
import REACT from "../../assets/skillsIcons/react.svg";
import TS from "../../assets/skillsIcons/ts.svg";
import EX from "../../assets/skillsIcons/express.svg";
import { StyledTitle } from "@/styles/typography";

export const HardSkills = () => {
    return (
        <StyledSection id="skills">
            <div className="hardSkillsHeader">
                <StyledTitle textColor="cyan">02.</StyledTitle>
                <StyledTitle textColor="grey">Skills</StyledTitle>
            </div>
            <ul>
                <li>
                    <img src={HTML} alt="" />
                </li>
                <li>
                    <img src={CSS} alt="" />
                </li>
                <li>
                    <img src={JS} alt="" />
                </li>
                <li>
                    <img src={TS} alt="" />
                </li>
                <li>
                    <img src={REACT} alt="" />
                </li>
                <li>
                    <img src={NODE} alt="" />
                </li>
                <li>
                    <img src={EX} alt="" />
                </li>

                <li>
                    <img src={PSQL} alt="" />
                </li>
                <li>
                    <img src={GIT} alt="" />
                </li>
            </ul>
        </StyledSection>
    );
};
