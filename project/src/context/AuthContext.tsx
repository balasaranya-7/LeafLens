import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface LocalUser {
  id: string;
  email: string;
}

interface AuthContextValue {
  user: LocalUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_KEY = 'leaflens_users';
const SESSION_KEY = 'leaflens_session';

interface StoredUser {
  id: string;
  email: string;
  password: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const session = localStorage.getItem(SESSION_KEY);

      if (session) {
        setUser(JSON.parse(session));
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const users: StoredUser[] = JSON.parse(
      localStorage.getItem(USERS_KEY) || '[]'
    );

    const existingUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!existingUser) {
      return { error: 'No account found with this email. Please register first.' };
    }

    if (existingUser.password !== password) {
      return { error: 'Incorrect password.' };
    }

    const loggedInUser: LocalUser = {
      id: existingUser.id,
      email: existingUser.email,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return { error: null };
  };

  const signUp = async (email: string, password: string) => {
    const users: StoredUser[] = JSON.parse(
      localStorage.getItem(USERS_KEY) || '[]'
    );

    const emailExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return { error: 'An account with this email already exists.' };
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return { error: null };
  };

  const signOut = async () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return ctx;
}