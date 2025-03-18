"use client";
import { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Left Section - Logo */}
        <Link href="/" className="flex items-center">
          <svg className="h-6 w-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
          </svg>
          <span className="ml-3 font-bold text-gray-900">AFManager</span>
        </Link>

        {/* Center Section - Search Bar */}
        <div className="hidden lg:flex mx-4 flex-1 max-w-lg">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search features..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 px-2 py-1 rounded text-sm text-gray-500">
              ⌘K
            </div>
          </div>
        </div>

        {/* Right Section - Icons & Menu */}
        <div className="flex items-center lg:hidden">
          {/* Mobile Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="mr-4 text-gray-600 hover:text-gray-900"
          >
            <AiOutlineSearch size={24} />
          </button>

          {/* Hamburger Menu Icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-gray-900">
            {menuOpen ? <AiOutlineClose size={26} /> : <CiMenuFries size={26} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/docs" className="text-gray-600 hover:text-gray-900">Documentation</Link>
          <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="#installation" className="text-gray-600 hover:text-gray-900">Installation</Link>
          <a
            href="https://github.com/devrabiul/advanced-file-manager"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.203 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="px-4 pb-2 lg:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/docs" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              Documentation
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="#installation" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              Installation
            </Link>
            <a
              href="https://github.com/devrabiul/advanced-file-manager"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
