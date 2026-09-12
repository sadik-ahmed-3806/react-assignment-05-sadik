import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="relative mx-auto flex h-[70px] max-w-[1280px] items-center px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            MOBILE HAMBURGER BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* =====================================================
            LOGO

            Image location:
            public/assets/logo-text.png

            If you use a different location, change the src.
        ====================================================== */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="absolute left-1/2 flex -translate-x-1/2 items-center lg:static lg:mr-auto lg:translate-x-0"
        >
          {/* Logo image */}
          <img
            src="/logo-text.png"
            alt="Dev Stack logo"
            className="h-8 w-auto"
          />
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] font-medium transition-colors ${
                link.label === "Home"
                  ? "text-pink-600"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* =====================================================
            RIGHT SIDE
            Sign In + Sign Up
        ====================================================== */}
        <div className="ml-auto flex items-center gap-3">

          {/* Sign In */}
          <button
            type="button"
            className="text-[13px] font-medium text-gray-600 transition-colors hover:text-pink-600"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-pink-600 px-5 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
            Sign Up
        </button>

        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-sm lg:hidden">
          <div className="mx-auto max-w-[1280px] px-5 py-3 sm:px-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`border-b border-gray-100 px-2 py-3 text-sm font-medium last:border-b-0 ${
                    link.label === "Home"
                      ? "text-pink-600"
                      : "text-gray-600 hover:text-pink-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;