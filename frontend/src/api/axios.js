import axios from "axios";

export const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:5000/api/v1";

const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {}, // add headers if you want 
});

// request interceptor 
instance.interceptors.request.use(function (request) {
    //add header before every request 
    request.headers['x-access-token']= localStorage.getItem("token");
    return request;
}, function (error) {
    console.log("API ERROR : "  + error );
    return Promise.reject(error);
});

// response interceptor
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log( response);
    if( response.token ) {
        localStorage.setItem("token",response.token);
    }
    if( response.id)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  });

// axios.defaults.headers.common["x-access-token"] = localStorage.getItem("token");

export default instance;
