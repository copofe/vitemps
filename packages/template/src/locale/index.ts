import { createI18n } from 'vue-i18n';
import scopeStorage from '@/utils/storage';
import en from './en-US';
import cn from './zh-CN';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = scopeStorage.locale || 'zh-CN';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  messages: {
    'en-US': en,
    'zh-CN': cn,
  },
});

export default i18n;
