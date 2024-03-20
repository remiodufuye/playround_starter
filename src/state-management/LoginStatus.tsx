import { useReducer, useState } from "react";
// import authReducer from "./reducers/authreducer";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);

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
