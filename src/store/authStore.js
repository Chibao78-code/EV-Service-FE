import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '../constants/config';
// call api
const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true });
        try {
          const response = await mockLogin(credentials);
          
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: error.message };
        }
      },
      
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
      
      updateUser: (userData) => {
        set((state) => ({
          user: { ...state.user, ...userData },
        }));
      },
      
      checkAuth: () => {
        const state = get();
        return state.isAuthenticated && state.token;
      },
    }),
    {
      name: STORAGE_KEYS.AUTH_TOKEN,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
//mock api neu co
async function mockLogin(credentials) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: 'Nguyễn Văn A',
          role: 'user',
          avatar: null,
        },
        token: 'mock-jwt-token-123456',
      });
    }, 1000);
  });
}

export default useAuthStore;