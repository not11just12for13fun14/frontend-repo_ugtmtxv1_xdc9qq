import React, { useEffect, useMemo, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

const AdminPanel = ({ token }) => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', level: 'beginner', price: 0, published: false });
  const [editingId, setEditingId] = useState(null);
  const headers = useMemo(() => ({
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }), [token]);

  const load = async () => {
    const [c, u] = await Promise.all([
      fetch(`${API_BASE}/courses`).then(r => r.json()),
      fetch(`${API_BASE}/admin/users`, { headers }).then(r => r.json()).catch(() => []),
    ]);
    setCourses(Array.isArray(c) ? c : []);
    setUsers(Array.isArray(u) ? u : []);
  };

  useEffect(() => { load(); }, [token]);

  const saveCourse = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ ...form, price: Number(form.price) });
    const res = await fetch(`${API_BASE}/courses`, { method: 'POST', headers, body });
    if (res.ok) { setForm({ title: '', description: '', level: 'beginner', price: 0, published: false }); load(); }
  };

  const startEdit = (course) => {
    setEditingId(course.id);
    setForm({
      title: course.title,
      description: course.description,
      level: course.level,
      price: course.price,
      published: course.published,
      thumbnail_url: course.thumbnail_url || '',
    });
  };

  const updateCourse = async () => {
    const body = JSON.stringify({ ...form, price: Number(form.price) });
    const res = await fetch(`${API_BASE}/courses/${editingId}`, { method: 'PATCH', headers, body });
    if (res.ok) { setEditingId(null); load(); }
  };

  const deleteCourse = async (id) => {
    const res = await fetch(`${API_BASE}/courses/${id}`, { method: 'DELETE', headers });
    if (res.ok) load();
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-[#2C3E50]">Pannello Admin</h2>
      <p className="text-gray-600 mb-6">Crea, modifica, elimina corsi. Gestisci utenti.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={saveCourse} className="rounded-lg border p-4 bg-white">
          <h3 className="font-semibold text-[#2C3E50] mb-3">Crea nuovo corso</h3>
          <div className="grid gap-3">
            <input className="border rounded px-3 py-2" placeholder="Titolo" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} required />
            <textarea className="border rounded px-3 py-2" placeholder="Descrizione" rows={3} value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} required />
            <div className="grid grid-cols-2 gap-3">
              <select className="border rounded px-3 py-2" value={form.level} onChange={e=>setForm(f=>({...f,level:e.target.value}))}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <input type="number" step="0.01" className="border rounded px-3 py-2" placeholder="Prezzo" value={form.price} onChange={e=>setForm(f=>({...f,price:e.target.value}))} />
            </div>
            <div className="flex items-center gap-2">
              <input id="pubb" type="checkbox" checked={form.published} onChange={e=>setForm(f=>({...f,published:e.target.checked}))} />
              <label htmlFor="pubb">Pubblicato</label>
            </div>
            <input className="border rounded px-3 py-2" placeholder="Thumbnail URL (opzionale)" value={form.thumbnail_url||''} onChange={e=>setForm(f=>({...f,thumbnail_url:e.target.value}))} />
            <button className="bg-[#E67E22] text-white rounded px-4 py-2">Salva corso</button>
          </div>
        </form>

        <div className="rounded-lg border p-4 bg-white">
          <h3 className="font-semibold text-[#2C3E50] mb-3">Corsi esistenti</h3>
          <div className="space-y-3">
            {courses.map(c => (
              <div key={c.id} className="border rounded p-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium text-[#2C3E50]">{c.title} {c.published ? <span className="text-green-600 text-xs">(pubblicato)</span> : <span className="text-gray-500 text-xs">(bozza)</span>}</div>
                  <div className="text-sm text-gray-600 line-clamp-2">{c.description}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded border" onClick={() => startEdit(c)}>Modifica</button>
                  <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => deleteCourse(c.id)}>Elimina</button>
                </div>
              </div>
            ))}
          </div>

          {editingId && (
            <div className="mt-4 border-t pt-4">
              <h4 className="font-semibold mb-2">Modifica corso</h4>
              <div className="grid gap-3">
                <input className="border rounded px-3 py-2" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} />
                <textarea className="border rounded px-3 py-2" rows={3} value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} />
                <div className="grid grid-cols-2 gap-3">
                  <select className="border rounded px-3 py-2" value={form.level} onChange={e=>setForm(f=>({...f,level:e.target.value}))}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <input type="number" step="0.01" className="border rounded px-3 py-2" value={form.price} onChange={e=>setForm(f=>({...f,price:e.target.value}))} />
                </div>
                <div className="flex items-center gap-2">
                  <input id="pubb2" type="checkbox" checked={form.published} onChange={e=>setForm(f=>({...f,published:e.target.checked}))} />
                  <label htmlFor="pubb2">Pubblicato</label>
                </div>
                <input className="border rounded px-3 py-2" placeholder="Thumbnail URL (opzionale)" value={form.thumbnail_url||''} onChange={e=>setForm(f=>({...f,thumbnail_url:e.target.value}))} />
                <div className="flex gap-2">
                  <button className="bg-[#2C3E50] text-white rounded px-4 py-2" onClick={updateCourse}>Aggiorna</button>
                  <button className="border rounded px-4 py-2" onClick={() => setEditingId(null)}>Annulla</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 rounded-lg border p-4 bg-white">
        <h3 className="font-semibold text-[#2C3E50] mb-3">Utenti</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="py-2 pr-4">Nome</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Ruolo</th>
                <th className="py-2 pr-4">Attivo</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-t">
                  <td className="py-2 pr-4">{u.full_name}</td>
                  <td className="py-2 pr-4">{u.email}</td>
                  <td className="py-2 pr-4">{u.role}</td>
                  <td className="py-2 pr-4">{u.is_active ? 'Sì' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
