import { history } from "../../store";
import API from "../../api";


export const USER_SIGNED_IN = "USER_SIGNED_IN";

const api = new API();

export default user => {
  console.log(user);
  return dispatch => {

    api
      .signIn(user)
      .then(user => {
        
        api.app.set("user", user);
        history.replace("/home");
      

        dispatch({
          type: USER_SIGNED_IN,
          payload: user
        });
      })
      .catch(error => {
        
        });
      };
  };

