import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import proxyStorage from '::/utils/proxy-storage';

export default function useLocale() {
  const i18 = useI18n();
  const currentLocale = computed(() => i18.locale.value);
  const changeLocale = (value: string) => {
    i18.locale.value = value;
    proxyStorage.locale = value;
  };
  return {
    currentLocale,
    changeLocale,
  };
}
