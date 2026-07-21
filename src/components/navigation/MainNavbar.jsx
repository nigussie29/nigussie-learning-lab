import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const publicLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Knowledge Library", to: "/library" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const roleDashboardLinks = {
  student: {
    label: "Student Dashboard",
    to: "/student/dashboard",
  },

  instructor: {
    label: "Instructor Dashboard",
    to: "/instructor/dashboard",
  },

  admin: {
    label: "Admin Dashboard",
    to: "/admin/dashboard",
  },
};

export default function MainNavbar({
  user = null,
  role = "guest",
  onSignOut,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dashboardLink = roleDashboardLinks[role];

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function handleSignOut() {
    closeMobileMenu();

    if (onSignOut) {
      onSignOut();
    }

    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 text-xl font-black text-white">
            S
          </div>

          <div>
            <p className="text-lg font-black text-slate-950">
              SkillBridge Academy
            </p>

            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Learn · Build · Create
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {publicLinks.map((link) => (
            <NavigationLink
              key={link.to}
              to={link.to}
              label={link.label}
            />
          ))}

          {dashboardLink && (
            <NavigationLink
              to={dashboardLink.to}
              label={dashboardLink.label}
            />
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <UserBadge user={user} role={role} />

              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Get Started
              </NavLink>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-2xl text-slate-700 lg:hidden"
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <MobileMenu
          user={user}
          role={role}
          dashboardLink={dashboardLink}
          onClose={closeMobileMenu}
          onSignOut={handleSignOut}
        />
      )}
    </header>
  );
}

function NavigationLink({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-xl px-3 py-2.5 text-sm font-bold transition ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function UserBadge({ user, role }) {
  const displayName =
    user?.name ||
    user?.fullName ||
    user?.email ||
    "SkillBridge User";

  const firstLetter = displayName
    .charAt(0)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-black text-white">
        {firstLetter}
      </div>

      <div className="max-w-36">
        <p className="truncate text-sm font-extrabold text-slate-900">
          {displayName}
        </p>

        <p className="text-xs font-bold capitalize text-slate-500">
          {role}
        </p>
      </div>
    </div>
  );
}

function MobileMenu({
  user,
  role,
  dashboardLink,
  onClose,
  onSignOut,
}) {
  return (
    <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
      <nav className="space-y-2">
        {publicLinks.map((link) => (
          <NavigationLink
            key={link.to}
            to={link.to}
            label={link.label}
            onClick={onClose}
          />
        ))}

        {dashboardLink && (
          <NavigationLink
            to={dashboardLink.to}
            label={dashboardLink.label}
            onClick={onClose}
          />
        )}
      </nav>

      <div className="mt-5 border-t border-slate-200 pt-5">
        {user ? (
          <div className="space-y-4">
            <UserBadge user={user} role={role} />

            <button
              type="button"
              onClick={onSignOut}
              className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-bold text-red-700"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="grid gap-3">
            <NavLink
              to="/login"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-4 py-3 text-center font-bold text-slate-700"
            >
              Sign In
            </NavLink>

            <NavLink
              to="/register"
              onClick={onClose}
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white"
            >
              Get Started
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}