import React, { useEffect, useState } from 'react';
import { DEFAULT_CURRENCY_VALUE, CLOSE_CHART, OPEN_CHART } from '../../constants';
import {
    StyledForm,
    StyledSelect,
    StyledResult,
    MainCurrencySection,
    StyledToggleButton
} from './CurrencyConverterStyle';

const CurrencyConverter = props => {
    const { fetchCurrency, asignTargetCurrency, fetchTimeSerie, toggleChart } =
        props;
    const { rates, showChart } = props.currency;
    const [fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCY_VALUE);
    const [toCurrency, setToCurrency] = useState('');
    const [amountCurrency, setAmountCurrency] = useState(1);

    useEffect(() => {
        fetchCurrency();
    }, [fetchCurrency]);

    const showComparedCurrency = () => {
        return toCurrency ? (
            <>
                <StyledResult>
                    <div className='from-currency'>
                        <input
                            type='number'
                            value={amountCurrency}
                            onChange={e => setAmountCurrency(e.target.valueAsNumber)}
                        />
                        {fromCurrency}
                    </div>
                    <div className='text-currency'>=</div>
                    <div className='to-currency'>
                        {rates[toCurrency] * amountCurrency} {toCurrency}
                    </div>
                </StyledResult>
                {showChart ? (
                    <StyledToggleButton onClick={() => toggleChart(CLOSE_CHART)}>
                        Close chart
                    </StyledToggleButton>
                ) : (
                    <StyledToggleButton onClick={() => toggleChart(OPEN_CHART)}>
                        Go to chart
                    </StyledToggleButton>
                )}
            </>
        ) : (
            <></>
        );
    };

    const handleOnChangeFromCurrency = currencySelected => {
        setFromCurrency(currencySelected);
        fetchCurrency(currencySelected);
    };

    const selectFromCurrency = () => {
        const { status, rates } = props.currency;
        if (status === 'Complete') {
            let algo = Object.keys(rates);
            return (
                <>
                    <p>From: </p>
                    <StyledSelect
                        value={fromCurrency}
                        onChange={e => handleOnChangeFromCurrency(e.target.value)}
                    >
                        {algo.map((value, i) => (
                            <option key={i}>{value}</option>
                        ))}
                    </StyledSelect>
                </>
            );
        }
        return <p>PENDINGGGGG</p>;
    };

    const handleOnChangeToCurrency = currencySelected => {
        const { showChart } = props.currency;
        setToCurrency(currencySelected);
        asignTargetCurrency(currencySelected);
        if (showChart) fetchTimeSerie();
    };

    const selectToCurrency = () => {
        const { status, rates } = props.currency;
        if (status === 'Complete') {
            let algo = Object.keys(rates);
            return (
                <>
                    <p>To: </p>
                    <StyledSelect
                        value={toCurrency}
                        onChange={e => handleOnChangeToCurrency(e.target.value)}
                    >
                        <option value=''>--Please choose an option--</option>
                        {algo.map((value, i) => (
                            <option key={i}>{value}</option>
                        ))}
                    </StyledSelect>
                </>
            );
        }
        return <p>PENDINGGGGG</p>;
    };

    return (
        <MainCurrencySection>
            <StyledForm>
                {selectFromCurrency()}
                {selectToCurrency()}
            </StyledForm>
            {showComparedCurrency()}
        </MainCurrencySection>
    );
};

export default CurrencyConverter;
