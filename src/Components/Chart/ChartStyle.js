import styled from 'styled-components';
import { MEDIA_QUERIES_TABLET } from '../../constants';

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
        height: 70%;
        padding: 20px;
        opacity: initial;
        visibility: initial;
        width: 100%;

        @media only screen and (min-width: ${MEDIA_QUERIES_TABLET}) {
            height: 500px;
            width: 60%;
        }
    }

    &.chart {
        max-height: 500px;
    }
`;

export const StyledDatePicker = styled.p`
    padding: 5px 0 10px;
    text-align: center;
`;

export const StyledChartContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
