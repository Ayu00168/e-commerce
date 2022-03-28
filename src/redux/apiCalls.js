import axios from "axios";
import { loginFailure, loginStart, loginSucess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    dispatch(loginSucess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
