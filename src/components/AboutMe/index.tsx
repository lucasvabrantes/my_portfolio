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
                    Desde criança sou fascinado por computadores. E tendo sempre
                    como sonho trabalhar com algo relacionado, iniciei minha
                    transição de carreira para a área da programação através do
                    curso de desenvolvimento Full Stack oportunizado pela Kenzie
                    Academy Brasil.
                </StyledParagraphOne>
                <StyledParagraphOne>
                    Após 1 ano de curso, e mais de 30 projetos desenvolvidos,
                    que abarcam tanto front-end quanto back-end, construí sólido
                    conhecimento em linguagens como JavaScript, TypeScript e
                    Python. Atualmente estou aprofundando meus conhecimentos em
                    TypeScript, ao mesmo tempo em que desenvolvo um projeto novo
                    e mais complexo para exercitar os novos conhecimentos.
                </StyledParagraphOne>
            </div>
        </StyledSection>
    );
};
