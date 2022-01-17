export const successResponseWrap = (data: unknown) => ({
  data,
  status: 'ok',
  msg: '请求成功',
  code: 1,
});

export const failResponseWrap = (data: unknown, msg: string, code = 0) => ({
  data,
  status: 'fail',
  msg,
  code,
});
