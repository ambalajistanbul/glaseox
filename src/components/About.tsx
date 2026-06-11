import { useApp } from '../App';
import { Globe, Factory, Truck, Paintbrush } from 'lucide-react';
import { products } from '../data/products';

export default function About() {
  const { t } = useApp();

  const stats = [
    { icon: <Factory className="h-6 w-6" />, label: t('about.stat1'), number: `${products.length}+` },
    { icon: <Globe className="h-6 w-6" />, label: t('about.stat2'), number: '50+' },
    { icon: <Truck className="h-6 w-6" />, label: t('about.stat3'), number: '15+' },
    { icon: <Paintbrush className="h-6 w-6" />, label: t('about.stat4'), number: '∞' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-600/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('about.title')}
              </h2>
              <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" />
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">{t('about.desc1')}</p>
            <p className="text-base text-gray-400 leading-relaxed">{t('about.desc2')}</p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-5 hover:border-amber-500/30 transition-colors">
                  <div className="text-amber-500 mb-3">{s.icon}</div>
                  <p className="text-2xl font-bold text-white mb-1">{s.number}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/bois1_m.jpg"
                    alt="Glaseox Bois 100ML Glass Bottle"
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/fort2b_m.jpg"
                    alt="Glaseox Fort II 50ML Perfume Bottle"
                    className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/sturdy_ii_1_m.jpg"
                    alt="Glaseox Sturdy II 50ML Wholesale Bottle"
                    className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/lined2_m.jpg"
                    alt="Glaseox Lined II 50ML Elegant Glass Bottle"
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
