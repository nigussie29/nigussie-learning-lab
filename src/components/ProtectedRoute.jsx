import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}) {
  const { user, profile, loading } = useAuth();

  if (loading || (user && !profile)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-bold">
          Loading account...
        </h2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(profile?.role)
  ) {
    if (profile?.role === "admin") {
      return <Navigate to="/admin" replace />;
    }

    if (profile?.role === "instructor") {
      return <Navigate to="/instructor" replace />;
    }

    return <Navigate to="/dashboard" replace />;
  }

  return children;
}