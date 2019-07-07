const students = [
  {
    userName: '柳杉',
    password: '1',
  },
  {
    userName: '鲁佳明',
    password: '1',
  },
  {
    userName: '朱贤康',
    password: '1',
  }
];
export default {
  'POST  /api/login': (
    req: { body: { password: string; userName: string; remember: boolean } },
    res: {
      send: (data: any) => void;
    },
  ) => {
    const {password, userName} = req.body;
    if (password && userName) {
      for (let item of students) {
        if (item.userName == userName && item.password == password) {
          res.send(
            {
              code: 1,
              currentStudent: item.userName,
            }
          );
          return;
        }
      }
      res.send({
        code: 0,
        currentStudent: ' ',
      });
    }
  },
  'GET  /api/login': students,
}
