import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        console.log("SIGNED IN USER:", data.user);
        console.log("SUPABASE SESSION:", data.session);

        alert("Login successful!");

        window.location.href = "/instructor";
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) {
          throw error;
        }

        console.log("CREATED USER:", data.user);
        console.log("SUPABASE SESSION:", data.session);

        if (data.session) {
          alert("Account created and signed in.");
          window.location.href = "/instructor";
        } else {
          alert(
            "Account created. Check your email to confirm your account before logging in."
          );
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.error("Authentication error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  function switchMode() {
    setIsLogin((previous) => !previous);
    setPassword("");
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
              onChange={(event) => setFullName(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading
              ? "Please wait..."
              : isLogin
                ? "Login"
                : "Create Account"}
          </button>
        </form>

        <button
          type="button"
          onClick={switchMode}
          disabled={loading}
          className="mt-6 w-full text-center font-bold text-blue-600 disabled:text-slate-400"
        >
          {isLogin
            ? "Need an account? Register"
            : "Already have an account? Login"}
        </button>
      </div>
    </main>
  );
}