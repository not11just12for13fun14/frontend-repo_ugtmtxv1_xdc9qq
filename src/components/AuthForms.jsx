import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    const body = new URLSearchParams();
    body.append('username', email);
    body.append('password', password);
    try {
      const res = await fetch(`${API_BASE}/auth/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error('Credenziali non valide');
      const data = await res.json();
      const token = data.access_token;
      const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      const me = await meRes.json();
      onSuccess({ token, user: me });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-[#2C3E50]">Accedi</h2>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input className="w-full border rounded px-3 py-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <button disabled={loading} className="w-full bg-[#2C3E50] text-white rounded px-4 py-2 disabled:opacity-60">{loading ? 'Accesso...' : 'Entra'}</button>
    </form>
  );
};

export const RegisterForm = ({ onSuccess }) => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name, email, password, role }),
      });
      if (!res.ok) throw new Error('Registrazione non riuscita');
      const user = await res.json();
      onSuccess({ user });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-[#2C3E50]">Registrati</h2>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <input className="w-full border rounded px-3 py-2" placeholder="Nome completo" value={full_name} onChange={e=>setFullName(e.target.value)} required />
      <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input className="w-full border rounded px-3 py-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <select className="w-full border rounded px-3 py-2" value={role} onChange={e=>setRole(e.target.value)}>
        <option value="student">Studente</option>
        <option value="instructor">Docente</option>
      </select>
      <button disabled={loading} className="w-full bg-[#E67E22] text-white rounded px-4 py-2 disabled:opacity-60">{loading ? 'Invio...' : 'Crea account'}</button>
    </form>
  );
};
