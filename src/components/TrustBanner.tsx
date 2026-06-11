import { useApp } from '../App';
import { Shield, Truck, Clock, Award, Headphones, Recycle } from 'lucide-react';

export default function TrustBanner() {
  const { lang } = useApp();

  const items = [
    { icon: <Shield className="h-5 w-5" />, text: { en: 'Quality Certified', ro: 'Certificat de Calitate', ru: 'Сертификат качества' } },
    { icon: <Truck className="h-5 w-5" />, text: { en: 'Worldwide Shipping', ro: 'Livrare Mondială', ru: 'Мировая доставка' } },
    { icon: <Clock className="h-5 w-5" />, text: { en: 'Fast Production', ro: 'Producție Rapidă', ru: 'Быстрое производство' } },
    { icon: <Award className="h-5 w-5" />, text: { en: '15+ Years Experience', ro: '15+ Ani Experiență', ru: '15+ лет опыта' } },
    { icon: <Headphones className="h-5 w-5" />, text: { en: '24/7 Support', ro: 'Suport 24/7', ru: 'Поддержка 24/7' } },
    { icon: <Recycle className="h-5 w-5" />, text: { en: 'Eco-Friendly', ro: 'Ecologic', ru: 'Экологичный' } },
  ];

  return (
    <section className="py-6 bg-amber-50 border-y border-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-amber-800">
              <span className="text-amber-600">{item.icon}</span>
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {item.text[lang] || item.text.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
