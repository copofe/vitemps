/* eslint-disable camelcase */
import { createI18n } from 'vue-i18n';
import scopeStorage from '@/utils/storage';
import en_US from './en-US';
import zh_CN from './zh-CN';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = scopeStorage.locale || 'zh-CN';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  messages: {
    'en-US': en_US,
    'zh-CN': zh_CN,
  },
});

export default i18n;
