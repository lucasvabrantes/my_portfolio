import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 50px 0px;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
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
`;

export const StyledForm = styled.form`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height: 500px;
    margin-left: 1rem;

    input,
    textarea {
        border-radius: 10px;
        border: 1px solid var(--grey-300);
        outline: transparent;
        transition: 0.4s;
    }

    input {
        padding: 1rem;

        &:focus {
            box-shadow: 5px 4px 30px rgba(34, 184, 207, 0.4);
        }
    }

    textarea {
        width: 100%;
        height: 200px;
        padding: 1rem;
        resize: none;

        &:focus {
            box-shadow: 5px 5px 25px rgba(34, 184, 207, 0.4);
        }
    }

    button {
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
