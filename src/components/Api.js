// api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const api= {
  login: (token) => apiClient.post('/auth/google', { token }),
  submitFeedback: (feedback) => apiClient.post('/feedback', feedback),
  getCategories: () => apiClient.get('/feedback/categories'),
  getFeedbackByCategory: (category) =>
    apiClient.get(`/feedback/${category}`),
};
export default api;