import { useState, useCallback, createContext, useContext } from 'react';
import { Lang, t as translate } from './data/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { Product } from './data/products';

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  currentView: string;
  setCurrentView: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product | null) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext);

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const t = useCallback((key: string) => translate(key, lang), [lang]);

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setSelectedProduct(null);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContext.Provider value={{
      lang, setLang, t,
      currentView, setCurrentView,
      selectedCategory, setSelectedCategory,
      selectedProduct, setSelectedProduct
    }}>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header scrollToSection={scrollToSection} />
        
        {currentView === 'product-detail' && selectedProduct ? (
          <ProductDetail />
        ) : currentView === 'products' ? (
          <>
            <div className="pt-20" />
            <ProductGrid />
          </>
        ) : (
          <>
            <Hero />
            <TrustBanner />
            <Categories />
            <Features />
            <div id="products-section">
              <ProductGrid />
            </div>
            <CTA />
            <About />
            <Contact />
          </>
        )}
        
        <Footer scrollToSection={scrollToSection} />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </AppContext.Provider>
  );
}
