import { asyncScopeStorage } from '@copofe/utils';

const scopeStorage = {
  token: '',
};

asyncScopeStorage(scopeStorage);

export default scopeStorage;
