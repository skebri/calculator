import I18nEN from './I18-en';
import { getLangOption } from '../services/translationService';

const lang = getLangOption();

switch (lang) {
  case 'en': {
    window.I18n = I18nEN;
    break;
  }
  default: {
    window.I18n = I18nEN;
  }
}
