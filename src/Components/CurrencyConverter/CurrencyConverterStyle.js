import styled from 'styled-components';

export const StyledForm = styled.form`
    margin: 0 auto;
    padding: 20px;
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
    width: 100%;
    box-sizing: border-box;
`;

export const MainCurrencySection = styled.article`
    display: flex;
    flex-direction: column;

    button {
        margin: 20px 0;
    }
`;

export const StyledSelect = styled.select`
    width: 100%;
    height: 35px;
    background: #ffffff;
    color: #808080;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
    width: 300px;

    option {
        color: black;
        background: white;
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
    .from-currency {
        width: 40%;
        font-size: 18px;
        input {
            -webkit-appearance: none;
            -moz-appearance: textfield;
            text-align: right;
            margin-right: 5px;
            border: 0;
            padding: 5px 0 7px;
            border: 1px solid transparent;
            border-bottom-color: #ccc;
            transition: 0.4s;
            font-size: 18px;
        }
        input:focus {
            padding: 5px 1px 7px;
            transition: 0.4s;
        }
    }

    .to-currency {
        width: 40%;
    }
`;

export const StyledToggleButton = styled.button`
    background-color: ghostwhite;
    border: none;
    padding: 15px 32px;
`;
