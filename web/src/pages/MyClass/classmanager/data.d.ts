export interface TableData {
  name: string,
  number: number,
  sex: 0 | 1, // 性别：1代表男，0代表女
  identity: 0 | 1 | -1, // 身份：1代表管理员，0代表普通身份，-1代表班外人员
  avatar: string, // 头像
  signature: string, // 口头禅
}
