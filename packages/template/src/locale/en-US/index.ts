import localeSetting from './setting';
import modules from '@/modules';

const locale = {};
modules.forEach((module) => {
  if (module.locale) Object.assign(locale, module.locale.en_US);
});

export default {
  ...localeSetting,
  ...locale,
};
