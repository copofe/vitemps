import { asyncScopeStorage } from '@copofe/utils';
import config from '@/config';

const scopeStorage: {
  token: string;
  locale: string;
  [key: string]: unknown;
} = {
  token: '',
  locale: '',
};

asyncScopeStorage(scopeStorage, config.prefix);

export default scopeStorage;
