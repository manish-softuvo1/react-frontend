//  export const url = "http://localhost:5000/api";

 export const url = "https://reduxtodoauth.herokuapp.com/api"

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
