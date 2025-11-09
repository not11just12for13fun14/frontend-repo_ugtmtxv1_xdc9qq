import React from 'react';
import Logo from './Logo';

const Navbar = ({ active, onNavigate, user, onLogout }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
        </div>
        <nav className="flex items-center gap-2 text-sm">
          <button className={`px-3 py-2 rounded-md hover:bg-gray-100 ${active === 'home' ? 'font-semibold text-[#2C3E50]' : 'text-gray-600'}`} onClick={() => onNavigate('home')}>Home</button>
          {!user && (
            <>
              <button className={`px-3 py-2 rounded-md hover:bg-gray-100 ${active === 'login' ? 'font-semibold text-[#2C3E50]' : 'text-gray-600'}`} onClick={() => onNavigate('login')}>Login</button>
              <button className={`px-3 py-2 rounded-md hover:bg-gray-100 ${active === 'register' ? 'font-semibold text-[#2C3E50]' : 'text-gray-600'}`} onClick={() => onNavigate('register')}>Registrati</button>
            </>
          )}
          {user && (
            <>
              <button className={`px-3 py-2 rounded-md hover:bg-gray-100 ${active === 'dashboard' ? 'font-semibold text-[#2C3E50]' : 'text-gray-600'}`} onClick={() => onNavigate('dashboard')}>Dashboard</button>
              {user.role === 'admin' && (
                <button className={`px-3 py-2 rounded-md hover:bg-gray-100 ${active === 'admin' ? 'font-semibold text-[#2C3E50]' : 'text-gray-600'}`} onClick={() => onNavigate('admin')}>Admin</button>
              )}
              <button className="ml-2 px-3 py-2 rounded-md bg-[#2C3E50] text-white hover:brightness-95" onClick={onLogout}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
