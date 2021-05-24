import React, { useEffect, useState } from 'react'
import { DEFAULT_CURRENCY_VALUE, CLOSE_CHART, OPEN_CHART } from '../../constants'
import { StyledForm, StyledSelect } from './CurrencyConverterStyle'

const CurrencyConverter = props => {
    const { fetchCurrency, asignTargetCurrency, fetchTimeSerie, toggleChart } = props;
    const [ fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCY_VALUE);
    const [ toCurrency, setToCurrency] = useState('');
    const [ amountCurrency, setAmountCurrency] = useState(1);
    
    useEffect(() => { 
        fetchCurrency();
    },
    [fetchCurrency]);

    const ShowComparedCurrency = () => {
        const { rates, showChart } = props.currency;
        return toCurrency ? 
            <p>
                The value is: for 
                <input value={amountCurrency} onChange={e => {setAmountCurrency(e.target.value)}} /> 
                {fromCurrency} we have {rates[toCurrency]*amountCurrency} {toCurrency}
                {showChart ? <button onClick={() => toggleChart(CLOSE_CHART)}>Close chart</button> : <button onClick={() => toggleChart(OPEN_CHART)}>Go to chart</button>}
            </p>
            : <></>
    }

    const handleOnChangeFromCurrency = (currencySelected) => {
        setFromCurrency(currencySelected);
        fetchCurrency(currencySelected);
    }

    const SelectFromCurrency = () => {
        const { status, rates } = props.currency;
        if (status === 'Complete'){
            let algo = Object.keys(rates);
            return (
                <>
                    <p>From: </p>
                    <StyledSelect value={fromCurrency} onChange={(e) => handleOnChangeFromCurrency(e.target.value)}>
                        {algo.map((value,i) => <option key={i}>{value}</option>)}
                    </StyledSelect>
                </>
            )
        }
        return <p>PENDINGGGGG</p>        
    }

    const handleOnChangeToCurrency = (currencySelected) => {
        const  {showChart } = props.currency;
        setToCurrency(currencySelected);
        asignTargetCurrency(currencySelected);
        if (showChart) fetchTimeSerie();
    }

    const SelectToCurrency = () => {
       const { status, rates } = props.currency;
        if (status === 'Complete'){
            let algo = Object.keys(rates);
            return (
                <>
                    <p>To: </p>
                    <StyledSelect value={toCurrency} onChange={(e) => handleOnChangeToCurrency(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        {algo.map((value,i) => 
                            <option key={i}>{value}</option>)
                        }
                    </StyledSelect>
                </>
                )
        }
        return <p>PENDINGGGGG</p>      
    }

    return(
        <>
            <StyledForm>
                <SelectFromCurrency />
                {/* <button>{"<- ->"}</button> */}
                <SelectToCurrency />
            </StyledForm>
            <ShowComparedCurrency />      
        </>
    )
}

export default CurrencyConverter