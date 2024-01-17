import Link from "next/link";
import {
    ContactsContainer,
    EmailContainer,
    StyledLink,
    WelcomeSection,
    WelcomeTextContainer,
} from "./style";
import Image from "next/image";

export const WelcomeContainer = () => {
    return (
        <WelcomeSection>
            <ContactsContainer>
                <StyledLink
                    href="https://github.com/lucasvabrantes"
                    target="_blank"
                >
                    <Image
                        src="/images/git.svg"
                        id="git"
                        width={50}
                        height={50}
                        alt="link para o github"
                    />
                </StyledLink>
                <StyledLink
                    href="https://www.linkedin.com/in/lucasvabrantes/"
                    target="_blank"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/images/linkedin.svg"
                        id="linkedin"
                        alt="link para o linkedin"
                    />
                </StyledLink>
                <StyledLink href="https://t.me/lucasabrts" target="_blank">
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
                    <WelcomeTextContainer>
                        <div>
                            <h1>Oi, Me chamo</h1>
                            <p>Lucas.</p>
                        </div>

                        <p>Sou Desenvolvedor Web</p>
                    </WelcomeTextContainer>

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
                        Eu sou um desenvolvedor Full Stack formado pela Kenzie
                        Academy Brasil.
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
