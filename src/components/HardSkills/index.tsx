import Image from "next/image";
import { StyledSection } from "./style";
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
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/html.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/css.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/js.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/ts.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/react.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/node.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/express.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/psql.svg"
                        alt=""
                    />
                </li>

                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/next.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/nest.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/git.svg"
                        alt=""
                    />
                </li>
                <li>
                    <Image
                        width={100}
                        height={100}
                        src="/images/skillsIcons/python.svg"
                        alt=""
                    />
                </li>
            </ul>
        </StyledSection>
    );
};
