import { Configuration, JustLogSomethingApi } from "@/api";

type Options = {
  token?: string,
  isServer?: boolean,
};

// Hàm tạo configuration phù hợp môi trường
const createConfig = ({ token, isServer }: Options) => {
  return new Configuration({
    basePath: isServer
      ? process.env.API_BASE_URL
      : process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: token ? () => token : undefined,
  });
};

// Tạo các instance API (bạn có thể mở rộng thêm)
export const createUserApi = (opts: Options = {}) => {
  return new JustLogSomethingApi(createConfig(opts));
};
