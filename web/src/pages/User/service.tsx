import request from 'umi-request';

export async function login(params: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined) {
  return request('/api/login', {
      method: 'POST',
      body: params,
    }
  );
}
