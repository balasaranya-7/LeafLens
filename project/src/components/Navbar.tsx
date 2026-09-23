import { useEffect, useRef, useState } from 'react';
import { Sprout, Menu, X, ScanLine, Globe, ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { LANGUAGES, type LanguageCode } from '@/types';

interface NavbarProps {
  onScanClick: () => void;
  onAuthClick: (mode: 'login' | 'register') => void;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Experts', href: '#experts' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onScanClick, onAuthClick, language, onLanguageChange }: NavbarProps) {
  const { user, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-md shadow-primary-900/5'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-md shadow-primary-500/30">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-primary-800 tracking-tight">
              LeafLens<span className="text-secondary-600">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-lg transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLang.flag}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-primary-100 py-2 animate-fade-in-up max-h-80 overflow-y-auto">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        lang.code === language
                          ? 'bg-primary-50 text-primary-800 font-semibold'
                          : 'text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      <span className="inline-block w-8 font-mono text-xs">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth buttons */}
            {user ? (
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setUserMenuOpen((o) => !o)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-50 transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white text-xs font-bold">
                    {user.email?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-primary-700">
                    {user.email?.split('@')[0]}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-primary-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-primary-100 py-2 animate-fade-in-up">
                    <div className="px-4 py-2 border-b border-primary-50">
                      <p className="text-xs text-primary-400">Signed in as</p>
                      <p className="text-sm font-medium text-primary-800 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setUserMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-primary-700 hover:bg-primary-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => onAuthClick('login')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all"
                >
                  <UserIcon className="w-4 h-4" />
                  Login
                </button>
                <button
                  onClick={() => onAuthClick('register')}
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-primary-700 border border-primary-300 hover:bg-primary-50 rounded-lg transition-all"
                >
                  Register
                </button>
              </>
            )}

            {/* Scan CTA */}
            <button
              onClick={onScanClick}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:-translate-y-0.5 transition-all"
            >
              <ScanLine className="w-4 h-4" />
              Scan Your Leaf
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 text-primary-700 hover:bg-primary-50 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-primary-100 animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-primary-100 space-y-2">
              {!user && (
                <>
                  <button
                    onClick={() => {
                      onAuthClick('login');
                      setMobileOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-lg transition-colors text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      onAuthClick('register');
                      setMobileOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-sm font-semibold text-primary-700 border border-primary-300 hover:bg-primary-50 rounded-lg transition-colors text-left"
                  >
                    Register
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  onScanClick();
                  setMobileOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg shadow-lg shadow-primary-500/25"
              >
                <ScanLine className="w-4 h-4" />
                Scan Your Leaf
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
