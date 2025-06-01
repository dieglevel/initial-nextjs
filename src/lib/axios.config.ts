import axios from "axios";

const api = axios.create();

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Token hết hạn");
      // ! Xử lý logout hoặc refresh token
    }

    return Promise.reject(error);
  }
);
