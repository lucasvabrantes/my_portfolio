import { StyledSection } from "./style";
import { StyledParagraphOne, StyledTitle } from "@/styles/typography";
import { repositoriesDatabase } from "@/database";
import Image from "next/image";
import { useRef } from "react";

export const Portfolio = () => {
    const list = useRef<HTMLUListElement>(null);

    const scrollLeft = () => {
        list.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    const scrollRight = () => {
        list.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    return (
        <StyledSection id="portfolio">
            <div className="portfolioHeader">
                <div>
                    <StyledTitle textColor="cyan">03.</StyledTitle>
                    <StyledTitle textColor="grey">Projetos</StyledTitle>
                </div>
            </div>
            <div className="listContainer">
                <StyledParagraphOne>
                    Abaixo deixo alguns projetos que desenvolvi durante meu
                    processo de estudo, bem como projetos independentes. Em
                    todos aplico os conceitos e princípios inerentes as boas
                    práticas de programação:
                </StyledParagraphOne>
                <button className="rightArrow" onClick={scrollLeft}>
                    <Image
                        width={65}
                        height={45}
                        alt="seta para movimentar para a direita o portfólio"
                        src="/images/arrowRight.png"
                    />
                </button>
                <ul ref={list ? list : null}>
                    {repositoriesDatabase.map((repo) => {
                        return (
                            <li key={repo.id}>
                                <Image
                                    className="repoImg"
                                    src={repo.img}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                                <p className="repoName">{repo.name}</p>
                                <p className="repoDescription">
                                    {repo.description}
                                </p>
                                <div className="footerItem">
                                    <a href={repo.url_deploy} target="_blank">
                                        <Image
                                            src="/images/url.svg"
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                    <a href={repo.url_repo} target="_blank">
                                        <Image
                                            className="gitLink"
                                            src="/images/github.svg"
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <button className="leftArrow" onClick={scrollRight}>
                    <Image
                        width={65}
                        height={45}
                        alt="seta para movimentar para a esquerda o portfólio"
                        src="/images/arrowLeft.png"
                    />
                </button>
            </div>
        </StyledSection>
    );
};
