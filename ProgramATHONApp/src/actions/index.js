const SERVER_IP = '192.168.1.10';

export const saveLoggedUser = (user) => {
  return {type: 'SAVE_LOGGED_USER', payload: user};
};

export const updateConfig = (config) => {
  return {type: 'UPDATE_CONFIG', payload: config};
};

export const saveTokenToApp = () => {
  return (dispatch) => {
  return fetch('http://' + SERVER_IP + ':8080/api/authenticate', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(
    {
      username: 'user',
      password: 'user',
      rememberMe: true
   })
  })
  .then((response) => response.json())
  // Save token and load static info
  .then(async (responseJson) => {
   const token = responseJson.id_token;
   dispatch({type: 'SAVE_TOKEN', payload:'Bearer ' + token});
 });
 };
};

export const modifyUser = ({token, user})=> {
  return (dispatch)=>{
    return fetch('http://' + SERVER_IP + ':8080/api/p-v-app-users', {
      method:'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    // Save token and load static info
    .then(async (userResponse) => {
      dispatch({type: 'SAVE_LOGGED_USER', payload: userResponse});
   });
  };
};

export const login = ({username, password, token}) => {
  return (dispatch) => {
    return fetch('http://' + SERVER_IP + ':8080/api/authenticateUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({username: username, password: password})
    }).then((response) => response.json())
    // Save token and load static info
      .then(async(authUserResponse) => {
      dispatch({type: 'SAVE_LOGGED_USER', payload: authUserResponse});
   }).catch((error) => {
         console.log(error);
  }); // end of authenticate User
 }; // end dispatch function
}; // end login function

export const registerUser = ({token, user}) => {
  return (dispatch) => {
    return fetch('http://' + SERVER_IP + ':8080/api/p-v-app-users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(user)
      })
      .then((response) => response.json())

      .then(async(registerResponse) => {
        dispatch({
          type: 'SAVE_LOGGED_USER',
          payload: registerResponse
        });
      });
    };
  };

// Generic method to make http request to PVApp API
export const invoke = (token, url, method, body) => {
  if (method === 'GET') {
    return fetch('http://' + SERVER_IP + ':8080/api/' + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then((response) => response.json());
  } else {
    return fetch('http://' + SERVER_IP + ':8080/api/' + url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(body)
    }).then((response) => response.json());
  }
};
