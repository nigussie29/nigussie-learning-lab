import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { session, profile, loading } = useAuth();

  if (loading) {
    return <div className="section py-20">Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && profile?.role !== 'admin') {
    return (
      <div className="section py-20">
        <h1 className="text-3xl font-bold">Admin Access Needed</h1>
        <p className="mt-3 text-slate-600">Your account is not an admin account yet.</p>
      </div>
    );
  }

  return children;
}
