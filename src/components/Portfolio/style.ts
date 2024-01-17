import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 50px 0px 50px;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    div > p {
        margin-left: 1rem;
    }

    .portfolioHeader {
        width: 100%;
        div {
            display: flex;
            height: 80px;
            gap: 10px;
            align-items: center;
            margin-left: 16px;

            h2:first-child {
                font-size: 2.5rem;

                @media (max-width: 500px) {
                    font-size: 2rem;
                }
            }

            h2:last-child {
                font-size: 2.5rem;

                @media (max-width: 500px) {
                    font-size: 2rem;
                }
            }
        }
    }

    .listContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .leftArrow {
            margin-top: 2rem;
            margin-left: 15px;
        }
    }

    ul {
        display: flex;
        height: 560px;
        justify-content: space-between;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        padding: 1rem;
        overflow-x: auto;
        overflow-y: hidden;
        margin: 0;

        li {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            min-height: 400px;
            width: 330px;
            height: 490px;
            border: 1px solid var(--grey-300);
            padding: 1rem;
            border-radius: 10px;
            transition: 0.5s;
            margin: 1rem;

            &:hover {
                box-shadow: 10px 10px 50px -18px rgba(0, 0, 0, 0.5);
                transform: scale(1.05);
            }
            .repoImg {
                width: 100%;
                height: 200px;
                border-radius: 10px;
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
                width: 258px;
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
