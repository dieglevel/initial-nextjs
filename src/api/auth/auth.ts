// import { ApiResponse } from "../api-response";

// import api from "@/lib/axios";

// interface ApiAuthLoginResponse {
//   identifier: string;
//   password: string;
// }

// export const apiAuthLogin = async ({
//   identifier,
//   password,
// }: ApiAuthLoginResponse): Promise<ApiResponse<ApiAuthLoginResponse>> => {
//   const response = await api.post<ApiResponse<ApiAuthLoginResponse>>(
//     "/auth/login",
//     {
//       identifier,
//       password,
//     }
//   );
//   const data = response.data;
// };
