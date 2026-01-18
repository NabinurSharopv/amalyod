import axios from 'axios';

interface AxiosType {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
  params?: object;
}

export const useAxios = () => {
  const request = ({ url, method, body, params }: AxiosType) => {
    return axios({
      url: `${import.meta.env.VITE_API_URL}${url}`,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      params: {
        access_token: import.meta.env.VITE_ACCESS_TOKEN || '',
        ...params,
      },
    })
      .then((res) => res.data.data)
      .catch((error) => {
        console.error('API Error:', error);
        throw error;
      });
  };

  return { request };
};  