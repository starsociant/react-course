import { UserActions, UserInterface } from "./types";

export const loginUser = (payload: UserInterface) => ({
  type: UserActions.Login,
  payload: payload,
});

export const logoutUser = () => ({
  type: UserActions.Logout,
});
