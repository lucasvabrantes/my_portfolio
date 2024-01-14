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
        width: 100%;
        div {
            display: flex;
            height: 80px;
            gap: 2rem;
            align-items: center;
            margin-left: 16px;

            h2:first-child {
                width: 50px;
            }

            h2:last-child {
                width: 300px;
            }
        }
    }

    ul {
        display: flex;
        height: 560px;
        justify-content: space-between;
        flex-direction: row;
        margin-left: 1rem;
        gap: 2rem;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;

        li {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            min-height: 400px;
            width: 330px;
            height: 500px;
            border: 1px solid var(--grey-300);
            padding: 1rem;
            border-radius: 10px;
            transition: 0.5s;
            margin: 1rem;

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
                width: 100%;
                font-family: "Inconsolata", sans-serif;
            }
            .footerItem {
                display: flex;
                justify-content: space-between;

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
