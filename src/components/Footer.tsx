import { useApp } from '../App';
import { categories } from '../data/products';

export default function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const { lang, t, setCurrentView, setSelectedCategory, setSelectedProduct } = useApp();

  const goProducts = (cat?: string) => {
    setSelectedProduct(null);
    setSelectedCategory(cat || 'all');
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setSelectedProduct(null);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700">
                <span className="text-xl">💎</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Glaseox</h3>
                <p className="text-[10px] uppercase tracking-[0.15em] text-amber-500">Glass Packaging</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t('footer.desc')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><button onClick={goHome} className="text-sm hover:text-amber-400 transition-colors">{t('nav.home')}</button></li>
              <li><button onClick={() => goProducts()} className="text-sm hover:text-amber-400 transition-colors">{t('nav.products')}</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-sm hover:text-amber-400 transition-colors">{t('nav.about')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-sm hover:text-amber-400 transition-colors">{t('nav.contact')}</button></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('footer.categories')}</h4>
            <ul className="space-y-3">
              {categories.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <button onClick={() => goProducts(cat.slug)} className="text-sm hover:text-amber-400 transition-colors">
                    {cat.icon} {cat.name[lang] || cat.name.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('footer.newsletter')}</h4>
            <p className="text-sm mb-4">{t('footer.newsletterDesc')}</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
              />
              <button className="shrink-0 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:from-amber-600 hover:to-amber-700 transition-all">
                {t('footer.subscribe')}
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-amber-600 hover:text-white transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Glaseox. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">{lang === 'ro' ? 'Politica de Confidențialitate' : lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}</a>
            <a href="#" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">{lang === 'ro' ? 'Termeni și Condiții' : lang === 'ru' ? 'Условия использования' : 'Terms of Service'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
