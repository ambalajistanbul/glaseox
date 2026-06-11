import { useState } from 'react';
import { useApp } from '../App';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const { lang, t } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
              <h3 className="text-xl font-bold mb-6">{t('contact.showroom')}</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{t('contact.address')}</p>
                    <p className="text-sm text-gray-400 mt-1">Istanbul, Turkey</p>
                    <p className="text-xs text-gray-500 mt-0.5">glaseox.vercel.app</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{t('contact.phone')}</p>
                    <p className="text-sm text-gray-400 mt-1">+90 (212) 000 00 00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{t('contact.email')}</p>
                    <p className="text-sm text-gray-400 mt-1">info@glaseox.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">{lang === 'ro' ? 'Program de lucru' : lang === 'ru' ? 'Часы работы' : 'Working Hours'}</p>
                    <p className="text-sm text-gray-400 mt-1">{lang === 'ro' ? 'Lun - Vin: 09:00 - 18:00' : lang === 'ru' ? 'Пн - Пт: 09:00 - 18:00' : 'Mon - Fri: 09:00 - 18:00'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-gray-100 shadow-lg p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{lang === 'ro' ? 'Mesaj trimis!' : lang === 'ru' ? 'Сообщение отправлено!' : 'Message Sent!'}</h3>
                  <p className="text-gray-500">{lang === 'ro' ? 'Vă vom răspunde în 24 de ore.' : lang === 'ru' ? 'Мы свяжемся с вами в течение 24 часов.' : "We'll get back to you within 24 hours."}</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.name')}</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.email')}</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.phone')}</label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.message')}</label>
                      <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                      placeholder={lang === 'ro' ? 'Spuneți-ne despre cerințele, cantitățile și nevoile de personalizare...' : lang === 'ru' ? 'Расскажите о ваших требованиях, количествах и пожеланиях по кастомизации...' : 'Tell us about your requirements, quantities, and any customization needs...'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-200/50 hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    {t('contact.send')}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
