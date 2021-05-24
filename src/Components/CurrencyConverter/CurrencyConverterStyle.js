import styled from 'styled-components';

export const StyledForm = styled.form`
    margin: 0;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    align-items: baseline;
    justify-content: space-evenly;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
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