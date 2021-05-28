import styled from 'styled-components';
import {
    MEDIA_QUERIES_TABLET,
    WHITE_GRAY_COLOR,
    BLACK_COLOR,
    WHITE_COLOR
} from '../../constants';

export const StyledCard = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 3px 5px ${WHITE_GRAY_COLOR};
    border: 1px solid ${BLACK_COLOR};

    @media only screen and (min-width: ${MEDIA_QUERIES_TABLET}) {
        margin: 60px auto;
        width: 70%;
    }
`;

export const StyledChartContainer = styled.article`
    height: 0px;
    margin: 0 auto;
    visibility: hidden;
    opacity: 0;
    width: 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${WHITE_COLOR};
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
`;
