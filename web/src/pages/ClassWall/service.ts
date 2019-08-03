import request from '@/utils/request';

export async function fakeclassWallData(): Promise<any> {
  return request('http://rap2api.taobao.org/app/mock/224873/classwall');
}
