import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { NoMatch } from './pages/404';

import { AuthProvider } from './context/auth/AuthProvider';



export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}
