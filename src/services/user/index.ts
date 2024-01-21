import { http } from '@/utils/request';
import type { UserRequest } from './interface';

export const registorUser = (data: UserRequest.RegistorUser) => {
  return http.post('/api/v1/user/register', { data });
};

export const getVerificationCode = (params: UserRequest.Captcha) => {
  return http.get('/api/v1/user/register-captcha', { params });
};
