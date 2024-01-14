import { StyledSection } from "./style";
import { StyledParagraphOne, StyledTitle } from "@/styles/typography";
import { repositoriesDatabase } from "@/database";
import Image from "next/image";

export const Portfolio = () => {
    return (
        <StyledSection id="portfolio">
            <div className="portfolioHeader">
                <div>
                    <StyledTitle textColor="cyan">03.</StyledTitle>
                    <StyledTitle textColor="grey">Projetos</StyledTitle>
                </div>
            </div>
            <div>
                <StyledParagraphOne>
                    Abaixo deixo alguns projetos que desenvolvi durante meu
                    processo de estudo, bem como projetos independentes. Em
                    todos aplico os conceitos e princípios inerentes as boas
                    práticas de programação:
                </StyledParagraphOne>
                <ul>
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
                                            width={150}
                                            height={150}
                                        />
                                    </a>
                                    <a href={repo.url_repo} target="_blank">
                                        <Image
                                            src="/images/github.svg"
                                            alt=""
                                            width={250}
                                            height={250}
                                        />
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </StyledSection>
    );
};
