import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types";

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,

      login: async (email) => {
        set({ isLoading: true });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful login
        const user: User = {
          id: "1",
          email,
          name: email.split("@")[0],
          avatar:
            "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
        };

        set({ user, isLoading: false });
      },

      register: async (email, name) => {
        set({ isLoading: true });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock successful registration
        const user: User = {
          id: "1",
          email,
          name,
          avatar:
            "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
        };

        set({ user, isLoading: false });
      },

      logout: () => set({ user: null }),

      isAuthenticated: () => !!get().user,
    }),
    {
      name: "auth-storage",
    }
  )
);
