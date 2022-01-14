import { RouteRecordRaw } from 'vue-router';
import Dashboard from './pages/dashboard';

interface Modules {
  routes: RouteRecordRaw[];
  locale?: Locale;
}

const modules: Modules[] = [Dashboard];

export default modules;
