import React from 'react';
import CardContainer from '../Card/CardContainer';
import { IntlProvider } from 'react-intl';
import getCurrentLang from '../../LangProvider/langProvider';

const Main = () => {
    const currentBrowserLang = getCurrentLang();
    return (
        <IntlProvider
            locale={currentBrowserLang.locale}
            messages={currentBrowserLang.messages}
        >
            <CardContainer />
        </IntlProvider>
    );
};

export default Main;
