export function Footer({ dark }) {
  return (
    <footer
      className={`flex justify-center  text-center  py-6 transition ${
        dark ? "bg-gray-950 text-gray-400" : "bg-gray-200 text-gray-700"
      }`}
    >
      <p>© 2025 MyBrand. Day & Night. All rights reserved.</p>
    </footer>
  );
}
