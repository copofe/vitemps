import { PiniaPluginContext } from 'pinia';
import proxyStorage from '::/utils/proxy-storage';

// eslint-disable-next-line import/prefer-default-export
export function subscribe(context: PiniaPluginContext) {
  context.store.$subscribe((mutation, state) => {
    if (mutation.storeId === 'user') {
      proxyStorage.token = state.token;
    }
  });
}
