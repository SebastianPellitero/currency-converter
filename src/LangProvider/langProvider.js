import englishMsg from './lang/en_US.json';
import spanishMsg from './lang/es_ES.json';

export default function getCurrentLang() {
    const userLanguage =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;
    if (userLanguage === 'es_ES') {
        return {
            locale: 'es_ES',
            messages: {
                ...spanishMsg
            }
        };
    }
    return {
        locale: 'en-US',
        messages: {
            ...englishMsg
        }
    };
}
