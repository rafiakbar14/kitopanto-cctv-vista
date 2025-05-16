
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Session, User, AuthError } from '@supabase/supabase-js';

// Define types for our context
type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Set up auth state listener and check for existing session
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Login function using Supabase auth
  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Error logging in:', authError.message);
      throw new Error(authError.message);
    }
  };

  // Register function using Supabase auth
  const register = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password
      });
      
      if (error) throw error;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Error registering:', authError.message);
      throw new Error(authError.message);
    }
  };

  // Login with Google using Supabase auth
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });
      
      if (error) throw error;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Error logging in with Google:', authError.message);
      throw new Error(authError.message);
    }
  };

  // Logout function using Supabase auth
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Error logging out:', authError.message);
      throw new Error(authError.message);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
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
