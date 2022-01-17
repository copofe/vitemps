// eslint-disable-next-line import/no-extraneous-dependencies
import Mock, { MockjsMock } from 'mockjs';
import modules from '@/modules';

const rules: MockjsMock[] = [];
modules.forEach((module) => {
  if (module.mock) rules.push(...module.mock);
});

Mock.setup({
  timeout: '200-400',
});

rules.forEach((rule) => Mock.mock(rule));
