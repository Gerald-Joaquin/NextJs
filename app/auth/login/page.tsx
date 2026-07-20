"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-2xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white">
              🔐
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-slate-400 mt-2">
              Login to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 pr-14 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-300">
                <input
                  type="checkbox"
                  className="accent-indigo-600"
                />
                Remember me
              </label>

              <a
                href="forgot-password"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-700"></div>
              <span className="text-slate-500 text-sm">OR</span>
              <div className="h-px flex-1 bg-slate-700"></div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl flex justify-center items-center gap-3 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-slate-400 mt-8">
            Don't have an account?{" "}
            <a
              href="register"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}