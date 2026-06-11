import { useState, useMemo } from 'react';
import { useApp } from '../App';
import { products, categories } from '../data/products';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { placeholderFor } from '../utils/placeholders';

export default function ProductGrid() {
  const { lang, t, selectedCategory, setSelectedCategory, setSelectedProduct, setCurrentView } = useApp();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'az' | 'za' | 'new'>('new');
  const [showCount, setShowCount] = useState(24);
  const [sortOpen, setSortOpen] = useState(false);
  const [subcategory, setSubcategory] = useState('all');

  const currentCategory = categories.find(c => c.slug === selectedCategory);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== 'all') result = result.filter(p => p.category === selectedCategory);
    if (subcategory !== 'all' && currentCategory?.subcategories) result = result.filter(p => p.subcategory === subcategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.volume?.toLowerCase().includes(q) ||
        p.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }
    if (sort === 'az') result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'za') result.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'new') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return result;
  }, [selectedCategory, subcategory, search, sort, currentCategory?.subcategories]);

  const displayed = filtered.slice(0, showCount);

  const openProduct = (p: typeof products[0]) => {
    setSelectedProduct(p);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {currentCategory ? (currentCategory.name[lang] || currentCategory.name.en) : t('products.all')}
          </h2>
          {currentCategory && (
            <p className="text-gray-500 max-w-2xl">{currentCategory.description[lang] || currentCategory.description.en}</p>
          )}
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => { setSelectedCategory('all'); setSubcategory('all'); }}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${selectedCategory === 'all' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {t('products.all')} ({products.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.slug); setSubcategory('all'); }}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all flex items-center gap-1.5 ${selectedCategory === cat.slug ? 'bg-amber-600 text-white shadow-lg shadow-amber-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.name[lang] || cat.name.en}</span>
              <span className="sm:hidden">{cat.name.en}</span>
              <span className="text-xs opacity-70">({products.filter(p => p.category === cat.slug).length})</span>
            </button>
          ))}
        </div>

        {/* Subcategory chips */}
        {currentCategory?.subcategories && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSubcategory('all')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${subcategory === 'all' ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
            >
              All
            </button>
            {currentCategory.subcategories.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSubcategory(sub.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${subcategory === sub.id ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
              >
                {sub.name[lang] || sub.name.en}
              </button>
            ))}
          </div>
        )}

        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('products.search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {t('products.sort')}
              <ChevronDown className="h-4 w-4" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden z-10">
                <button onClick={() => { setSort('new'); setSortOpen(false); }} className={`block w-full px-4 py-3 text-left text-sm ${sort === 'new' ? 'bg-amber-50 text-amber-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>{t('products.sortNew')}</button>
                <button onClick={() => { setSort('az'); setSortOpen(false); }} className={`block w-full px-4 py-3 text-left text-sm ${sort === 'az' ? 'bg-amber-50 text-amber-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>{t('products.sortAZ')}</button>
                <button onClick={() => { setSort('za'); setSortOpen(false); }} className={`block w-full px-4 py-3 text-left text-sm ${sort === 'za' ? 'bg-amber-50 text-amber-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>{t('products.sortZA')}</button>
              </div>
            )}
          </div>
        </div>

        {/* Count */}
        <p className="mb-6 text-sm text-gray-500">
          {t('products.showing')} <span className="font-semibold text-gray-900">{Math.min(showCount, filtered.length)}</span> {t('products.of')} <span className="font-semibold text-gray-900">{filtered.length}</span> {t('products.all').toLowerCase()}
        </p>

        {/* Product Grid */}
        {displayed.length === 0 ? (
          <div className="py-20 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-500">{t('products.noResults')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayed.map(product => (
              <button
                key={product.id}
                onClick={() => openProduct(product)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  {product.isNew && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                      {t('products.new')}
                    </span>
                  )}
                  <img
                    src={product.image1}
                    alt={`Glaseox ${product.name} ${product.volume || ''} wholesale glass bottle`}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = '1';
                        target.src = placeholderFor(product.category, product.name);
                      }
                    }}
                  />
                  {product.image2 && (
                    <img
                      src={product.image2}
                      alt={`${product.name} concept view`}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg">
                      {t('products.viewDetails')}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-amber-600 transition-colors truncate">
                    {product.name}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                    {product.volume && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 rounded-full px-2 py-0.5 font-medium">
                        {product.volume}
                      </span>
                    )}
                    {product.weight && (
                      <span className="text-[11px] text-gray-400">
                        {product.weight}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Load More */}
        {showCount < filtered.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowCount(prev => prev + 24)}
              className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors shadow-lg"
            >
              {t('products.loadMore')}
              <span className="text-sm opacity-60">({filtered.length - showCount} {lang === 'ru' ? 'ещё' : lang === 'ro' ? 'mai multe' : 'more'})</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
