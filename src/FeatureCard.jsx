export function FeatureCard({ title, children, dark }) {
  return (
    <div
      className={`rounded-2xl p-6 w-72 text-center shadow-md transition ${
        dark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      }`}
    >
      <h3 className="text-xl font-semibold mb-3 text text-blue-500">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
