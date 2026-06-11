import { useState, useCallback } from 'react';
import { Lang, t as translate } from '../data/translations';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('en');

  const t = useCallback((key: string) => translate(key, lang), [lang]);

  return { lang, setLang, t };
}
