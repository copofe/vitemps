import { PiniaPluginContext } from 'pinia';
import scopeStorage from '@/utils/storage';

// eslint-disable-next-line import/prefer-default-export
export function subscribe(context: PiniaPluginContext) {
  context.store.$subscribe((mutation, state) => {
    if (mutation.storeId === 'user') {
      scopeStorage.token = state.token;
    }
  });
}
