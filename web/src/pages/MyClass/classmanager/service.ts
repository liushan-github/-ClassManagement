import request from "@/utils/request";

export async function fetchData(): Promise<any> {
  return request('/api/classmanager');
}
