// 代码中会兼容本地 service mock 以及部署站点的静态数据
const student = {
  '53': {
    name: '刘山',
    number: '8221116053',
    sex: 1,//性别：1代表男，0代表女
    identity: 1,//身份：1代表管理员，0代表普通身份，-1代表班外人员
    avatar: 'http://liush.top/image/avatar/liu-logo.png',//头像
    signature: '坚持就是胜利！',//口头禅
    messages: 10,//邮箱消息
    status: 1,//状态
    friends: 12,
  },
  '54': {
    name: '鲁佳明',
    number: '8221116054',
    sex: 1,//性别：1代表男，0代表女
    identity: 1,//身份：1代表管理员，0代表普通身份，-1代表班外人员
    avatar: 'https://avatars3.githubusercontent.com/u/36237926?s=400&u=c29314dc4b5cdace62f6c7440602dfbbbfe72cbd&v=4',//头像
    signature: '坚持就是胜利！',//口头禅
    messages: 10,//邮箱消息
    status: 1,//状态
    friends: 120110,
  },
  '73': {
    name: '朱贤康',
    number: '8221116073',
    sex: 1, //性别：1代表男，0代表女
    identity: 1, //身份：1代表管理员，0代表普通身份，-1代表班外人员
    avatar: 'http://liush.top/image/avatar/zhu-timg.jpg', //头像
    signature: '多看本草纲目', //口头禅
    messages: 8,
    status: 0,
    friends: 2,
  },
};

function getCurrentStudent(
  req: { params: { currentStudent: string | number } },
  res: { json: (arg: any) => void },
) {
  console.info(req.params);
  if (req.params.currentStudent == 0) {
    return res.json({code: 0});
  }
  return res.json(student[req.params.currentStudent]);
}
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentStudent/:currentStudent': getCurrentStudent,
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': (req: { body: { password: string, userName: string, type: string } }, res: { send: any }) => {
    const { password, userName, type } = req.body;
    if (password === 'ant.design' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === 'ant.design' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }
    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req: any, res: { send: any }) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req: any, res: { status: any }) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: any, res: { status: any }) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: any, res: { status: any }) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: object, res: { status: any }) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};
