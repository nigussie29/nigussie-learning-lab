import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-bold transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
    light: "bg-white text-blue-700 hover:bg-blue-50",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}