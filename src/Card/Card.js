import React from 'react'
import { StyledCard } from './CardStyle'

const Card = props => {

    const { fetchDefault } = props;

    const handleClick = (event) => {
        fetchDefault();
        event.preventDefault();
    }

    return(
        <StyledCard>
            <form>
                <select></select>
                <button>{"<- ->"}</button>
                <select></select>
                <button type="submit">Submit</button>
            </form>
            <button onClick={(e) => handleClick(e)}>Go to graph</button>
        </StyledCard>
    )
}

export default Card