import styled from 'styled-components';
import { MEDIA_QUERIES_TABLET } from '../../constants';

export const StyledCard = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 3px 5px gray;
    border: 1px solid black;

    @media only screen and (min-width: ${MEDIA_QUERIES_TABLET}) {
        margin: 60px auto;
        width: 70%;
    }
`;
