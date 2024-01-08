import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    div > p {
        margin-bottom: 3rem;
        margin-left: 1rem;
    }

    .portfolioHeader {
        width: 100;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        margin-left: 1rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        gap: 3rem;
        margin-left: 1rem;

        li {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            min-height: 400px;
            width: 350px;
            height: 1px;
            border: 1px solid var(--grey-300);
            padding: 1rem;
            border-radius: 10px;
            transition: 0.5s;

            &:hover {
                box-shadow: 10px 10px 80px -18px rgba(0, 0, 0, 0.5);
            }
            .repoImg {
                width: 100%;
                height: 200px;
            }

            .repoName {
                font-size: 0.875rem;
                font-weight: 700;
                font-family: "Inconsolata", sans-serif;
            }

            .repoDescription {
                font-family: "Inconsolata", sans-serif;
            }
            .footerItem {
                display: flex;
                justify-content: space-between;
                .folder {
                    width: 25px;
                    height: 25px;
                }

                a img {
                    min-width: 25px;
                    height: 25px;
                }

                a img:hover {
                    filter: brightness(1.2);
                }
            }
        }
    }
`;
