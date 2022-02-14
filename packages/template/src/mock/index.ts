// eslint-disable-next-line import/no-extraneous-dependencies
import Mock, { MockjsMock } from 'mockjs';

const rules: MockjsMock[] = [];

Mock.setup({
  timeout: '200-400',
});

rules.forEach((rule) => Mock.mock(rule));
