import { createContext } from "react";

export interface UserType {
  name: string;
  email: string;
}

export interface AuthContextType {
  user?: UserType;
  setUser: any;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
