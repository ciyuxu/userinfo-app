import API from "../api";

export const ADDRESS_ADDED = 'ADDRESS_ADDED'
const api = new API();

export default newUserinfo => {
  return dispatch => {

    const backend = api.service("addresses");

    api.authenticate()
      .then(() => {
        backend.create(newAddress)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: ADDRESS_ADDED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}