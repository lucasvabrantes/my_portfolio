import { StyledParagraphOne, StyledTitle } from "@/styles/typography";
import { StyledSection } from "./style";

export const AboutMe = () => {
    return (
        <StyledSection id="about">
            <div className="aboutMeHeader">
                <StyledTitle textColor="cyan">01.</StyledTitle>
                <StyledTitle textColor="grey">Sobre mim</StyledTitle>
            </div>
            <div>
                <StyledParagraphOne>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aperiam iure tenetur perspiciatis nulla nemo est nobis animi
                    debitis! Doloribus consectetur aut, eligendi ipsam
                    exercitationem suscipit aperiam possimus expedita recusandae
                    similique!
                </StyledParagraphOne>
                <StyledParagraphOne>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi officia, voluptates nihil consectetur ipsum adipisci
                    laborum labore maiores beatae minus aut. Ratione recusandae
                    consequuntur laborum explicabo quidem eum sapiente harum.
                </StyledParagraphOne>
            </div>
        </StyledSection>
    );
};
