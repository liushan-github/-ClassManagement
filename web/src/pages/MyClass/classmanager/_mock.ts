function getRandom() {
  return (Math.random() * 1000000000).toFixed(0);
}
const data =
  [
    {
      name: '刘山',
      number: 8221116053,
      sex: 1, // 性别：1代表男，0代表女
      identity: 1, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: 'http://liush.top/image/avatar/liu-logo.png', // 头像
      signature: '坚持就是胜利！', // 口头禅
    },
    {
      name: '鲁佳明',
      number: 8221116054,
      sex: 1, // 性别：1代表男，0代表女
      identity: 1, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: 'https://avatars3.githubusercontent.com/u/36237926?s=400&u=c29314dc4b5cdace62f6c7440602dfbbbfe72cbd&v=4', // 头像
      signature: '坚持就是胜利！', // 口头禅
    },
    {
      name: '朱贤康',
      number: 8221116073,
      sex: 1, // 性别：1代表男，0代表女
      identity: 0, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: 'http://liush.top/image/avatar/zhu-timg.jpg', // 头像
      signature: '多看本草纲目', // 口头禅
    },
    {
      name: '冯佳庆',
      number: 8221116046,
      sex: 1, // 性别：1代表男，0代表女
      identity: 0, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: 'http://liush.top/image/classwall/fengjiaqing.jpg', // 头像
      signature: '小哥早呀', // 口头禅
    },
    {
      name: '杨俊伟',
      number: 8221116066,
      sex: 1, // 性别：1代表男，0代表女
      identity: 0, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: 'http://liush.top/image/classwall/yangjunwei.jpg', // 头像
      signature: 'emmmm', // 口头禅
    },
    {
      name: '小明',
      number: getRandom(),
      sex: 1, // 性别：1代表男，0代表女
      identity: -1, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: null, // 头像
      signature: '这个家伙很懒，什么都没留下', // 口头禅
    },
    {
      name: '小红',
      number: getRandom(),
      sex: 0, // 性别：1代表男，0代表女
      identity: -1, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
      avatar: null, // 头像
      signature: '这个家伙很懒，什么都没留下', // 口头禅
    },
  ]
export default {
  // 'GET /api/classaMnager': (req: object,
  //                           res: {
  //                             send: (data: any) => void;
  //                           },
  // ) => {
  //   res.send(data);
  // }
  'GET /api/classManager': data,
}
