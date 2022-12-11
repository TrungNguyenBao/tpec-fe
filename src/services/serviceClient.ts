import axios from "axios";

const serviceClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
});

export const serviceClientNoAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
});

serviceClient.interceptors.request.use(
  (config: any) => {
    const customHeaders: any = {};
    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // but you can override for some requests
      },
    };
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

serviceClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error?.response?.data;
  }
);

export default serviceClient;
