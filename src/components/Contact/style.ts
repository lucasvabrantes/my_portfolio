import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    .contactHeader {
        width: 100px;
        height: 80px;
        display: flex;
    }

    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        cursor: pointer;
        background-color: var(--cyan-500);
        color: white;
        border-radius: 5px;
        width: 170px;
        height: 40px;
        margin: 0rem 3rem;
        transition: 0.5s;
        align-self: center;
        text-decoration: none;

        &:hover {
            background-color: var(--orange-100);
        }
    }
`;
