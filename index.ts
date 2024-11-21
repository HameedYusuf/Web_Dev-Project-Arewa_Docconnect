export interface Message {
  message: string;
  sender?: string;
  timestamp?: Date;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

export interface ChatProps {
  socket: any;
}