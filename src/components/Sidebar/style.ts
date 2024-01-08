import styled from "styled-components";

interface ISideBar {
    isOpen: boolean;
}
export const StyledSidebar = styled.div<ISideBar>`
    background-color: rgba(34, 184, 207, 0.35);
    backdrop-filter: blur(3px);
    display: flex;
    margin-top: 35px;
    padding: 10px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
    top: 54.8px;
    position: absolute;
    /* animation: showUp 0.5s normal; */
    animation: ${({ isOpen }) => (isOpen ? "showUp" : "showOff")} 0.3s
        ease-in-out;
    transition: 0.4s;

    a {
        color: white;
        text-decoration: none;
        font-size: 3rem;
        -webkit-text-stroke: 1px black;
        &:active {
            color: white;
        }
    }

    @keyframes showUp {
        from {
            transform: translateY(-2%);
        }

        to {
            transform: translateY(0%);
        }
    }

    @keyframes showOff {
        from {
            transform: translateY(0%);
        }

        to {
            transform: translateY(-2%);
        }
    }
`;
