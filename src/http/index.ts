import axios from 'axios';

// we can directly use .post(), .get() methods with axios like this: axios.post().
// with .create([config]) we are creating new instance of axios with our config and storing it in api.

interface PhoneNumberReqBody {
  phone: string
}

interface OtpReqBody {
  otp: string,
  phone: string,
  hash: string,
}

interface ActivateReqBody {
  name: string,
  avatar: any,
}

interface createRoomReqBody {
  topic: string,
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});


//all of this functions returns a promise 
export const sendOtp = (data: PhoneNumberReqBody) => api.post('/api/send-otp', data);
export const verifyOtp = (data: OtpReqBody) => api.post('/api/verify-otp', data);
export const activate = (data: ActivateReqBody) => api.post('/api/activate', data);
export const logout = () => api.post('/api/logout');
export const createRoom = (data: createRoomReqBody) => api.post('/api/rooms', data);
export const getAllRooms = () => api.get('/api/rooms');
export const getRoom = (roomId: number) => api.get(`/api/room/${roomId}`)

// error type declaration hadeling
function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}


// Interceptors will intercepts all the above request from fontend end to backend.
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    // Here thi function will only act if there is an error on any requests that are being made above.
    console.log(error);
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axios.get(
          `${process.env.REACT_APP_API_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );

        return api.request(originalRequest);
      } catch (error) {
        console.log(getErrorMessage(error));
      }
    }
    throw error;
  }
);

export default api;