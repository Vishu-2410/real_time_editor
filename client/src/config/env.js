export const env = {
  apiBaseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  socketUrl: import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000'
};
// export const env = {
//   apiBaseUrl: import.meta.env.VITE_API_URL || 'https://real-time-editor-0a2s.onrender.com/api',
//   socketUrl: import.meta.env.VITE_SOCKET_URL || 'https://real-time-editor-0a2s.onrender.com'
// };
