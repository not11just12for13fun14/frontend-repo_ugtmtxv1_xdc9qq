import React, { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CourseShowcase from './components/CourseShowcase';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { LoginForm, RegisterForm } from './components/AuthForms';
import AdminPanel from './components/AdminPanel';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function App() {
  const [route, setRoute] = useState('home');
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : { token: '', user: null };
  });

  const headers = useMemo(() => ({
    'Content-Type': 'application/json',
    ...(auth.token ? { Authorization: `Bearer ${auth.token}` } : {}),
  }), [auth.token]);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const logout = () => {
    setAuth({ token: '', user: null });
    setRoute('home');
  };

  const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      fetch(`${API_BASE}/courses`).then(r => r.json()).then(setCourses).catch(() => setCourses([]));
    }, []);
    return (
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-[#2C3E50]">I tuoi corsi</h2>
        <p className="text-gray-600 mb-6">Benvenuto{auth.user ? `, ${auth.user.full_name}` : ''}!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(c => (
            <div key={c.id} className="rounded-lg border p-4 bg-white">
              <div className="font-semibold text-[#2C3E50]">{c.title}</div>
              <div className="text-sm text-gray-600 line-clamp-3">{c.description}</div>
              <div className="mt-2 text-xs text-gray-500">Livello: {c.level} • {c.published ? 'Pubblicato' : 'Bozza'}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#2C3E50]">
      <Navbar active={route} onNavigate={setRoute} user={auth.user} onLogout={logout} />

      {route === 'home' && (
        <>
          <Hero />
          <FeatureGrid />
          <CourseShowcase />
        </>
      )}

      {route === 'login' && (
        <div className="py-12">
          <LoginForm onSuccess={({ token, user }) => { setAuth({ token, user }); setRoute('dashboard'); }} />
        </div>
      )}

      {route === 'register' && (
        <div className="py-12">
          <RegisterForm onSuccess={() => setRoute('login')} />
        </div>
      )}

      {route === 'dashboard' && auth.user && (
        <Dashboard />
      )}

      {route === 'admin' && auth.user && auth.user.role === 'admin' && (
        <AdminPanel token={auth.token} />
      )}

      <Footer />
    </div>
  );
}

export default App;
