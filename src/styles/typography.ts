import styled, { css } from "styled-components";

interface ITitleProps {
    textColor: string;
}

export const StyledTitle = styled.h2<ITitleProps>`
    font-size: 3rem;
    font-weight: 700;

    ${({ textColor }) => {
        switch (textColor) {
            case "grey":
                return css`
                    color: var(--grey-300);
                `;
            case "cyan":
                return css`
                    color: var(--cyan-900);
                `;
        }
    }}
`;
export const StyledParagraphOne = styled.p`
    font-size: 1rem;
    color: var(--grey-300);
    margin-left: 1rem;
    text-align: justify;
`;
