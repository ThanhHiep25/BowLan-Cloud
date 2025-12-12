
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { fullName: string; email: string; phone: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage after hydration (client-side only)
  React.useEffect(() => {
    try {
      const storedUser = localStorage.getItem('bowlancloud_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      // Ignore errors
    }
  }, []);

  const login = async (email: string): Promise<void> => {
    // Simulate API Network Delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (typeof window === 'undefined') return;

    // Mock login logic
    const mockUser: User = {
      id: 'user-' + Date.now(),
      fullName: email.split('@')[0],
      email: email,
      avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=f97316&color=fff`
    };

    const storedReg = localStorage.getItem('bowlancloud_registered_db');
    if (storedReg) {
      const regData = JSON.parse(storedReg);
      if (regData.email === email) {
        mockUser.fullName = regData.fullName;
        mockUser.phone = regData.phone;
        mockUser.avatar = `https://ui-avatars.com/api/?name=${regData.fullName}&background=f97316&color=fff`;
      }
    }

    setUser(mockUser);
    localStorage.setItem('bowlancloud_user', JSON.stringify(mockUser));
  };

  const register = async (data: { fullName: string; email: string; phone: string; password: string }): Promise<void> => {
    // Simulate API Network Delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (typeof window === 'undefined') return;

    const newUser: User = {
      id: 'user-' + Date.now(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      avatar: `https://ui-avatars.com/api/?name=${data.fullName}&background=f97316&color=fff`
    };

    // Store in a "fake database" for the login simulation to pick up later
    localStorage.setItem('bowlancloud_registered_db', JSON.stringify(data));

    setUser(newUser);
    localStorage.setItem('bowlancloud_user', JSON.stringify(newUser));
  };

  const logout = () => {
    if (typeof window === 'undefined') return;
    setUser(null);
    localStorage.removeItem('bowlancloud_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
