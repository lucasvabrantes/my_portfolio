import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 39px 0px;
    width: 100%;
    max-width: 900px;
    display: flex;
    background: transparent;
    backdrop-filter: blur(3px);
    justify-content: flex-end;
    border: 1.5px solid var(--grey-300);
    border-bottom: none;
    border-top: none;
    position: fixed;
    top: 0;
    z-index: 10;
    transition: 0.8s;

    @media (max-width: 768px) {
        padding: 15px 0px;
        background: rgba(34, 184, 207, 0.35);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: sticky;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: transparent;
    width: 100%;
    padding: 0px 15px;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 0;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 210px;
        height: 29px;
        cursor: pointer;
        text-decoration: none;

        @media (max-width: 768px) {
            display: none;
        }

        &:hover p {
            --p: 100%;
            --t: 0.3s;
            color: #fff;
        }

        span {
            font-size: 1rem;
            color: var(--cyan-500);
            font-family: var(--font-family);
        }

        p {
            font-size: 1rem;
            color: var(--grey-300);
            font-family: var(--font-family);

            background: linear-gradient(var(--cyan-500) 0 0) no-repeat
                var(--p, 200%) 100% / 200% var(--p, 0.08em);
            transition: 0.3s var(--t, 0s),
                background-position 0.3s calc(0.3s - var(--t, 0s));
        }
    }

    .bars {
        display: none;

        img {
            width: 25px;
            z-index: 99;
        }

        @media (max-width: 768px) {
            display: flex;
        }
    }
`;
