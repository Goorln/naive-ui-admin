import { http } from '@/utils/http/axios';

//图片上传
export function upload(data) {
  return http.request({
    url: '/upload',
    method: 'post',
    data,
  });
}
