import React from 'react';
import CardContainer from '../Card/CardContainer';
import { IntlProvider } from 'react-intl';
import getCurrentLang from '../../LangProvider/langProvider';

const Main = () => {
    const currentBrowserLang = getCurrentLang();
    return (
        <IntlProvider
            defaultLocale='en'
            locale={currentBrowserLang.locale}
            messages={currentBrowserLang.messages}
            defaultMessages={currentBrowserLang.messages}
        >
            <CardContainer />
        </IntlProvider>
    );
};

export default Main;
