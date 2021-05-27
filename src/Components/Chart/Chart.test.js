import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import { IntlProvider } from 'react-intl';
import getCurrentLang from '../../LangProvider/langProvider';
import jest from 'jest-mock';

import { cleanup, render } from '@testing-library/react';

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
    expect(input.value).toBe('');
    const chart = containerRendered.getByText('Currency value by time');
    expect(chart).toBeDefined();
});
