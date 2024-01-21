export namespace UserRequest {
  interface RegistorUser {
    username: string;
    nickName: string;
    password: string;
    email: string;
    captcha: string;
  }
  interface Captcha {
    address: string;
  }
}
