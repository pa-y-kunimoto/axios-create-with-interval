import {axiosEx} from "../utils/axios";

// exportして他のファイルから呼び出せるようにする
export const sampleApiClient = axiosEx.create({
  baseURL: "http://localhost:3000",
  interval: 500, // [ms]
});
