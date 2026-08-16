import { DollarSign, Lock, User } from "lucide-react";

const LoginScreen = ({ onLogin }) => {
  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 p-4 sm:p-6">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-zinc-200/60">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 text-center">
          <div className="bg-blue-900 p-3 rounded-2xl mb-3 shadow-sm">
            <DollarSign className="text-white" size={24} />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            Finance Window
          </h1>

          <p className="text-sm text-zinc-600 mt-1">
            Sign in to manage your budgets and finances.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          {/* Email / Username Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1"
            >
              Email Address
            </label>

            <div className="relative rounded-xl shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-zinc-400" />
              </div>

              <input
                type="email"
                name="email"
                id="email"
                required
                defaultValue="admin@example.com"
                className="block w-full pl-10 pr-3 py-2.5 min-h-[44px] border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm bg-white"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1"
            >
              Password
            </label>

            <div className="relative rounded-xl shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-zinc-400" />
              </div>

              <input
                type="password"
                name="password"
                id="password"
                required
                defaultValue="password123"
                className="block w-full pl-10 pr-3 py-2.5 min-h-[44px] border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm bg-white"
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[44px] flex items-center justify-center py-2.5 px-4 rounded-xl shadow-sm text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-colors cursor-pointer"
            >
              Sign in to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;