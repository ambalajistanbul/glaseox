import { useApp } from '../App';
import { Award, Palette, DollarSign, Wrench } from 'lucide-react';

export default function Features() {
  const { t } = useApp();

  const features = [
    { icon: <Award className="h-7 w-7" />, title: t('features.quality'), desc: t('features.qualityDesc'), color: 'from-amber-500 to-amber-600' },
    { icon: <Palette className="h-7 w-7" />, title: t('features.design'), desc: t('features.designDesc'), color: 'from-rose-500 to-pink-600' },
    { icon: <DollarSign className="h-7 w-7" />, title: t('features.wholesale'), desc: t('features.wholesaleDesc'), color: 'from-emerald-500 to-green-600' },
    { icon: <Wrench className="h-7 w-7" />, title: t('features.custom'), desc: t('features.customDesc'), color: 'from-blue-500 to-indigo-600' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl bg-white border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" style={{}} />
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-lg mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
