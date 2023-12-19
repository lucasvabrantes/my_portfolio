import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    @media (max-width: 768px) {
        padding: 40px 50px;
    }

    .aboutMeHeader {
        width: 100;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        margin-left: 1rem;
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
