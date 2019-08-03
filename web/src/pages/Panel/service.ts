import request from '@/utils/request';

export async function fakeTotalData(): Promise<any> {
  return request('/api/total');
}
