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

    .hardSkillsHeader {
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

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, 85px);
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3rem;
        margin-left: 1rem;
        justify-content: space-between;

        li {
            display: flex;
            transition: 0.4s;
        }

        li:hover {
            filter: brightness(1.2);
            transform: scale(1.2);
        }
    }
`;
