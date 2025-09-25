import api from './api';
export const authService = {
  // dang nhap
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response;
  },
  
  // dang ky
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response;
  },
  
  // dang xuat
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response;
  },
  
  // Lấy thông tin user hiện tại
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response;
  },
  
  // lam moi token
  refreshToken: async () => {
    const response = await api.post('/auth/refresh');
    return response;
  },
  
  // quen mat khau
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response;
  },
  
  // dat lai mat khau
  resetPassword: async (token, newPassword) => {
    const response = await api.post('/auth/reset-password', {
      token,
      password: newPassword,
    });
    return response;
  },
  
  // doi mat khau
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.post('/auth/change-password', {
      current_password: currentPassword,
      new_password: newPassword,
    });
    return response;
  },
  
  // xac thuc email
  verifyEmail: async (token) => {
    const response = await api.post('/auth/verify-email', { token });
    return response;
  },
  
  // gui lai ma neu user yeu cau
  resendVerificationEmail: async () => {
    const response = await api.post('/auth/resend-verification');
    return response;
  },
};