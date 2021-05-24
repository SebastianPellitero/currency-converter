import React from 'react'
import ChartContainer from '../Chart/ChartContainer';
import CurrencyConverterContainer from '../CurrencyConverter/CurrencyConverterContainer';
import { StyledCard } from './CardStyle'


const Card = (props) => {
    const { showChart } = props;
    return(
        <StyledCard>
            <CurrencyConverterContainer />
            { showChart ?
                <ChartContainer /> 
            : <></>
            }
        </StyledCard>
    )
}

export default Card