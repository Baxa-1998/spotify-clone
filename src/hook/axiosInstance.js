import axios from "axios";

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config) => {
    // Отменяем предыдущий запрос перед отправкой нового
    if (axiosInstance.activeRequest) {
      axiosInstance.activeRequest.cancel();
    }
  
    // Создаем новый CancelToken для нового запроса
    config.cancelToken = new axios.CancelToken((cancel) => {
      axiosInstance.activeRequest = { cancel };
    });
  
    return config;
  });
  
  export default axiosInstance;