import { UserActions, UserInterface } from "./types";

const initialState: { user: UserInterface | null } = {
  user: null,
};

export default function userReducer(
  state = initialState,
  action: {
    type: UserActions;
    payload?: UserInterface;
  }
) {
  if (action.type === UserActions.Login) {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === UserActions.Logout) {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}
