
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from "sonner";

// Define types for our context
type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | null>(null);

// In a real app, these would connect to an auth service like Firebase, Auth0, etc.
// For this demo, we'll simulate authentication

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const savedUser = localStorage.getItem('kitopanto_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Failed to restore authentication state:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Mock login function - in a real app, this would call your auth service
  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation for demo purposes
    if (!email.includes('@') || password.length < 6) {
      throw new Error('Invalid credentials');
    }

    const user = {
      id: `user_${Date.now()}`,
      email,
      name: email.split('@')[0]
    };

    setUser(user);
    localStorage.setItem('kitopanto_user', JSON.stringify(user));
  };

  const register = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple validation for demo purposes
    if (!email.includes('@') || password.length < 6) {
      throw new Error('Invalid credentials');
    }

    // In a real app, you'd create a user in your backend here
    console.log('User registered:', { email });
    
    // For demo, we'll just return success without logging in automatically
    return;
  };

  const loginWithGoogle = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would open Google OAuth flow
    // For demo purposes, we'll simulate a successful login
    const mockGoogleUser = {
      id: `google_${Date.now()}`,
      email: 'demo.user@gmail.com',
      name: 'Demo User'
    };

    setUser(mockGoogleUser);
    localStorage.setItem('kitopanto_user', JSON.stringify(mockGoogleUser));
    toast.success("Login dengan Google berhasil");
  };

  const logout = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setUser(null);
    localStorage.removeItem('kitopanto_user');
    toast.info("Anda telah keluar dari sistem");
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      loginWithGoogle,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
