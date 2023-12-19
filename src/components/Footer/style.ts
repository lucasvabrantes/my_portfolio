import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    gap: 1rem;
    width: 100%;
    height: 150px;
    justify-content: center;
    border: 1.5px solid var(--grey-300);
    border-radius: 0px 0px 10px 10px;
    border-top: none;
    align-items: center;
    align-content: center;
    padding: 2rem;
    backdrop-filter: blur(3px);
    margin-bottom: 2rem;
`;
