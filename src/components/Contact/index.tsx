import { StyledParagraphOne, StyledTitle } from "../../styles/typography";
import { StyledSection } from "./style";

export const Contact = () => {
    return (
        <StyledSection id="contact">
            <div className="contactHeader">
                <StyledTitle textColor="cyan">04.</StyledTitle>
                <StyledTitle textColor="grey">Contato</StyledTitle>
            </div>
            <StyledParagraphOne>
                Fique a vontade para me mandar mensagem caso tenha alguma
                pergunta ou projeto para realizar. Mas se quiser apenas dar um
                "Oi" e conversar sobre programação. Fique a vontade também para
                me contactar.
            </StyledParagraphOne>
            <a href="mailto:lucasbrts@icloud.com" className="contact">
                Mandar E-mail
            </a>
        </StyledSection>
    );
};
