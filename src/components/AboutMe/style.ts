import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0px 50px 0px 50px;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    @media (max-width: 768px) {
        padding: 20px 50px;
    }

    .aboutMeHeader {
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

    .aboutMeText {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }
`;
