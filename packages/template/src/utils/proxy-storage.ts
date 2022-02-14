import { proxyStorage } from '@copofe/utils';
import config from '::/config';

export default proxyStorage(config.storage.db, config.storage.prefix);
