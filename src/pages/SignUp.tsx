import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import useAuthStore from '../store/authStore';
import Input from '../components/Input';  

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const data = await register(email, password);
      setToken(data.token);  // Set the authentication token in Zustand store
      navigate('/dashboard');  // Navigate to dashboard on successful sign-up
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
