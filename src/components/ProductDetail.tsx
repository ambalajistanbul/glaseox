import { useApp } from '../App';
import { products, categories } from '../data/products';
import { ArrowLeft, Package, Ruler, Weight, Droplets, Maximize2, Mail } from 'lucide-react';
import { placeholderFor } from '../utils/placeholders';

export default function ProductDetail() {
  const { lang, t, selectedProduct, setSelectedProduct, setCurrentView } = useApp();

  if (!selectedProduct) return null;

  const p = selectedProduct;
  const cat = categories.find(c => c.slug === p.category);
  const related = products.filter(pr => pr.category === p.category && pr.subcategory === p.subcategory && pr.id !== p.id).slice(0, 8);

  const goBack = () => {
    setSelectedProduct(null);
    setCurrentView('products');
  };

  const openRelated = (rp: typeof products[0]) => {
    setSelectedProduct(rp);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specs = [
    { icon: <Droplets className="h-5 w-5" />, label: t('detail.brimful'), value: p.brimfulCapacity },
    { icon: <Package className="h-5 w-5" />, label: t('detail.capacity'), value: p.capacity },
    { icon: <Weight className="h-5 w-5" />, label: t('detail.weight'), value: p.weight },
    { icon: <Ruler className="h-5 w-5" />, label: t('detail.height'), value: p.height },
    { icon: <Maximize2 className="h-5 w-5" />, label: t('detail.width'), value: p.width },
    { icon: <Maximize2 className="h-5 w-5 rotate-90" />, label: t('detail.depth'), value: p.depth },
  ].filter(s => s.value);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-400">
          <button onClick={goBack} className="inline-flex items-center gap-1.5 font-medium text-gray-500 hover:text-amber-600 transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t('detail.back')}
          </button>
          <span>/</span>
          {cat && <span className="text-gray-500">{cat.name[lang] || cat.name.en}</span>}
          <span>/</span>
          <span className="text-gray-900 font-medium">{p.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 shadow-lg">
              <img
                src={p.image1}
                alt={`Glaseox ${p.name} ${p.volume || ''} wholesale glass perfume bottle`}
                className="w-full aspect-square object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = '1';
                    target.src = placeholderFor(p.category, p.name);
                  }
                }}
              />
            </div>
            {p.image2 && (
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100">
                <img
                  src={p.image2}
                  alt={`Glaseox ${p.name} concept view`}
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).parentElement!.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              {p.isNew && (
                <span className="inline-block mb-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  {t('products.new')}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                {p.name}
              </h1>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {p.volume && (
                  <span className="inline-block rounded-lg bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-800">
                    {p.volume}
                  </span>
                )}
                {cat && (
                  <span className="inline-block rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600">
                    {cat.name[lang] || cat.name.en}
                  </span>
                )}
              </div>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {lang === 'ro'
                  ? `Sticla ${p.name} de la Glaseox combină estetica cu calitatea. Designul elegant și detaliile rafinate fac din acest produs o alegere ideală pentru ambalarea parfumului dvs. premium.`
                  : lang === 'ru'
                  ? `Флакон ${p.name} от Glaseox сочетает эстетику и качество. Элегантный дизайн и утончённые детали делают его идеальным выбором для упаковки вашего премиального аромата.`
                  : `The ${p.name} bottle from Glaseox combines aesthetics with quality. Its elegant design and refined details make it an ideal choice for packaging your premium fragrance.`
                }
              </p>
            </div>

            {/* Specs */}
            {specs.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('detail.specs')}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {specs.map((s, i) => (
                    <div key={i} className="rounded-2xl bg-gray-50 border border-gray-100 p-4 hover:bg-amber-50 hover:border-amber-200 transition-colors">
                      <div className="text-amber-600 mb-2">{s.icon}</div>
                      <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                      <p className="text-base font-semibold text-gray-900">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {p.tags && p.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.tags.filter(Boolean).map(tag => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setCurrentView('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-amber-200/50 hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                <Mail className="h-5 w-5" />
                {t('detail.requestQuote')}
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('detail.related')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {related.map(rp => (
                <button
                  key={rp.id}
                  onClick={() => openRelated(rp)}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={rp.image1}
                      alt={`Glaseox ${rp.name} ${rp.volume || ''}`}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = '1';
                          target.src = placeholderFor(rp.category, rp.name);
                        }
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">{rp.name}</h4>
                    {rp.volume && <p className="text-xs text-gray-500 mt-1">{rp.volume}</p>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
