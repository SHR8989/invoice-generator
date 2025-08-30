export default function Footer() {
  return (
    <footer className="bg-[rgb(15,23,42)] text-gray-400 text-center ">
      <p>© {new Date().getFullYear()} Shreyansh | Invoice Generator</p>
      <p className="text-sm mt-1">
        Built with ❤️ using React & TailwindCSS
      </p>
    </footer>
  );
}
