import request from '@/util/request'
import type { userResponseData, loginResponseData } from './type'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (loginForm: any) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, loginForm)

export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
