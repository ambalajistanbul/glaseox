import { useState, useEffect } from 'react';
import { useApp } from '../App';
import { Lang } from '../data/translations';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const langNames: Record<Lang, string> = { en: 'English', ro: 'Română', ru: 'Русский' };
const langFlags: Record<Lang, string> = { en: '🇬🇧', ro: '🇷🇴', ru: '🇷🇺' };

export default function Header({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const { lang, setLang, t, setCurrentView, setSelectedCategory, setSelectedProduct } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = () => {
    setSelectedProduct(null);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const goProducts = () => {
    setSelectedProduct(null);
    setSelectedCategory('all');
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button onClick={goHome} className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-200/50 transition-transform group-hover:scale-110">
              <span className="text-xl">💎</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Glaseox
              </h1>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-600">Glass Packaging</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={goHome} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">{t('nav.home')}</button>
            <button onClick={goProducts} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">{t('nav.products')}</button>
            <button onClick={() => { scrollToSection('about'); setMobileOpen(false); }} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">{t('nav.about')}</button>
            <button onClick={() => { scrollToSection('contact'); setMobileOpen(false); }} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">{t('nav.contact')}</button>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:border-amber-300 hover:bg-amber-50 transition-all"
              >
                <Globe className="h-4 w-4 text-amber-600" />
                <span className="hidden sm:inline">{langFlags[lang]}</span>
                <span className="hidden md:inline text-xs">{langNames[lang]}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden">
                  {(['en', 'ro', 'ru'] as Lang[]).map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${lang === l ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <span className="text-lg">{langFlags[l]}</span>
                      <span>{langNames[l]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-200/50 hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-xl"
            >
              {t('hero.cta2')}
            </button>

            {/* Mobile Menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="space-y-1 px-4 py-4">
            <button onClick={goHome} className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">{t('nav.home')}</button>
            <button onClick={goProducts} className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">{t('nav.products')}</button>
            <button onClick={() => { scrollToSection('about'); setMobileOpen(false); }} className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">{t('nav.about')}</button>
            <button onClick={() => { scrollToSection('contact'); setMobileOpen(false); }} className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">{t('nav.contact')}</button>
            <button
              onClick={() => { scrollToSection('contact'); setMobileOpen(false); }}
              className="mt-2 block w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-center text-base font-semibold text-white"
            >
              {t('hero.cta2')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
