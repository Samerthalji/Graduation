import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.password) e.password = 'Password is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    navigate('/home');
  };

  return (
    <div className="bg-gray-50 antialiased font-sans min-h-screen flex items-center justify-center p-2">
      <div className="bg-white w-full max-w-6xl h-[700px] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-indigo-900">
          <img src="/pexels-kampus-8353789.jpg" alt="Professional Career"
            className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent"></div>
          <div className="relative z-10 p-16 flex flex-col justify-end h-full text-white">
            <h1 className="text-4xl text-center lg:text-5xl font-extrabold mb-6 leading-tight">
              Welcome back, <br /> <span className="text-indigo-400">Future Builder</span>
            </h1>
            <p className="text-indigo-100 text-lg max-w-md leading-relaxed">
              Your next career milestone is waiting for you. Log in to see who's looking for your skills today
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 lg:p-10 flex flex-col justify-center bg-white">
          <img src="/5.png" alt="Logo" className="w-40 mx-auto" />
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold mb-2 text-blue-800">Login to Account</h2>
            <p className="text-indigo-900">Please enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-sm font-semibold text-indigo-900 mb-2 px-5">Email Address</label>
              <input type="email" placeholder="name@example.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all" />
              {errors.email && <p className="text-red-500 text-xs mt-1 px-5">{errors.email}</p>}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-indigo-900 px-5">Password</label>
                <Link to="#" className="text-sm text-blue-800 font-bold hover:underline">Forgot?</Link>
              </div>
              <input type="password" placeholder="••••••••"
                value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all" />
              {errors.password && <p className="text-red-500 text-xs mt-1 px-5">{errors.password}</p>}
            </div>

            <div className="relative mb-8 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <span className="relative bg-white px-4 text-sm text-gray-400 uppercase tracking-widest">Or login with Email</span>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-[0.98] mb-8 font-semibold text-gray-700">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
              Sign in with Google
            </button>

            <button type="submit" className="w-full bg-blue-800 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-200 active:scale-[0.99] mt-4">
              Login
            </button>
          </form>

          <p className="text-center mt-10 text-gray-500">
            Don't have an account? <Link to="/signup" className="text-blue-800 font-extrabold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
