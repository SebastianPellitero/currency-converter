import styled from 'styled-components';
import {
    MEDIA_QUERIES_TABLET,
    WHITE_COLOR,
    WHITE_GRAY_COLOR,
    BLACK_COLOR,
    LIGHT_GRAY_COLOR,
    GHOST_GRAY_COLOR
} from '../../constants';

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
    width: 100%;

    @media only screen and (min-width: ${MEDIA_QUERIES_TABLET}) {
        flex-direction: row;
        align-items: baseline;
    }
`;

export const MainCurrencySection = styled.article`
    display: flex;
    flex-direction: column;
`;

export const StyledSelect = styled.select`
    width: 100%;
    height: 35px;
    background: ${WHITE_COLOR};
    color: ${WHITE_GRAY_COLOR};
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
    width: 300px;

    option {
        color: ${BLACK_COLOR};
        background: ${WHITE_COLOR};
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

export const StyledResult = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    flex-direction: column;

    @media only screen and (min-width: ${MEDIA_QUERIES_TABLET}) {
        flex-direction: row;
    }

    .from-currency {
        width: 40%;
        font-size: 18px;
        input {
            -webkit-appearance: none;
            -moz-appearance: textfield;
            text-align: center;
            margin-right: 5px;
            padding: 5px 0 7px;
            border: 1px solid transparent;
            border-bottom-color: ${LIGHT_GRAY_COLOR};
            transition: 0.4s;
            font-size: 18px;

            @media only screen and (min-width: ${MEDIA_QUERIES_TABLET}) {
                text-align: right;
            }
        }
        input:focus {
            padding: 5px 1px 7px;
            transition: 0.4s;
        }
    }

    .to-currency {
        display: flex;
        justify-content: center;
        height: 53px;
        width: 40%;
    }
`;

export const StyledToggleButton = styled.button`
    background-color: ${GHOST_GRAY_COLOR};
    border: none;
    padding: 15px 32px;
    margin-top: 25px;
`;
