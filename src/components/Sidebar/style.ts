import styled from "styled-components";

export const StyledSidebar = styled.div`
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
    position: absolute;
    animation: showUp 0.5s normal;

    a {
        text-decoration: none;
        font-size: 3rem;
    }

    @keyframes showUp {
        from {
            transform: translateY(-100%);
        }

        to {
            transform: translateY(0%);
        }
    }
`;
