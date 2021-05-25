import styled from 'styled-components';

export const StyledChart = styled.article`
    height: 0px;
    margin: 0 auto;
    visibility: hidden;
    opacity: 0;
    width: 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: all 0.5s ease-in-out;

    &.chart-displayed {
        height: 350px;
        width: 800px;
        padding: 20px;
        top: 20px;
        opacity: initial;
        visibility: initial;
    }
`;
