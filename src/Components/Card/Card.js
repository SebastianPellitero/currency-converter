import React from 'react';
import ChartContainer from '../Chart/ChartContainer';
import CurrencyConverterContainer from '../CurrencyConverter/CurrencyConverterContainer';
import { StyledCard, StyledChartContainer } from './CardStyle';

const Card = props => {
    const { showChart } = props;
    return (
        <StyledCard>
            <CurrencyConverterContainer />
            <StyledChartContainer className={showChart ? 'chart-displayed' : ''}>
                {showChart ? <ChartContainer /> : <></>}
            </StyledChartContainer>
        </StyledCard>
    );
};

export default Card;
