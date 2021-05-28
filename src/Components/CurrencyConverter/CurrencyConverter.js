import React, { useEffect, useState } from 'react';
import {
    DEFAULT_CURRENCY_VALUE,
    DEFAULT_CURRENCY_AMOUNT,
    WHITE_GRAY_COLOR,
    SPINNER_TYPE_BUBBLE
} from '../../constants';
import {
    StyledForm,
    StyledSelect,
    StyledResult,
    MainCurrencySection,
    StyledToggleButton
} from './CurrencyConverterStyle';
import ReactLoading from 'react-loading';
import { FormattedMessage, injectIntl } from 'react-intl';

const CurrencyConverter = props => {
    const { fetchCurrency, asignTargetCurrency, fetchTimeSerie, toggleChart } =
        props;
    const [fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCY_VALUE);
    const [toCurrency, setToCurrency] = useState('');
    const [amountCurrency, setAmountCurrency] = useState(DEFAULT_CURRENCY_AMOUNT);

    useEffect(() => {
        fetchCurrency();
    }, [fetchCurrency]);

    const showComparedCurrency = () => {
        const {
            currency: { isLoading, rates, showChart },
            intl: { formatMessage }
        } = props;
        return toCurrency ? (
            <>
                <StyledResult>
                    <p className='from-currency'>
                        <input
                            type='number'
                            min='1'
                            value={amountCurrency}
                            onChange={e =>
                                setAmountCurrency(
                                    e.target.valueAsNumber || DEFAULT_CURRENCY_AMOUNT
                                )
                            }
                        />
                        {fromCurrency}
                    </p>
                    <div className='text-currency'>=</div>
                    <div className='to-currency'>
                        {isLoading ? (
                            <ReactLoading
                                type={SPINNER_TYPE_BUBBLE}
                                color={WHITE_GRAY_COLOR}
                            />
                        ) : (
                            <p>
                                {rates[toCurrency] * amountCurrency} {toCurrency}
                            </p>
                        )}
                    </div>
                </StyledResult>
                <StyledToggleButton onClick={() => toggleChart()}>
                    {showChart
                        ? formatMessage({ id: 'chart.closeButton' })
                        : formatMessage({ id: 'chart.openButton' })}
                </StyledToggleButton>
            </>
        ) : null;
    };

    const handleOnChangeFromCurrency = currencySelected => {
        setFromCurrency(currencySelected);
        fetchCurrency(currencySelected);
    };

    const selectFromCurrency = () => {
        const {
            currency: { rates, isLoading }
        } = props;
        if (isLoading)
            return (
                <ReactLoading type={SPINNER_TYPE_BUBBLE} color={WHITE_GRAY_COLOR} />
            );
        return (
            <>
                <label htmlFor='from-currency'>
                    <FormattedMessage id='currencyConverter.fromText' />
                </label>
                <StyledSelect
                    id='from-currency'
                    value={fromCurrency}
                    onChange={e => handleOnChangeFromCurrency(e.target.value)}
                >
                    {Object.keys(rates).map((value, i) => (
                        <option key={i}>{value}</option>
                    ))}
                </StyledSelect>
            </>
        );
    };

    const handleOnChangeToCurrency = currencySelected => {
        const {
            currency: { showChart }
        } = props;
        setToCurrency(currencySelected);
        asignTargetCurrency(currencySelected);
        if (showChart) fetchTimeSerie();
    };

    const selectToCurrency = () => {
        const {
            currency: { rates, isLoading },
            intl: { formatMessage }
        } = props;
        if (isLoading)
            return (
                <ReactLoading type={SPINNER_TYPE_BUBBLE} color={WHITE_GRAY_COLOR} />
            );
        return (
            <>
                <label htmlFor='to-currency'>
                    <FormattedMessage id='currencyConverter.toText' />
                </label>
                <StyledSelect
                    id='to-currency'
                    value={toCurrency}
                    onChange={e => handleOnChangeToCurrency(e.target.value)}
                >
                    <option value=''>
                        {formatMessage({ id: 'currencyConverter.toSelectDefault' })}
                    </option>
                    {Object.keys(rates).map((value, i) => (
                        <option key={i}>{value}</option>
                    ))}
                </StyledSelect>
            </>
        );
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

export default injectIntl(CurrencyConverter);
