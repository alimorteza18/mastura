import http from "./http";

export const URL = "http://185.173.107.148:8090/api"; 


// Login User
export const login = (mobile) => {
    const url = `${URL}/Authentications/Login`;
    return http.post(url, mobile);
  };

  // Confirm Code

  export const confirmCode = (confirmCode) => {
    const url = `${URL}/Authentications/ConfirmLogin`;
    return http.post(url, confirmCode);
  };

  //Get Road
  export const GetRoad = () => {
    const url = `${URL}/Ayat/GetRoad`;
    return http.get(url);
  };

  //Get Single Road
  export const getSingleRoad = (id) => {
    const url = `${URL}/Ayat/GetOneAye?AyeId=${id}`;
    return http.get(url);
  }