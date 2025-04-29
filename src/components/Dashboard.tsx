import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-10 space-y-8">
        <div className="text-center">
          <ShieldCheck className="mx-auto h-14 w-14 text-green-400" />
          <h1 className="mt-4 text-3xl font-bold">Welcome to the Dashboard</h1>
          <p className="text-sm text-gray-400">
            You’ve successfully logged in. Choose an option to continue.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => handleNavigate('/interactive')}
            className="py-3 px-6 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition hover:scale-105"
          >
            Webpage
          </button>

          <button
            onClick={() => handleNavigate('/dashdashboard')}
            className="py-3 px-6 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold transition hover:scale-105"
          >
            Dashboard
          </button>

          <button
            onClick={() => handleNavigate('/chatbot')}
            className="py-3 px-6 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold transition hover:scale-105"
          >
            Chatbot
          </button>

          <button
            onClick={() => handleNavigate('/mlmodel')}
            className="py-3 px-6 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold transition hover:scale-105"
          >
            ML Model
          </button>

          <button
            onClick={() => handleNavigate('/predictions')}
            className="py-3 px-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition hover:scale-105 col-span-full"
          >
            Predictions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;