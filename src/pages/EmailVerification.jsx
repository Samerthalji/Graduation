import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function EmailVerification() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    navigate('/home'); // توجيه للرئيسية بعد النجاح
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-center justify-center py-12 px-4 flex-col items-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-6">
            <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Verify Your Email</h2>
          <p className="mt-3 text-sm text-gray-500">Enter the 6-digit code sent to your email address</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleVerify}>
          <input 
            type="text" 
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
            className="w-full h-16 text-center text-3xl font-bold border-2 border-gray-200 rounded-xl focus:border-indigo-500 tracking-[1.2rem] font-mono pl-[1.2rem] outline-none"
            placeholder="000000"
          />
          <button type="submit" className="w-full py-3 font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all">
            Verify Account
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Didn't receive code? <button className="font-bold text-indigo-600 ml-1">Resend</button></p>
          <Link to="/signup" className="block mt-4 text-xs text-gray-400 italic">Back to signUp</Link>
        </div>
      </div>
    </main>
  );
}