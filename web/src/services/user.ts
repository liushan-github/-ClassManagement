import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryStudent(key: number): Promise<any> {
  console.info(key);
  return request(`/api/currentStudent/${key}`);
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
