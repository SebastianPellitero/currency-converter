import React from 'react';
import ReactDOM from 'react-dom';
import jest from 'jest-mock';
import { IntlProvider } from 'react-intl';
import { cleanup, render } from '@testing-library/react';
import Chart from './Chart';
import getCurrentLang from '../../LangProvider/langProvider';
import { DEFAULT_STARTING_DATE } from '../../constants';

afterEach(cleanup);

const mockProcessedTimeSeries = {
    chartData: {
        timeSeries: [
            { x: new Date('2021-03-03'), y: 2 },
            { x: new Date('2021-03-10'), y: 5 }
        ]
    }
};

const currentBrowserLang = getCurrentLang();

it('It mounts the component', () => {
    const div = document.createElement('div');
    const fetchTimeSerie = jest.fn();
    ReactDOM.render(
        <IntlProvider
            defaultLocale='en'
            locale={currentBrowserLang.locale}
            messages={currentBrowserLang.messages}
            defaultMessages={currentBrowserLang.messages}
        >
            <Chart
                fetchTimeSerie={fetchTimeSerie}
                chartData={mockProcessedTimeSeries}
            />
        </IntlProvider>,
        div
    );
});

const setup = () => {
    const fetchTimeSerie = jest.fn();
    const containerRendered = render(
        <IntlProvider
            defaultLocale='en'
            locale={currentBrowserLang.locale}
            messages={currentBrowserLang.messages}
            defaultMessages={currentBrowserLang.messages}
        >
            <Chart
                fetchTimeSerie={fetchTimeSerie}
                chartData={mockProcessedTimeSeries}
            />
        </IntlProvider>
    );
    return containerRendered;
};

it('The component render a data input and default chart', () => {
    const containerRendered = setup();
    const input = containerRendered.getByLabelText('chart-date-input');
    expect(input.value).toBe(DEFAULT_STARTING_DATE);
    const chart = containerRendered.getByText('Currency value by time');
    expect(chart).toBeDefined();
});
