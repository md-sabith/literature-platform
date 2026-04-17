import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPortal from './pages/AdminPortal';
import AdminDashboard from './pages/AdminDashboard';
import AdminLeaderboard from './pages/AdminLeaderboard';
import UserWorks from './pages/UserWorks';
import LeaderboardPage from './pages/LeaderboardPage';
import LiveFeed from './pages/LiveFeed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/admin/feed" element={<LiveFeed />} />
        <Route path="/user-works" element={<UserWorks />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/leaderboard" element={<AdminLeaderboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;