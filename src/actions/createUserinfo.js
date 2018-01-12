import API from "../api";

export const USERINFO_ADDED = 'USERINFO_ADDED'
const api = new API();

export default newUserinfo => {
  return dispatch => {

    const backend = api.service("userinfos");

    api.authenticate()
      .then(() => {
        backend.create(newUserinfo)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: USERINFO_ADDED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}