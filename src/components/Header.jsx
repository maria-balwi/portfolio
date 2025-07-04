import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5 md:px-6">
        <Link to="/" className="text-3xl">Maria Balwi</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-lg">
          <Link to="/about">about</Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contact">contact</Link>
        </div>

        {/* Hamburger button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center md:hidden" style={{ backgroundColor: "#1F1F1F" }}>
          <Link to="/about" className="w-full text-center border-b border-white/25 py-4" onClick={() => setIsOpen(false)}>
            about
          </Link>
          <Link to="/portfolio" className="w-full text-center border-b border-white/25 py-4" onClick={() => setIsOpen(false)}>
            portfolio
          </Link>
          <Link to="/contact" className="w-full text-center py-4" onClick={() => setIsOpen(false)}>
            contact
          </Link>
        </div>
      )}
    </nav>

  );
}

