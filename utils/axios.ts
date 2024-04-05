import axios from "axios";

const createAxiosInstance: CreateAxiosInstance = ({
  interval = 0, 
  ...param
} = {}) => {
  const instance = axios.create(param);

  // 間隔が必ず0ミリ秒以上になるように調整する
  const requestInterval = interval > 0 ? interval : 0;
  
  if (requestInterval > 0) {
    instance.interceptors.request.use(async (config) => {
      await sleep(requestInterval);
      return config;
    });
  }

  return instance;
};

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// exportして他のファイルから呼び出せるようにする
export const axiosEx = {
  create: createAxiosInstance,
};

// 以下、型定義
type Axios = typeof axios;
type AxiosCreate = Axios["create"];
type AxiosCreateParam = Parameters<AxiosCreate>[0];
type AxiosCreateReturn = ReturnType<AxiosCreate>;

type AxiosExCreateParam = AxiosCreateParam & {
  /**
   * リクエスト間の待機時間 [ms]
   * @default 0
   */
  interval?: number;
};
type AxiosExCreateReturn = AxiosCreateReturn;
type CreateAxiosInstance = (params?: AxiosExCreateParam) => AxiosExCreateReturn;
