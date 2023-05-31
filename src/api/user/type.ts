export interface loginForm {
  username: string
  password: string
}

interface DataType {
  data: string
}

export interface loginResponseData {
  code: number
  data: DataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routers: string[]
  token: string[]
}

interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: user
}
