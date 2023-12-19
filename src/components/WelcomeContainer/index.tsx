import Link from "next/link";
import {
    ContactsContainer,
    EmailContainer,
    StyledLink,
    StyledWelcomeText,
    WelcomeSection,
} from "./style";
import Image from "next/image";

export const WelcomeContainer = () => {
    return (
        <WelcomeSection>
            <ContactsContainer>
                <StyledLink>
                    <Image
                        src="/images/git.svg"
                        id="git"
                        width={50}
                        height={50}
                        alt="link para o github"
                    />
                </StyledLink>
                <StyledLink>
                    <Image
                        width={50}
                        height={50}
                        src="/images/linkedin.svg"
                        id="linkedin"
                        alt="link para o linkedin"
                    />
                </StyledLink>
                <StyledLink>
                    <Image
                        width={50}
                        height={50}
                        src="/images/telegram.svg"
                        id="telegram"
                        alt="link para o telegram"
                    />
                </StyledLink>
                <div className="line"></div>
            </ContactsContainer>
            <div className="welcomeTextAndPhoto">
                <div>
                    <StyledWelcomeText>
                        Oi, Me chamo&nbsp;<p>Lucas</p>
                        <p>Sou Desenvolvedor Web</p>
                    </StyledWelcomeText>

                    <figure>
                        <Image
                            width={200}
                            height={200}
                            priority={true}
                            src="/images/me.png"
                            alt="Lucas Abrantes terminando o passeio no Museu do Amanhã(RJ). Ao fundo, pode-se ver um saxofonista tocando num lindo por do sol."
                        />
                        <EmailContainer>
                            <p>lucasabrts@icloud.com</p>
                            <div className="line"></div>
                        </EmailContainer>
                    </figure>
                </div>

                <div className="brieflyContainer">
                    <p>
                        Eu sou um desenvolvedor Front End formado pela Kenzie
                        Academy Brasil. Atualmente estudando backend com Node.js
                    </p>
                    <button className="contactMe">
                        <Image
                            width={50}
                            height={50}
                            src="/images/whatsapp.svg"
                            alt="Ícone Whatsapp"
                        />
                        <Link href="https://wa.me/5596991111911">Whatsapp</Link>
                    </button>
                </div>
            </div>
        </WelcomeSection>
    );
};
