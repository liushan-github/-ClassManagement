import request from 'umi-request';
import {FromDataType} from './Login';

export async function login(params: FromDataType) {
  console.info(params);
  return request('/api/login', {
      method: 'POST',
    data: params,
    },
  );
}

// export async function login(params: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined) {
//   return request('/api/login', {
//       method: 'GET',
//     }
//   );
// }
