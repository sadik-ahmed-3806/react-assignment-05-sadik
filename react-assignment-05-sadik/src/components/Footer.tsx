type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: Record<"product" | "company" | "legal", FooterLink[]> = {
  product: [
    { label: "Home", href: "#home" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};

const socialLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-pink-600 to-purple-600 text-[13px] font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-gray-900">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-600"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {(["product", "company", "legal"] as const).map((section) => (
            <div key={section}>
              <h4 className="text-sm font-bold capitalize text-gray-900">
                {section}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {footerLinks[section].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-pink-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-sm text-gray-500 transition-colors hover:text-pink-600"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-sm text-gray-500 transition-colors hover:text-pink-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
