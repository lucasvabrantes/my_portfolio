import styled from "styled-components";

export const StyledBody = styled.div`
    display: flex;
    background-image: url("https://i.imgur.com/uJ7fjbj.jpg");
    background-repeat: repeat;
    background-position: center;
    width: 100vw;
    position: relative;

    div:first-child {
        max-width: 900px;
        margin: 0 auto;
    }

    .scrollHide {
        background: rgba(34, 184, 207, 0.35);
        padding: 10px 0px;
    }

    .numberChange {
        color: var(--orange-100);
        filter: brightness(0.8);
    }
`;
