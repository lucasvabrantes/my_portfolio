import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 50px 50px 0px 50px;
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
