import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 50px 50px 0px 50px;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    @media (max-width: 768px) {
        padding: 40px 50px;
    }

    .aboutMeHeader {
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

    .aboutMeText {
        display: flex;
        flex-direction: column;
    }
`;
