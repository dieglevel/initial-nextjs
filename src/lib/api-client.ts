import axios, { AxiosInstance } from "axios";
import { addToast } from "@heroui/toast";

import { AuthApi, Configuration } from "@/api"; // đường dẫn tùy bạn

let axiosInstance: AxiosInstance | null = null;
// let detailInformationApiInstance: DetailInformationApi | null = null;
let AuthApiInstance: AuthApi | null = null;

/**
 * Tạo hoặc lấy axios singleton instance.
 * @param token Chuỗi Bearer token nếu có (SSR truyền, CSR lấy localStorage).
 */
function getAxiosInstance(token?: string): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    });

    axiosInstance.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else if (typeof window !== "undefined") {
        const localToken = localStorage.getItem("token");

        if (localToken) {
          config.headers.Authorization = `Bearer ${localToken}`;
        }
      }

      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Lấy message lỗi tùy API của bạn
        const message =
          error.response?.data?.message ||
          error.message ||
          "Có lỗi xảy ra, vui lòng thử lại!";

        // Hiện toast lỗi
        addToast({
          title: "Api error from server",
          description: message,
          timeout: 3000,
          color: "danger"
        });

        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
}

/**
 * Lấy instance DetailInformationApi singleton.
 * @param token Chuỗi token nếu có (SSR truyền vào).
 */
// export function getDetailInformationApi(token?: string): DetailInformationApi {
//   if (!detailInformationApiInstance) {
//     const axiosIns = getAxiosInstance(token);
//     const config = new Configuration({
//       basePath: process.env.NEXT_PUBLIC_API_BASE_URL
//       // Một số generator cho truyền axiosInstance trong config hoặc api constructor
//       // Nếu generator của bạn cho phép truyền axiosInstance vào config thì truyền như này:
//       // baseOptions: { axiosInstance: axiosIns }
//     });

//     detailInformationApiInstance = new DetailInformationApi(
//       config,
//       undefined,
//       axiosIns
//     );
//   }

//   return detailInformationApiInstance;
// }

export function getAuthApi(token?: string): AuthApi {
  if (!AuthApiInstance) {
    const axiosIns = getAxiosInstance(token);
    const config = new Configuration({
      basePath: process.env.NEXT_PUBLIC_API_BASE_URL
      // Một số generator cho truyền axiosInstance trong config hoặc api constructor
      // Nếu generator của bạn cho phép truyền axiosInstance vào config thì truyền như này:
      // baseOptions: { axiosInstance: axiosIns }
    });

    AuthApiInstance = new AuthApi(config, undefined, axiosIns);
  }

  return AuthApiInstance;
}
