import { StyledSection } from "./style";
import GitHub from "../../assets/github.svg";
import Url from "../../assets/url.svg";
import { StyledParagraphOne, StyledTitle } from "@/styles/typography";
import { repositoriesDatabase } from "@/database";

export const Portfolio = () => {
    return (
        <StyledSection id="portfolio">
            <div className="portfolioHeader">
                <StyledTitle textColor="cyan">03.</StyledTitle>
                <StyledTitle textColor="grey">Portfólio</StyledTitle>
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
                                <img
                                    className="repoImg"
                                    src={repo.img}
                                    alt=""
                                />
                                <p className="repoName">{repo.name}</p>
                                <p className="repoDescription">
                                    {repo.description}
                                </p>
                                <div className="footerItem">
                                    <a href={repo.url_deploy} target="_blank">
                                        <img src={Url} alt="" />
                                    </a>
                                    <a href={repo.url_repo} target="_blank">
                                        <img src={GitHub} alt="" />
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
