import config from '@/config';

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false && config.mock) setup();
};

export const successResponseWrap = (data: unknown) => ({
  data,
  status: 'ok',
  msg: '请求成功',
  code: 20000,
});

export const failResponseWrap = (data: unknown, msg: string, code = 0) => ({
  data,
  status: 'fail',
  msg,
  code,
});
