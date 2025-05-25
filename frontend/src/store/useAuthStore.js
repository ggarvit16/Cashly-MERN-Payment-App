import axios from 'axios';
import { create } from 'zustand';



export const useAuthStore = create((set, get) => ({
    authUser: null,
    balance:"",
    isAuthLoading: true,
    isSigningUp: false,
    isLoggingIn: false,
    selectedUser: null,

    checkAuth: async () => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get("http://localhost:3000/api/v1/user/check", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            set({ authUser: response.data.user, isAuthLoading: false })
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
            set({ authUser: null, isAuthLoading: false });
        }
    },
}))