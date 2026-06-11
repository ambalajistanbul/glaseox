import { useApp } from '../App';
import { categories } from '../data/products';

export default function Categories() {
  const { lang, t, setCurrentView, setSelectedCategory } = useApp();

  const goToCategory = (catSlug: string) => {
    setSelectedCategory(catSlug);
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('products.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t('products.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => goToCategory(cat.slug)}
              className="group relative flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-3xl sm:text-4xl mb-4 group-hover:from-amber-100 group-hover:to-amber-200 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center group-hover:text-amber-600 transition-colors">
                {cat.name[lang] || cat.name.en}
              </h3>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-12 transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
