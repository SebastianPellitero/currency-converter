import React, { useEffect, useState } from 'react';
import {
    DEFAULT_CURRENCY_VALUE,
    CLOSE_CHART,
    OPEN_CHART,
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
        const { formatMessage } = props.intl;
        const { isLoading, rates, showChart } = props.currency;
        return toCurrency ? (
            <>
                <StyledResult>
                    <p className='from-currency'>
                        <input
                            type='number'
                            min='1'
                            value={amountCurrency}
                            placeholder='Enter a value grater than 0'
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
                {showChart ? (
                    <StyledToggleButton onClick={() => toggleChart(CLOSE_CHART)}>
                        {formatMessage({ id: 'chart.closeButton' })}
                    </StyledToggleButton>
                ) : (
                    <StyledToggleButton onClick={() => toggleChart(OPEN_CHART)}>
                        {formatMessage({ id: 'chart.openButton' })}
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
        const { rates, isLoading } = props.currency;
        if (isLoading)
            return (
                <ReactLoading type={SPINNER_TYPE_BUBBLE} color={WHITE_GRAY_COLOR} />
            );
        return (
            <>
                <p>
                    <FormattedMessage id='currencyConverter.fromText' />
                </p>
                <StyledSelect
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
        const { showChart } = props.currency;
        setToCurrency(currencySelected);
        asignTargetCurrency(currencySelected);
        if (showChart) fetchTimeSerie();
    };

    const selectToCurrency = () => {
        const { formatMessage } = props.intl;
        const { rates, isLoading } = props.currency;
        if (isLoading)
            return <ReactLoading type={'bubbles'} color={WHITE_GRAY_COLOR} />;
        return (
            <>
                <p>
                    <FormattedMessage id='currencyConverter.toText' />
                </p>
                <StyledSelect
                    value={toCurrency}
                    onChange={e => handleOnChangeToCurrency(e.target.value)}
                >
                    <option value=''>
                        {formatMessage({ id: 'currencyConverter.toSelectDefault' })}{' '}
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
