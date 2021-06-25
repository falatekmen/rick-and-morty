import I18n from 'i18n-js';
import { english,turkish } from './TextNames';
import { Locales } from '../LocalizationConstants';

I18n.defaultLocale = Locales.turkish;
I18n.locale = Locales.turkish;
I18n.fallbacks = true;
I18n.locales.no = Locales.turkish;

I18n.translations = {
    [Locales.english]: english,
    [Locales.turkish]: turkish,
};

export default I18n;