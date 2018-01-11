import API from "../api";


const api = new API();

export default newUserinfo => {
  return dispatch => {

    const backend = api.service("userinfo");

    api
      .authenticate()
      .then(() => {
        backend
          .create(newUserinfo)
          .then(result => {
            
          })
          .catch(error => {
            
          });
      })
      .catch(error => {
        
      });
  };
};
