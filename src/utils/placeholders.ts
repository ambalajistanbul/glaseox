// Category-specific beautiful SVG placeholders (used as fallback when real image unavailable)

function svg(inner: string): string {
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#faf8f5"/><stop offset="1" stop-color="#f0e9df"/>
        </linearGradient>
        <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e8dfd0"/><stop offset="0.5" stop-color="#f5efe6"/><stop offset="1" stop-color="#d9cdb8"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#bg)"/>
      ${inner}
    </svg>`
  )}`;
}

function label(name: string): string {
  const t = name.length > 20 ? name.slice(0, 20) + '…' : name;
  return `<text x="200" y="350" text-anchor="middle" font-family="Inter,sans-serif" font-size="17" font-weight="600" fill="#8c7b6b">${t.replace(/&/g, '&amp;')}</text>
    <text x="200" y="374" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" letter-spacing="2" fill="#c0ad95">GLASEOX</text>`;
}

const perfumeBottle = (n: string) => svg(`
  <rect x="160" y="120" width="80" height="160" rx="14" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="178" y="92" width="44" height="36" rx="5" fill="#d4c3a8"/>
  <rect x="184" y="64" width="32" height="34" rx="4" fill="#2d2d2d"/>
  <rect x="172" y="150" width="56" height="3" fill="#cdbfa8" opacity="0.6"/>
  <ellipse cx="184" cy="160" rx="10" ry="30" fill="#fff" opacity="0.35"/>
  ${label(n)}`);

const cap = (n: string) => svg(`
  <rect x="150" y="150" width="100" height="110" rx="10" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="150" y="150" width="100" height="22" rx="6" fill="#caa472"/>
  <ellipse cx="180" cy="205" rx="12" ry="40" fill="#fff" opacity="0.3"/>
  <rect x="166" y="258" width="68" height="10" rx="3" fill="#d4c3a8"/>
  ${label(n)}`);

const pump = (n: string) => svg(`
  <rect x="180" y="120" width="40" height="40" rx="4" fill="#b8b8b8"/>
  <rect x="192" y="80" width="16" height="44" rx="3" fill="#9a9a9a"/>
  <rect x="178" y="58" width="44" height="26" rx="8" fill="#888"/>
  <rect x="166" y="158" width="68" height="100" rx="8" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <ellipse cx="186" cy="200" rx="9" ry="28" fill="#fff" opacity="0.3"/>
  ${label(n)}`);

const diffuser = (n: string) => svg(`
  <path d="M150 180 Q150 150 200 150 Q250 150 250 180 L250 280 Q250 295 235 295 L165 295 Q150 295 150 280 Z" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="186" y="110" width="28" height="44" rx="3" fill="#c9a978"/>
  <line x1="200" y1="60" x2="195" y2="115" stroke="#b89968" stroke-width="3"/>
  <line x1="210" y1="55" x2="205" y2="115" stroke="#b89968" stroke-width="3"/>
  <line x1="190" y1="58" x2="192" y2="115" stroke="#b89968" stroke-width="3"/>
  <ellipse cx="180" cy="220" rx="11" ry="35" fill="#fff" opacity="0.3"/>
  ${label(n)}`);

const sprayer = (n: string) => svg(`
  <rect x="172" y="150" width="56" height="120" rx="10" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="184" y="118" width="32" height="36" rx="4" fill="#d4c3a8"/>
  <path d="M184 118 L184 96 L232 96 L232 108 L200 108 L200 118 Z" fill="#888"/>
  <ellipse cx="188" cy="200" rx="9" ry="32" fill="#fff" opacity="0.3"/>
  ${label(n)}`);

const serum = (n: string) => svg(`
  <rect x="170" y="160" width="60" height="110" rx="10" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="186" y="120" width="28" height="44" rx="3" fill="#2d2d2d"/>
  <rect x="190" y="74" width="20" height="50" rx="6" fill="#3a3a3a"/>
  <circle cx="200" cy="70" r="12" fill="#555"/>
  <ellipse cx="186" cy="210" rx="9" ry="30" fill="#fff" opacity="0.3"/>
  ${label(n)}`);

const carPerfume = (n: string) => svg(`
  <rect x="166" y="170" width="68" height="80" rx="10" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="182" y="140" width="36" height="34" rx="4" fill="#c9a978"/>
  <path d="M200 90 L210 130 L190 130 Z" fill="#b89968"/>
  <line x1="200" y1="70" x2="200" y2="92" stroke="#b89968" stroke-width="3"/>
  <ellipse cx="184" cy="210" rx="9" ry="24" fill="#fff" opacity="0.3"/>
  ${label(n)}`);

const miniSet = (n: string) => svg(`
  <rect x="150" y="170" width="40" height="100" rx="8" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="158" y="148" width="24" height="26" rx="3" fill="#d4c3a8"/>
  <rect x="210" y="190" width="40" height="80" rx="8" fill="url(#gl)" stroke="#cdbfa8" stroke-width="2"/>
  <rect x="218" y="168" width="24" height="26" rx="3" fill="#d4c3a8"/>
  ${label(n)}`);

export function placeholderFor(category: string, name: string): string {
  switch (category) {
    case 'perfume-bottle': return perfumeBottle(name);
    case 'perfume-caps': return cap(name);
    case 'pump-collar': return pump(name);
    case 'diffuser': return diffuser(name);
    case 'plastic-sprayers': return sprayer(name);
    case 'serum-bottles': return serum(name);
    case 'car-perfume': return carPerfume(name);
    case 'mini-set': return miniSet(name);
    default: return perfumeBottle(name);
  }
}
