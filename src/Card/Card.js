import React, { useEffect, useState } from 'react'
import { DEFAULT_CURRENCY_VALUE } from '../constants'
import { StyledCard } from './CardStyle'

const Card = props => {
    
    const { fetchDefault } = props;

    const [ fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCY_VALUE);
    const [ toCurrency, setToCurrency] = useState();
    
    useEffect(() => { 
        fetchDefault()},
    [fetchDefault]);

    const handleClick = (event) => {
        fetchDefault();
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        
    }

    const SelectFromCurrency = () => {
        const { status, rates } = props.currency;
        if (status === 'Complete'){
            let algo = Object.keys(rates);
            return <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {algo.map((value,i) => <option key={i}>{value}</option>)}
            </select>
        }
        return <p>PENDINGGGGG</p>        
    }

    const SelectToCurrency = () => {
       const { status, rates } = props.currency;
        if (status === 'Complete'){
            let algo = Object.keys(rates);
            return <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {algo.map((value,i) => <option key={i}>{value}</option>)}
            </select>
        }
        return <p>PENDINGGGGG</p>      
    }

    return(
        <StyledCard>
            <form>
                <SelectFromCurrency />
                <button>{"<- ->"}</button>
                <SelectToCurrency />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            <button onClick={(e) => handleClick(e)}>Go to graph</button>
        </StyledCard>
    )
}

export default Card