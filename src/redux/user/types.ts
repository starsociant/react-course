export enum UserActions {
  Login = "user/login",
  Logout = "user/logout",
}

export interface UserInterface {
  name: string;
  email: string;
}
