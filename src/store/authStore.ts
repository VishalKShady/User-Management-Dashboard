import {create} from 'zustand';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set: any) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  logout: () => set({ token: null }),
}));

export default useAuthStore;
