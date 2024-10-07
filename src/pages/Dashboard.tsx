import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Dashboard = () => {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Handle user logout
  const handleLogout = () => {
    logout();  // Clear token from Zustand store
    navigate('/signin');  // Redirect to Sign In page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the Dashboard</h1>

        <div className="mb-6">
          <p className="text-gray-600">
            You are successfully logged in!
          </p>
          {token && (
            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-700">Your Token:</h2>
              <p className="break-all text-gray-500 mt-2">{token}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
