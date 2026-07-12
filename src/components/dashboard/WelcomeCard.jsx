export default function WelcomeCard({ name, message }) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
      <p className="font-bold text-blue-200">
        Student Learning Command Center
      </p>

      <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
        Welcome back, {name} 👋
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
        {message}
      </p>
    </section>
  );
}