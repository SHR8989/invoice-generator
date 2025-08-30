import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[rgb(15,23,42)] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">📄 Invoice App</h1>

          <ul className="hidden md:flex space-x-8">
            <li>
              <Link to="/" className="hover:text-violet-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-violet-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-violet-400 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-700 px-4 py-3 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-400"
          >
            Contact
          </Link>
        </div>
      )}
      </nav>
    </>
  );
}
