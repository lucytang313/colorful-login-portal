import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Apple } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen auth-gradient flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1E2956] mb-2">Welcome back!</h1>
          <p className="text-[#312763]/80">Glad to see you, Again!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#312763]/60 hover:text-[#312763]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="text-right">
            <Link to="/forgot-password" className="text-[#312763]/80 hover:text-[#312763] text-sm">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#4D1C77]/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-[#312763]/60">Or Login with</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="social-button">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="social-button">
            <Mail className="w-5 h-5" />
          </button>
          <button className="social-button">
            <Apple className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-[#312763]/80">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#4D1C77] font-medium hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;