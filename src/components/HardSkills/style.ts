import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    gap: 2rem;
    width: 100%;
    max-width: 900px;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    .hardSkillsHeader {
        width: 100;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        margin-left: 1rem;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3rem;
        margin-left: 1rem;
        justify-content: flex-start;

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
