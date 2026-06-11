import { useApp } from '../App';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { lang, setCurrentView, setSelectedCategory } = useApp();

  const goProducts = () => {
    setSelectedCategory('all');
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M0 20L20 0l20 20-20 20z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          {lang === 'ro' ? 'Pregătit să vă dezvoltați afacerea?' : lang === 'ru' ? 'Готовы развивать свой бизнес?' : 'Ready to Grow Your Business?'}
        </h2>
        <p className="text-lg text-amber-100 mb-10 max-w-2xl mx-auto">
          {lang === 'ro'
            ? 'Explorați catalogul nostru complet cu peste 400 de sticle de parfum premium, capace, pompe și accesorii. Prețuri directe din fabrică.'
            : lang === 'ru'
            ? 'Изучите наш полный каталог из более чем 400 премиальных флаконов, крышек, помп и аксессуаров. Заводские цены.'
            : 'Explore our complete catalog of 400+ premium perfume bottles, caps, pumps, and accessories. Factory direct wholesale pricing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goProducts}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-amber-700 shadow-xl hover:bg-amber-50 transition-all"
          >
            {lang === 'ro' ? 'Vezi toate produsele' : lang === 'ru' ? 'Смотреть все товары' : 'View All Products'}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            {lang === 'ro' ? 'Solicită Ofertă' : lang === 'ru' ? 'Запросить цену' : 'Request a Quote'}
          </button>
        </div>
      </div>
    </section>
  );
}
