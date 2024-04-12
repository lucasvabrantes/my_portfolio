import { StyledParagraphOne, StyledTitle } from "../../styles/typography";
import { StyledForm, StyledSection } from "./style";

export const Contact = () => {
    return (
        <StyledSection id="contact">
            <div className="contactHeader">
                <div>
                    <StyledTitle textColor="cyan">04.</StyledTitle>
                    <StyledTitle textColor="grey">Contato</StyledTitle>
                </div>
            </div>

            <StyledParagraphOne>
                Fique a vontade para me mandar mensagem caso tenha alguma
                pergunta ou projeto para realizar. Mas se quiser apenas dar um
                "Oi" e conversar sobre programação, também é bem-vindo.&#128512;
            </StyledParagraphOne>
            <StyledForm
                action="https://formsubmit.co/lucaslvsa@hotmail.com"
                method="POST"
                target="_blank" 
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Digite aqui seu nome"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Digite aqui seu e-mail"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Gostaria de contratá-lo para realização de um projeto..."
                    required
                />
                <input
                    type="hidden"
                    name="_next"
                    value="https://lucasabrantes.vercel.app"
                ></input>
                <button type="submit">Enviar</button>
            </StyledForm>

            
        </StyledSection>
    );
};
