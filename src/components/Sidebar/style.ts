import styled from "styled-components";

export const StyledSidebar = styled.div`
    display: flex;
    margin-top: 35px;
    padding: 10px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
    top: 55.24px;
    animation: showUp 0.4s;

    a {
        color: white;
        text-decoration: none;
        font-size: 3.5rem;
        -webkit-text-stroke: 2px black;
        &:active {
            color: white;
        }
    }

    @keyframes showUp {
        from {
            transform: translateY(-10%);
        }

        to {
            transform: translateY(0%);
        }
    }

    @keyframes showOut {
        from {
            transform: translateY(0%);
        }

        to {
            transform: translateY(-150%);
        }
    }
`;
