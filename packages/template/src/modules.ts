import { RouteRecordRaw } from 'vue-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MockjsMock } from 'mockjs';
import Dashboard from './pages/dashboard';

interface Module {
  routes: RouteRecordRaw[];
  locale?: Locale;
  mock?: MockjsMock[]
}

const modules: Module[] = [Dashboard];

export default modules;
