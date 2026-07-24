import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function getRoleDestination(role) {
  if (role === "admin") return "/admin";
  if (role === "instructor") return "/instructor";
  return "/dashboard";
}

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}) {
  const { user, profile, loading } = useAuth();

  if (loading || (user && !profile)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-bold">Loading account...</h2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(profile.role)
  ) {
    return (
      <Navigate
        to={getRoleDestination(profile.role)}
        replace
      />
    );
  }

  return children;
}