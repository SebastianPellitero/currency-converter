import React from 'react';
import ChartContainer from '../Chart/ChartContainer';
import { StyledChart } from '../Chart/ChartStyle';
import CurrencyConverterContainer from '../CurrencyConverter/CurrencyConverterContainer';
import { StyledCard } from './CardStyle';

const Card = props => {
    const { showChart } = props;
    return (
        <StyledCard>
            <CurrencyConverterContainer />
            <StyledChart className={showChart ? 'chart-displayed' : ''}>
                {showChart ? <ChartContainer /> : <></>}
            </StyledChart>
        </StyledCard>
    );
};

export default Card;
