import { useApp } from '../App';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';

export default function Hero() {
  const { lang, t, setCurrentView, setSelectedCategory } = useApp();
  const productCount = products.length;

  const goProducts = () => {
    setSelectedCategory('all');
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4a574\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">{t('hero.subtitle')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('hero.title')}
            </h1>
            
            <p className="hero-description max-w-lg text-lg text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={goProducts}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-amber-500/25 transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40"
              >
                {t('hero.cta2')}
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-amber-400">{productCount}+</p>
                <p className="text-sm text-gray-400 mt-1">{lang === 'ro' ? 'Produse' : lang === 'ru' ? 'Товаров' : 'Products'}</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-amber-400">50+</p>
                <p className="text-sm text-gray-400 mt-1">{lang === 'ro' ? 'Țări' : lang === 'ru' ? 'Стран' : 'Countries'}</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-amber-400">15+</p>
                <p className="text-sm text-gray-400 mt-1">{lang === 'ro' ? 'Ani' : lang === 'ru' ? 'Лет' : 'Years'}</p>
              </div>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/varna1_m.jpg"
                  alt="Glaseox Varna 100ML Glass Perfume Bottle"
                  className="h-64 w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/maurosite_m.jpg"
                  alt="Glaseox Mauro 50ML Glass Perfume Bottle"
                  className="h-48 w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/mone2_m.jpg"
                  alt="Glaseox Mone 100ML Glass Perfume Bottle"
                  className="h-48 w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/lady1_m.jpg"
                  alt="Glaseox Lady 50ML Glass Perfume Bottle"
                  className="h-64 w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
