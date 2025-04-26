import Mock from 'mockjs';
// 使用mock
// 设置数据返回时间
Mock.setup({
  timeout: '200-600'
});

Mock.mock('/user/userinfo', 'get', () => {
  return {
    username: 'mjq',
    type: '帅'
  };
});
