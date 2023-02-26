import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { NoMatch } from './pages/404';

import { useAuth, AuthProvider } from "./hooks/useAuth";

export default function App() {
  const { user, loading } = useAuth();

  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/registration" element={user ? <Navigate to="/profile" replace /> : <Registration />} />
        <Route path="/login" element={user ? <Navigate to="/profile" replace /> : <Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}
