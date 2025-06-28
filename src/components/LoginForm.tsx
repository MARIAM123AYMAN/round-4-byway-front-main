import { useState } from "react";

const DividerWithText = ({ text = 'Sign in' }: { text?: string }) => (
  <div className="flex items-center gap-4 my-4">
    <hr className="flex-grow border-t border-gray-300" />
    <span className="text-sm text-gray-500 whitespace-nowrap">{text}</span>
    <hr className="flex-grow border-t border-gray-300" />
  </div>
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [authError, setAuthError] = useState('');

  const fixedEmail = 'admin@example.com';
  const fixedPassword = '123456';

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (email === fixedEmail && password === fixedPassword) {
        setLoggedIn(true);
        setAuthError('');
      } else {
        setAuthError('Email or password is incorrect');
      }
    }
  };

  if (loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <h1 className="text-2xl font-bold text-green-700">✅ Logged in successfully!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6"
          noValidate
        >
          <h2 className="text-2xl font-bold text-center">Sign in to your account</h2>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Username or Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {authError && (
            <p className="text-red-600 text-sm font-medium text-center">{authError}</p>
          )}

          <button
            type="submit"
            className=" bg-black text-white p-2 rounded hover:bg-gray-800"
          >
            Sign in →
          </button>
          <DividerWithText text="Sign in" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button className="flex items-center justify-center border rounded py-2 px-3 gap-2 hover:bg-gray-50">
              <span className="text-[#1877F2]" dangerouslySetInnerHTML={{ __html: `
                <svg width="20" height="20" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.4 20.9 10 21.8V14.89H7V12H10V9.79C10 6.8 11.79 5.19 14.5 5.19C15.76 5.19 17.07 5.4 17.07 5.4V8H15.6C14.15 8 13.81 8.94 13.81 9.91V12H16.93L16.45 14.89H13.81V21.8C18.61 20.9 22 16.84 22 12Z" fill="currentColor"/>
                </svg>
              `}} />
              <span className="text-sm font-medium" style={{ color: '#1877F2' }}>Facebook</span>
            </button>

            <button className="flex items-center justify-center border rounded py-2 px-3 gap-2 hover:bg-gray-50">
              <span dangerouslySetInnerHTML={{ __html: `
                <svg width="20" height="20" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid">
                  <path d="M255.9 133.5c0-9.5-.8-18.5-2.3-27.3H130.5v51.7h70.5c-3 16-12.4 29.5-26.4 38.5v32.1h42.8c25-23 38.5-57 38.5-95z" fill="#4285F4"/>
                  <path d="M130.5 261c35.1 0 64.6-11.6 86.1-31.3l-42.8-32.1c-11.9 8-27.2 12.6-43.3 12.6-33.3 0-61.5-22.5-71.5-52.8H15.1v33.1c21.5 42.3 65.9 70.5 115.4 70.5z" fill="#34A853"/>
                  <path d="M59 157.4c-2.7-8-4.2-16.6-4.2-25.4s1.5-17.5 4.2-25.4v-33.1H15.1c-8.6 17.3-13.5 36.8-13.5 58.5s4.9 41.2 13.5 58.5L59 157.4z" fill="#FBBC05"/>
                  <path d="M130.5 51.6c19.1 0 36.3 6.6 49.8 19.4l37.3-37.3C195 11.7 165.6 0 130.5 0 80.9 0 36.5 28.2 15.1 70.5l43.9 33.1c10-30.3 38.2-52 71.5-52z" fill="#EA4335"/>
                </svg>
              `}} />
              <span className="text-sm font-medium" style={{ color: '#EA4335' }}>Google</span>
            </button>

            <button className="flex items-center justify-center border rounded py-2 px-3 gap-2 hover:bg-gray-50">
              <span dangerouslySetInnerHTML={{ __html: `
                <svg width="20" height="20" viewBox="0 0 23 23">
                  <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
                  <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
                  <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
                  <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
                </svg>
              `}} />
              <span className="text-sm font-medium" style={{ color: '#5E5E5E' }}>Microsoft</span>
            </button>
          </div>
        </form>
      </div>

      <div className="hidden  md:block md:w-1/2">
        <img
          src="\src\assets\Frame 427319048.png"
          alt="Login visual"
          className="w-full min:h-screen object-cover "
        />
      </div>
    </div>
  );
};

export default LoginForm;