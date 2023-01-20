import { Routes, Route, Link } from "react-router-dom";

import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
