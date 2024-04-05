import { useReducer, useState } from "react";
import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Remi.Odufuye" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
function useContext(AuthContext: Context<AuthContextType>): {
  user: any;
  dispatch: any;
} {
  throw new Error("Function not implemented.");
}
