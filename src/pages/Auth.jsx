import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Login successful!");
        window.location.href = "/dashboard";
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Account created! Check your email if confirmation is enabled.");
        setIsLogin(true);
      }
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          SkillBridge Academy
        </p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-950">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="mt-2 text-slate-600">
          {isLogin
            ? "Log in to continue your learning journey."
            : "Join SkillBridge Academy and start learning today."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            required
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 w-full text-center font-bold text-blue-600"
        >
          {isLogin
            ? "Need an account? Register"
            : "Already have an account? Login"}
        </button>
      </div>
    </main>
  );
}