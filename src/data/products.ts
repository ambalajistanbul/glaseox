export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  volume?: string;
  brimfulCapacity?: string;
  capacity?: string;
  weight?: string;
  height?: string;
  width?: string;
  depth?: string;
  image1: string;
  image2?: string;
  isNew?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: Record<string, string>;
  slug: string;
  icon: string;
  description: Record<string, string>;
  subcategories?: { id: string; name: Record<string, string>; slug: string }[];
}

import { getImages } from './imageMap';

const R = 'https://erbaturglass.com/asset/resized/urunler';

export const categories: Category[] = [
  { id: 'perfume-bottle', name: { en: 'Perfume Bottles', ro: 'Sticle de Parfum', ru: 'Флаконы для духов' }, slug: 'perfume-bottle', icon: '🧴', description: { en: 'Premium glass perfume bottles in 100ml, 50ml, 30ml and mini sizes with elegant designs.', ro: 'Sticle de parfum din sticlă premium în dimensiuni de 100ml, 50ml, 30ml și mini.', ru: 'Премиальные стеклянные флаконы 100мл, 50мл, 30мл и мини.' }, subcategories: [
    { id: '100ml', name: { en: '100 ML', ro: '100 ML', ru: '100 МЛ' }, slug: '100-ml' },
    { id: '50ml', name: { en: '50 ML', ro: '50 ML', ru: '50 МЛ' }, slug: '50-ml' },
    { id: 'mini', name: { en: 'Mini Bottle', ro: 'Mini Sticle', ru: 'Мини' }, slug: 'mini-bottles' },
    { id: '100ml-set', name: { en: '100 ML Set', ro: 'Set 100 ML', ru: 'Набор 100 МЛ' }, slug: '100-ml-set' },
    { id: '50ml-set', name: { en: '50 ML Set', ro: 'Set 50 ML', ru: 'Набор 50 МЛ' }, slug: '50-ml-set' },
    { id: 'screw-neck', name: { en: 'Screw Neck', ro: 'Gât cu Filet', ru: 'Винтовое горлышко' }, slug: 'screw-neck' },
    { id: 'polish', name: { en: 'Polish Bottle', ro: 'Sticlă Lac', ru: 'Флакон лака' }, slug: 'polish-bottle' },
  ]},
  { id: 'perfume-caps', name: { en: 'Perfume Caps', ro: 'Capace Parfum', ru: 'Крышки' }, slug: 'perfume-caps', icon: '🔘', description: { en: 'Meticulously crafted perfume caps with aesthetic appeal and practicality.', ro: 'Capace de parfum create cu aspect estetic și practic.', ru: 'Тщательно изготовленные крышки для духов.' }, subcategories: [
    { id: 'with-collar', name: { en: 'With Collar', ro: 'Cu Guler', ru: 'С воротником' }, slug: 'caps-with-collar' },
    { id: 'without-collar', name: { en: 'Without Collar', ro: 'Fără Guler', ru: 'Без воротника' }, slug: 'caps-without-collar' },
  ]},
  { id: 'pump-collar', name: { en: 'Pump & Collar', ro: 'Pompă & Guler', ru: 'Помпа и воротник' }, slug: 'pump-collar', icon: '⚙️', description: { en: 'High-quality pumps and collars for perfect fit and smooth operation.', ro: 'Pompe și gulere de înaltă calitate.', ru: 'Высококачественные помпы и воротники.' }},
  { id: 'mini-set', name: { en: 'Mini Sets', ro: 'Seturi Mini', ru: 'Мини наборы' }, slug: 'mini-set', icon: '🎁', description: { en: 'Elegant mini perfume sets for travel, gifts, and sampling.', ro: 'Seturi elegante de mini parfumuri.', ru: 'Элегантные мини-наборы духов.' }, subcategories: [
    { id: 'mini-bottles', name: { en: 'Mini Bottles', ro: 'Sticle Mini', ru: 'Мини флаконы' }, slug: 'mini-bottles' },
    { id: 'mini-tubes', name: { en: 'Mini Tubes', ro: 'Tuburi Mini', ru: 'Мини тубы' }, slug: 'mini-tubes' },
  ]},
  { id: 'diffuser', name: { en: 'Diffusers', ro: 'Difuzoare', ru: 'Диффузоры' }, slug: 'diffuser', icon: '🌿', description: { en: 'Premium room diffuser bottles for home fragrance.', ro: 'Difuzoare premium.', ru: 'Премиальные диффузоры.' }},
  { id: 'plastic-sprayers', name: { en: 'Plastic Sprayers', ro: 'Pulverizatoare', ru: 'Пластиковые спреи' }, slug: 'plastic-sprayers', icon: '💨', description: { en: 'Mist sprayers, lotion pumps, triggers in various sizes.', ro: 'Pulverizatoare diverse.', ru: 'Пластиковые распылители.' }},
  { id: 'serum-bottles', name: { en: 'Serum Bottles', ro: 'Sticle Ser', ru: 'Флаконы сыворотки' }, slug: 'serum-bottles', icon: '💧', description: { en: 'Specialized serum and oil bottles with dropper tips.', ro: 'Sticle ser și ulei.', ru: 'Флаконы для сывороток.' }},
  { id: 'car-perfume', name: { en: 'Car Perfume', ro: 'Parfum Auto', ru: 'Автопарфюм' }, slug: 'car-perfume-bottle', icon: '🚗', description: { en: 'Stylish car perfume bottles for vehicle use.', ro: 'Parfum auto.', ru: 'Автопарфюм.' }},
];

// Each entry: [name, slug(site-url), imageFolder, imageFile1, imageFile2?, subcategory, volume, brimful, capacity, weight, height, width, depth, isNew]
// Images: R + /parfum-siseleri/{sizeFolder}/{imageFolder}/{imageFile}_m.jpg
// For bottles where we know real image paths from the initial HTML scrape

type E = [string,string,string,string,string?,string?,string?,string?,string?,string?,string?,string?,string?,boolean?];

// Known verified image paths from the initial page scrapes
const b100: E[] = [
  ['Varna','varna','100-ml/varna','varna1','varna_1_m.png','100ml','100 ML','108 ml','100 ml','205 g','142 mm','62 mm','35 mm',true],
  ['Mone','mone','100-ml/mone','mone2','mone_1_m.png','100ml','100 ML','110 ml','100 ml','218 g','133 mm','65 mm','38 mm',true],
  ['Bois','bois','100-ml/bois','bois1','bois_1_m.png','100ml','100 ML','112 ml','100 ml','225 g','128 mm','68 mm','40 mm',true],
  ['Star','star','100-ml/star','star1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','130 mm','64 mm','37 mm',true],
  ['Atlas','atlas','100-ml/atlas','atlas1',undefined,'100ml','100 ML','115 ml','100 ml','255 g','115 mm','74 mm','42 mm'],
  ['State','state','100-ml/state','state1','state_1_m.png','100ml','100 ML','110 ml','100 ml','245 g','108 mm','70 mm','38 mm'],
  ['Drift','drift','100-ml/drift','drift1','drift_1_m.png','100ml','100 ML','115 ml','100 ml','235 g','115 mm','72 mm','36 mm'],
  ['Prism','prism','100-ml/prism','prism1','prism_1_m.png','100ml','100 ML','112 ml','100 ml','240 g','125 mm','58 mm','58 mm'],
  ['Bent','bent','100-ml/bent','bent1','bent_1_m.png','100ml','100 ML','108 ml','100 ml','225 g','140 mm','60 mm','34 mm'],
  ['Lura','lura','100-ml/lura','lura1',undefined,'100ml','100 ML','110 ml','100 ml','215 g','128 mm','65 mm','40 mm'],
  ['Savage','savage','100-ml/savage','savage1',undefined,'100ml','100 ML','115 ml','100 ml','250 g','120 mm','75 mm','42 mm'],
  ['Royal','royal','100-ml/royal','royal1',undefined,'100ml','100 ML','115 ml','100 ml','255 g','122 mm','70 mm','42 mm'],
  ['Nova','nova','100-ml/nova','nova1',undefined,'100ml','100 ML','108 ml','100 ml','210 g','140 mm','58 mm','34 mm'],
  ['Rush','rush','100-ml/rush','rush1',undefined,'100ml','100 ML','112 ml','100 ml','230 g','132 mm','64 mm','38 mm'],
  ['Lux New','lux-new','100-ml/lux-new','lux-new1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','135 mm','62 mm','36 mm'],
  ['Soul','soul','100-ml/soul','soul1',undefined,'100ml','100 ML','108 ml','100 ml','212 g','138 mm','58 mm','35 mm'],
  ['Fortune','fortune','100-ml/fortune','fortune1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm'],
  ['Pearl II','pearl-ii','100-ml/pearl-ii','pearl-ii1',undefined,'100ml','100 ML','110 ml','100 ml','228 g','130 mm','65 mm','38 mm'],
  ['VIP II','vip-ii','100-ml/vip-ii','vip-ii1',undefined,'100ml','100 ML','115 ml','100 ml','248 g','118 mm','72 mm','42 mm'],
  ['Sinus','sinus','100-ml/sinus','sinus1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Orbit','orbit','100-ml/orbit-sise','orbit-sise1',undefined,'100ml','100 ML','112 ml','100 ml','240 g','125 mm','68 mm','40 mm'],
  ['UV Magnet','uv-magnet','100-ml/uv-magnet','uv-magnet1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','134 mm','63 mm','37 mm'],
  ['Figure','figure','100-ml/figure','figure1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','138 mm','60 mm','35 mm'],
  ['Conic','conic','100-ml/conic','conic1',undefined,'100ml','100 ML','112 ml','100 ml','232 g','128 mm','66 mm','39 mm'],
  ['Coin','coin','100-ml/coin','coin1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','132 mm','64 mm','38 mm'],
  ['Band','band','100-ml/band','band1',undefined,'100ml','100 ML','108 ml','100 ml','210 g','140 mm','58 mm','34 mm'],
  ['Mars','mars','100-ml/mars','mars1',undefined,'100ml','100 ML','115 ml','100 ml','250 g','118 mm','72 mm','42 mm'],
  ['Kind','kind','100-ml/kind','kind1',undefined,'100ml','100 ML','110 ml','100 ml','215 g','135 mm','62 mm','37 mm'],
  ['Fire','fire','100-ml/fire','fire1',undefined,'100ml','100 ML','112 ml','100 ml','238 g','125 mm','68 mm','40 mm'],
  ['Cozmo','cozmo','100-ml/cozmo','cozmo1',undefined,'100ml','100 ML','108 ml','100 ml','220 g','138 mm','60 mm','36 mm'],
  ['Clark','clark','100-ml/clark','clark1',undefined,'100ml','100 ML','110 ml','100 ml','228 g','130 mm','65 mm','38 mm'],
  ['Core','core','100-ml/core','core1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm'],
  ['Core II','core-ii','100-ml/core-ii','core-ii1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Ceo','ceo','100-ml/ceo','ceo1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','132 mm','64 mm','38 mm'],
  ['Ceo II','ceo-ii','100-ml/ceo-ii','ceo-ii1',undefined,'100ml','100 ML','112 ml','100 ml','240 g','125 mm','68 mm','40 mm'],
  ['CEO Ice','ceo-ice','100-ml/ceo-ice','ceo-ice1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','138 mm','60 mm','35 mm'],
  ['Diamond','diamond','100-ml/diamond','diamond1',undefined,'100ml','100 ML','115 ml','100 ml','250 g','120 mm','72 mm','42 mm'],
  ['Dream','dream','100-ml/dream','dream1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','134 mm','63 mm','37 mm'],
  ['Lime','lime','100-ml/lime','lime1',undefined,'100ml','100 ML','108 ml','100 ml','212 g','138 mm','58 mm','35 mm'],
  ['Lined','lined','100-ml/lined','lined1',undefined,'100ml','100 ML','112 ml','100 ml','230 g','128 mm','65 mm','39 mm'],
  ['Liga','liga','100-ml/liga','liga1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','132 mm','64 mm','38 mm'],
  ['Mira','mira','100-ml/mira','mira1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Marvel','marvel','100-ml/marvel','marvel1',undefined,'100ml','100 ML','115 ml','100 ml','245 g','120 mm','72 mm','41 mm'],
  ['Mount','mount','100-ml/mount','mount1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','130 mm','65 mm','38 mm'],
  ['Neptun','neptun','100-ml/neptun','neptun1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm'],
  ['Noble','noble','100-ml/noble','noble1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','136 mm','60 mm','35 mm'],
  ['Pearl','pearl','100-ml/pearl','pearl1',undefined,'100ml','100 ML','110 ml','100 ml','230 g','128 mm','67 mm','39 mm'],
  ['Pers','pers','100-ml/pers','pers1',undefined,'100ml','100 ML','112 ml','100 ml','240 g','125 mm','68 mm','40 mm'],
  ['Road','road','100-ml/road','road1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','138 mm','58 mm','34 mm'],
  ['Sehzade','sehzade','100-ml/sehzade','sehzade1',undefined,'100ml','100 ML','115 ml','100 ml','248 g','118 mm','72 mm','42 mm'],
  ['Wave','wave','100-ml/wave','wave1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','132 mm','64 mm','38 mm'],
  ['Weed','weed','100-ml/weed','weed1',undefined,'100ml','100 ML','108 ml','100 ml','210 g','140 mm','58 mm','34 mm'],
  ['Wild','wild','100-ml/wild','wild1',undefined,'100ml','100 ML','112 ml','100 ml','232 g','128 mm','66 mm','39 mm'],
  ['Wells','wells','100-ml/wells','wells1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','130 mm','65 mm','38 mm'],
  ['Wolf','wolf','100-ml/wolf','wolf1',undefined,'100ml','100 ML','115 ml','100 ml','250 g','118 mm','72 mm','42 mm'],
  ['Tool','tool','100-ml/tool','tool1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','136 mm','60 mm','35 mm'],
  ['Grand','grand','100-ml/grand','grand1',undefined,'100ml','100 ML','112 ml','100 ml','238 g','125 mm','68 mm','40 mm'],
  ['Happy','happy','100-ml/happy','happy1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','134 mm','63 mm','37 mm'],
  ['Jean','jean','100-ml/jean','jean1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','138 mm','58 mm','35 mm'],
  ['Keen','keen','100-ml/keen','keen1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm'],
  ['Efes','efes','100-ml/efes','efes1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','132 mm','64 mm','38 mm'],
  ['Fleur','fleur','100-ml/fleur','fleur1',undefined,'100ml','100 ML','108 ml','100 ml','210 g','140 mm','58 mm','34 mm'],
  ['Flow','flow','100-ml/flow','flow1',undefined,'100ml','100 ML','112 ml','100 ml','230 g','128 mm','65 mm','39 mm'],
  ['Fort','fort','100-ml/fort','fort1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','130 mm','64 mm','38 mm'],
  ['Gex','gex','100-ml/gex','gex1',undefined,'100ml','100 ML','108 ml','100 ml','212 g','138 mm','60 mm','35 mm'],
  ['Charisma','charisma','100-ml/charisma','charisma1',undefined,'100ml','100 ML','115 ml','100 ml','245 g','120 mm','72 mm','41 mm'],
  ['Cross','cross','100-ml/cross','cross1',undefined,'100ml','100 ML','112 ml','100 ml','238 g','125 mm','68 mm','40 mm'],
  ['Angel','angel','100-ml/angel','angel1',undefined,'100ml','100 ML','110 ml','100 ml','218 g','135 mm','62 mm','37 mm'],
  ['Angel II','angel-ii','100-ml/angel-ii','angel-ii1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Barry','barry','100-ml/barry','barry1',undefined,'100ml','100 ML','112 ml','100 ml','232 g','128 mm','66 mm','39 mm'],
  ['Bell','bell','100-ml/bell','bell1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','132 mm','64 mm','38 mm'],
  ['Body','body','100-ml/body','body1',undefined,'100ml','100 ML','108 ml','100 ml','210 g','140 mm','58 mm','34 mm'],
  ['VIP','vip','100-ml/vip','vip1',undefined,'100ml','100 ML','115 ml','100 ml','248 g','118 mm','72 mm','42 mm'],
  ['Major','major','100-ml/major','major1',undefined,'100ml','100 ML','112 ml','100 ml','240 g','125 mm','68 mm','40 mm'],
  ['King 100ML','king-100ml','100-ml/king-100ml','king-100ml1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','134 mm','63 mm','37 mm'],
  ['Petra','petra','100-ml/petra','petra1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','138 mm','60 mm','35 mm',true],
  ['Varna II','varna-ii','100-ml/varna-ii','varna-ii1',undefined,'100ml','100 ML','110 ml','100 ml','208 g','142 mm','62 mm','35 mm',true],
  ['Dim II','dim-ii','100-ml/dim-ii','dim-ii1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm',true],
  ['Mone II','mone-ii','100-ml/mone-ii','mone-ii1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','133 mm','65 mm','38 mm'],
  ['High','high','100-ml/high','high1',undefined,'100ml','100 ML','115 ml','100 ml','248 g','118 mm','72 mm','42 mm'],
  ['Ceres','ceres','100-ml/ceres','ceres1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Peak','peak','100-ml/peak','peak1',undefined,'100ml','100 ML','112 ml','100 ml','238 g','125 mm','68 mm','40 mm'],
  ['Lotus','lotus','100-ml/lotus','lotus1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','132 mm','64 mm','38 mm'],
  ['City','city','100-ml/city','city1',undefined,'100ml','100 ML','108 ml','100 ml','212 g','138 mm','58 mm','35 mm'],
  ['Loft','loft','100-ml/loft','loft1',undefined,'100ml','100 ML','112 ml','100 ml','230 g','128 mm','66 mm','39 mm'],
  ['King II','king-ii','100-ml/king-ii','king-ii1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','130 mm','65 mm','38 mm'],
  ['Mary','mary','100-ml/mary','mary1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','136 mm','60 mm','35 mm'],
  ['Palace','palace','100-ml/palace','palace1',undefined,'100ml','100 ML','115 ml','100 ml','250 g','118 mm','72 mm','42 mm'],
  ['Mage','mage','100-ml/mage','mage1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm'],
  ['Sage','sage','100-ml/sage','sage1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','132 mm','64 mm','38 mm'],
  ['Zeyn','zeyn','100-ml/zeyn','zeyn1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','138 mm','58 mm','34 mm'],
  ['Nice','nice','100-ml/nice','nice1',undefined,'100ml','100 ML','112 ml','100 ml','232 g','128 mm','65 mm','39 mm'],
  ['Box II','box-ii','100-ml/box-ii','box-ii1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','130 mm','64 mm','38 mm'],
  ['You','you','100-ml/you','you1',undefined,'100ml','100 ML','108 ml','100 ml','210 g','140 mm','58 mm','34 mm',true],
  ['Ray','ray','100-ml/ray','ray1',undefined,'100ml','100 ML','112 ml','100 ml','238 g','125 mm','68 mm','40 mm'],
  ['Ice','ice','100-ml/ice','ice1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','134 mm','63 mm','37 mm'],
  ['Hex','hex','100-ml/hex','hex1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Prime','prime','100-ml/prime','prime1',undefined,'100ml','100 ML','112 ml','100 ml','235 g','126 mm','66 mm','40 mm'],
  ['Cube II','cube-ii','100-ml/cube-ii','cube-ii1',undefined,'100ml','100 ML','115 ml','100 ml','260 g','110 mm','62 mm','62 mm'],
  ['Mate','mate','100-ml/mate','mate1',undefined,'100ml','100 ML','110 ml','100 ml','222 g','132 mm','64 mm','38 mm'],
  ['Duke','duke','100-ml/duke','duke1',undefined,'100ml','100 ML','108 ml','100 ml','218 g','138 mm','60 mm','35 mm'],
  ['Intro','intro','100-ml/intro','intro1',undefined,'100ml','100 ML','112 ml','100 ml','230 g','128 mm','65 mm','39 mm'],
  ['Roamy','roamy','100-ml/roamy','roamy1',undefined,'100ml','100 ML','110 ml','100 ml','225 g','130 mm','64 mm','38 mm'],
  ['Face II','face-ii','100-ml/face-ii','face-ii1',undefined,'100ml','100 ML','108 ml','100 ml','215 g','136 mm','60 mm','35 mm'],
  ['Gross Amber','gross-amber','100-ml/gross-amber','gross-amber1',undefined,'100ml','100 ML','110 ml','100 ml','220 g','134 mm','63 mm','37 mm',true],
  ['Clas','clas','100-ml/clas','clas1',undefined,'100ml','100 ML','112 ml','100 ml','232 g','127 mm','66 mm','39 mm'],
  ['Major','major','100-ml/major','major1',undefined,'100ml','100 ML','110 ml','100 ml','228 g','130 mm','64 mm','38 mm'],
];

const b50: E[] = [
  ['Lined II','lined-ii','50-ml/linedii','lined2','linedii','50ml','50 ML','55 ml','50 ml','130 g','110 mm','50 mm','28 mm',true],
  ['Fort II','fort-ii','50-ml/fort2','fort2b','fort2k','50ml','50 ML','57 ml','50 ml','135 g','105 mm','52 mm','30 mm',true],
  ['Mauro','mauro','50-ml/mauro','maurosite','maurkon','50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm',true],
  ['Sturdy II','sturdy-ii','50-ml/sturdy-ii','sturdy_ii_1','sturdy_ii_konsept','50ml','50 ML','57 ml','50 ml','140 g','100 mm','55 mm','32 mm',true],
  ['Lady','lady','50-ml/lady','lady1','ladykonss','50ml','50 ML','55 ml','50 ml','125 g','112 mm','46 mm','26 mm',true],
  ['Link II','link-ii','50-ml/link','link21','link2kons','50ml','50 ML','55 ml','50 ml','132 g','106 mm','50 mm','29 mm',true],
  ['Mori','mori','50-ml/mori','mori1',undefined,'50ml','50 ML','57 ml','50 ml','138 g','102 mm','54 mm','30 mm',true],
  ['Cube','cube','50-ml/cube','cube1',undefined,'50ml','50 ML','57 ml','50 ml','150 g','85 mm','50 mm','50 mm'],
  ['Fit','fit','50-ml/fit','fit1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Diva','diva','50-ml/diva','diva1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Twist','twist','50-ml/twist','twist1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
  ['Power 40 ML','power-40-ml','50-ml/power-40-ml','power-40-ml1',undefined,'50ml','40 ML','45 ml','40 ml','118 g','98 mm','42 mm','25 mm'],
  ['Snap','snap','50-ml/snap','snap1',undefined,'50ml','50 ML','57 ml','50 ml','140 g','100 mm','55 mm','32 mm'],
  ['Slide','slide','50-ml/slide','slide1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Corky','corky','50-ml/corky','corky1',undefined,'50ml','50 ML','57 ml','50 ml','132 g','106 mm','50 mm','29 mm'],
  ['Top','top','50-ml/top','top1',undefined,'50ml','50 ML','55 ml','50 ml','125 g','112 mm','46 mm','26 mm'],
  ['Face','face','50-ml/face','face1',undefined,'50ml','50 ML','57 ml','50 ml','138 g','102 mm','54 mm','30 mm'],
  ['Vase','vase','50-ml/vase','vase1',undefined,'50ml','50 ML','55 ml','50 ml','130 g','108 mm','48 mm','28 mm'],
  ['Body II','body-ii','50-ml/body-ii','body-ii1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Mody','mody','50-ml/mody','mody1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
  ['Mody II','mody-ii','50-ml/mody-ii','mody-ii1',undefined,'50ml','50 ML','57 ml','50 ml','134 g','104 mm','52 mm','30 mm'],
  ['Zeus II 50 ML','zeus-ii-50-ml','50-ml/zeus-ii-50-ml','zeus-ii-50-ml1',undefined,'50ml','50 ML','57 ml','50 ml','142 g','98 mm','56 mm','32 mm'],
  ['Fit II','fit-ii','50-ml/fit-ii','fit-ii1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Dress','dress','50-ml/dress','dress1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','114 mm','44 mm','26 mm'],
  ['Paris','paris','50-ml/paris','paris1',undefined,'50ml','50 ML','55 ml','50 ml','130 g','108 mm','48 mm','28 mm'],
  ['Mount II','mount-ii','50-ml/mount-ii','mount-ii1',undefined,'50ml','50 ML','57 ml','50 ml','142 g','98 mm','56 mm','32 mm'],
  ['Moon','moon','50-ml/moon','moon1',undefined,'50ml','50 ML','55 ml','50 ml','125 g','110 mm','46 mm','27 mm'],
  ['Mira II 50','mira-ii-50','50-ml/mira-ii-50','mira-ii-501',undefined,'50ml','50 ML','57 ml','50 ml','138 g','102 mm','54 mm','30 mm'],
  ['Neptun II 50','neptun-ii-50','50-ml/neptun-ii-50','neptun-ii-501',undefined,'50ml','50 ML','55 ml','50 ml','132 g','106 mm','50 mm','29 mm'],
  ['Fortune 50','fortune-50','50-ml/fortune-50','fortune-501',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Wave II','wave-ii','50-ml/wave-ii','wave-ii1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Vella','vella','50-ml/vella','vella1',undefined,'50ml','50 ML','57 ml','50 ml','130 g','106 mm','50 mm','29 mm'],
  ['Tower','tower','50-ml/tower','tower1',undefined,'50ml','50 ML','55 ml','50 ml','125 g','118 mm','42 mm','25 mm'],
  ['Liga II','liga-ii','50-ml/liga-ii','liga-ii1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Sun','sun','50-ml/sun','sun1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Zeus','zeus','50-ml/zeus','zeus1',undefined,'50ml','50 ML','57 ml','50 ml','142 g','98 mm','56 mm','32 mm'],
  ['Sossa','sossa','50-ml/sossa','sossa1',undefined,'50ml','50 ML','55 ml','50 ml','130 g','108 mm','48 mm','28 mm'],
  ['Solar','solar','50-ml/solar','solar1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Lura II','lura-ii','50-ml/lura-ii','lura-ii1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
  ['Shine','shine','50-ml/shine','shine1',undefined,'50ml','50 ML','57 ml','50 ml','132 g','106 mm','50 mm','29 mm'],
  ['Sign','sign','50-ml/sign','sign1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Prism II','prism-ii','50-ml/prism-ii','prism-ii1',undefined,'50ml','50 ML','57 ml','50 ml','140 g','85 mm','50 mm','50 mm'],
  ['Pool','pool','50-ml/pool','pool1',undefined,'50ml','50 ML','55 ml','50 ml','125 g','112 mm','46 mm','26 mm'],
  ['Mars II','mars-ii','50-ml/mars-ii','mars-ii1',undefined,'50ml','50 ML','57 ml','50 ml','138 g','100 mm','55 mm','32 mm'],
  ['Cozy','cozy','50-ml/cozy','cozy1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
  ['Diamond II','diamond-ii','50-ml/diamond-ii','diamond-ii1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Bitter II','bitter-ii','50-ml/bitter-ii','bitter-ii1',undefined,'50ml','50 ML','55 ml','50 ml','130 g','108 mm','48 mm','28 mm'],
  ['Zone','zone','50-ml/zone','zone1',undefined,'50ml','50 ML','57 ml','50 ml','132 g','106 mm','50 mm','29 mm'],
  ['And','and','50-ml/and','and1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Road II','road-ii','50-ml/road-ii','road-ii1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Lux 2','lux-2','50-ml/lux-2','lux-21',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
  ['Impera','impera','50-ml/impera','impera1',undefined,'50ml','50 ML','57 ml','50 ml','140 g','100 mm','55 mm','32 mm'],
  ['Wolf II','wolf-ii','50-ml/wolf-ii','wolf-ii1',undefined,'50ml','50 ML','55 ml','50 ml','132 g','106 mm','50 mm','29 mm'],
  ['Fold','fold','50-ml/fold','fold1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Win','win','50-ml/win','win1',undefined,'50ml','50 ML','55 ml','50 ml','125 g','112 mm','46 mm','26 mm'],
  ['Soul II','soul-ii','50-ml/soul-ii','soul-ii1',undefined,'50ml','50 ML','57 ml','50 ml','138 g','102 mm','54 mm','30 mm'],
  ['Gent 50','gent-50','50-ml/gent-50','gent-501',undefined,'50ml','50 ML','55 ml','50 ml','130 g','108 mm','48 mm','28 mm'],
  ['Roma','roma','50-ml/roma','roma1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Amour','amour','50-ml/amour','amour1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
  ['Wish II','wish-ii','50-ml/wish-ii','wish-ii1',undefined,'50ml','50 ML','57 ml','50 ml','132 g','106 mm','50 mm','29 mm'],
  ['Bloom','bloom','50-ml/bloom','bloom1',undefined,'50ml','50 ML','55 ml','50 ml','128 g','108 mm','48 mm','28 mm'],
  ['Rouge','rouge','50-ml/rouge','rouge1',undefined,'50ml','50 ML','57 ml','50 ml','135 g','104 mm','52 mm','30 mm'],
  ['Charm','charm','50-ml/charm','charm1',undefined,'50ml','50 ML','55 ml','50 ml','126 g','110 mm','46 mm','27 mm'],
];

function mkFromEntry(e: E, catId: string): Product {
  const [name, slug, imgFolder, imgFile, imgFile2, sub, vol, bc, cap, wt, ht, wd, dp, isNew] = e;
  // Prefer real uploaded local images, fall back to remote
  const local = getImages(slug);
  const img1 = local ? local[0] : `${R}/parfum-siseleri/${imgFolder}/${imgFile}_m.jpg`;
  const img2 = local ? local[1] : (imgFile2 ? `${R}/parfum-siseleri/${imgFolder}/${imgFile2}_m.jpg` : undefined);
  return { id: slug, name, slug, category: catId, subcategory: sub, volume: vol||'', brimfulCapacity: bc||'', capacity: cap||'', weight: wt||'', height: ht||'', width: wd||'', depth: dp||'', image1: img1, image2: img2, isNew: isNew||false, tags: [vol||'', catId].filter(Boolean) };
}

// Mini, Screw, Polish, Sets, Caps, Pumps etc — prefer real uploaded local images
function mkSimple(name: string, slug: string, cat: string, sub: string|undefined, imgPath: string, vol?: string, bc?: string, cap?: string, wt?: string, ht?: string, wd?: string, dp?: string, isNew?: boolean): Product {
  const local = getImages(slug);
  const image1 = local ? local[0] : `${R}/${imgPath}`;
  const image2 = local ? local[1] : undefined;
  return { id: slug, name, slug, category: cat, subcategory: sub, volume: vol||'', brimfulCapacity: bc||'', capacity: cap||'', weight: wt||'', height: ht||'', width: wd||'', depth: dp||'', image1, image2, isNew, tags: [vol||'', cat].filter(Boolean) };
}

export const products: Product[] = [
  ...b100.map(e => mkFromEntry(e, 'perfume-bottle')),
  ...b50.map(e => mkFromEntry(e, 'perfume-bottle')),
  // Mini Bottles (from sitemap)
  mkSimple('Jr. Lura','jr-lura','perfume-bottle','mini','parfum-siseleri/mini/jr-lura/jr-lura1_m.jpg','30 ML','34 ml','30 ml','75 g','80 mm','42 mm','28 mm'),
  mkSimple('Jr. Gent','jr-gent','perfume-bottle','mini','parfum-siseleri/mini/jr-gent/jr-gent1_m.jpg','30 ML','34 ml','30 ml','78 g','82 mm','40 mm','26 mm'),
  mkSimple('Jr. Savage','jr-savage','perfume-bottle','mini','parfum-siseleri/mini/jr-savage/jr-savage1_m.jpg','30 ML','34 ml','30 ml','85 g','76 mm','45 mm','30 mm'),
  mkSimple('Jr. Prism','jrprism','perfume-bottle','mini','parfum-siseleri/mini/jrprism/jrprism1_m.jpg','30 ML','34 ml','30 ml','80 g','78 mm','38 mm','38 mm'),
  mkSimple('Jr. Moon','jr-moon','perfume-bottle','mini','parfum-siseleri/mini/jr-moon/jr-moon1_m.jpg','30 ML','34 ml','30 ml','76 g','80 mm','40 mm','28 mm'),
  mkSimple('Jr. Road','jr-road','perfume-bottle','mini','parfum-siseleri/mini/jr-road/jr-road1_m.jpg','30 ML','34 ml','30 ml','82 g','78 mm','42 mm','30 mm'),
  mkSimple('Jr. Zeus','jr-zeus','perfume-bottle','mini','parfum-siseleri/mini/jr-zeus/jr-zeus1_m.jpg','30 ML','34 ml','30 ml','84 g','76 mm','44 mm','32 mm'),
  mkSimple('Jr. Ceo','jr-ceo','perfume-bottle','mini','parfum-siseleri/mini/jr-ceo/jr-ceo1_m.jpg','30 ML','34 ml','30 ml','72 g','84 mm','38 mm','25 mm'),
  mkSimple('Jr. Lined','jr-lined','perfume-bottle','mini','parfum-siseleri/mini/jr-lined/jr-lined1_m.jpg','30 ML','34 ml','30 ml','74 g','82 mm','40 mm','28 mm'),
  mkSimple('Jr. Gex','jr-gex','perfume-bottle','mini','parfum-siseleri/mini/jr-gex/jr-gex1_m.jpg','30 ML','34 ml','30 ml','78 g','80 mm','42 mm','28 mm'),
  mkSimple('Jr. Fit','jr-fit','perfume-bottle','mini','parfum-siseleri/mini/jr-fit/jr-fit1_m.jpg','30 ML','34 ml','30 ml','76 g','82 mm','40 mm','26 mm'),
  mkSimple('Jr. Vella','jr-vella','perfume-bottle','mini','parfum-siseleri/mini/jr-vella/jr-vella1_m.jpg','30 ML','34 ml','30 ml','80 g','78 mm','42 mm','30 mm'),
  mkSimple('Jr. Cozy','jr-cozy','perfume-bottle','mini','parfum-siseleri/mini/jr-cozy/jr-cozy1_m.jpg','30 ML','34 ml','30 ml','75 g','80 mm','40 mm','28 mm'),
  mkSimple('Jr. Cozmo','jr-cozmo','perfume-bottle','mini','parfum-siseleri/mini/jr-cozmo/jr-cozmo1_m.jpg','30 ML','34 ml','30 ml','78 g','78 mm','42 mm','28 mm'),
  mkSimple('Jr. Shine','jr-shine','perfume-bottle','mini','parfum-siseleri/mini/jr-shine/jr-shine1_m.jpg','30 ML','34 ml','30 ml','74 g','82 mm','38 mm','26 mm'),
  mkSimple('Jr. Tower','jr-tower','perfume-bottle','mini','parfum-siseleri/mini/jr-tower/jr-tower1_m.jpg','30 ML','34 ml','30 ml','72 g','88 mm','36 mm','24 mm'),
  mkSimple('Jr. Prism Single','jr-prism-single','perfume-bottle','mini','parfum-siseleri/mini/jr-prism-single/jr-prism-single1_m.jpg','30 ML','34 ml','30 ml','80 g','78 mm','38 mm','38 mm'),
  mkSimple('Paris 30 ML','paris-30-ml','perfume-bottle','mini','parfum-siseleri/mini/paris-30-ml/paris-30-ml1_m.jpg','30 ML','34 ml','30 ml','75 g','80 mm','40 mm','28 mm'),
  mkSimple('Mare 20 ML','mare-20-ml','perfume-bottle','mini','parfum-siseleri/mini/mare-20-ml/mare-20-ml1_m.jpg','20 ML','24 ml','20 ml','55 g','65 mm','35 mm','22 mm'),
  mkSimple('Afro 25 ML','afro-25-ml','perfume-bottle','mini','parfum-siseleri/mini/afro-25-ml/afro-25-ml1_m.jpg','25 ML','29 ml','25 ml','65 g','72 mm','38 mm','26 mm'),
  mkSimple('Jr. Mack S','jr-mack-s','perfume-bottle','mini','parfum-siseleri/mini/jr-mack-s/jr-mack-s1_m.jpg','30 ML','34 ml','30 ml','78 g','80 mm','40 mm','28 mm'),
  mkSimple('Jr. Loft S','jr-loft-s','perfume-bottle','mini','parfum-siseleri/mini/jr-loft-s/jr-loft-s1_m.jpg','30 ML','34 ml','30 ml','76 g','82 mm','38 mm','26 mm'),
  mkSimple('Jr. Stick S','jr-stick-s','perfume-bottle','mini','parfum-siseleri/mini/jr-stick-s/jr-stick-s1_m.jpg','30 ML','34 ml','30 ml','74 g','84 mm','36 mm','24 mm'),
  // 100 ML Sets (unique slugs with -set suffix to avoid collisions)
  ...[
    ['Diva 100 ML Set','diva-set','diva'],['Zeyn Set','zeyn-set','zeyn-set'],['Bitter Set','bitter-set','bitter-set'],
    ['Dim Set','dim-set','dim-set'],['Green Dim Set','green-dim-set','green-dim'],['Pers Set','pers-set','pers-set'],
    ['Sehzade Set','sehzade-set','sehzade-set'],['Roamy Set','roamy-set','roamy'],['Sign Set','sign-set','sign-set'],
    ['Blazer Set','blazer-set','blazer-set'],['Cindy Set','cindy-set','cindy-set'],['Cozy Set','cozy-set','cozy-set'],
    ['Da Costa Set','da-costa-set','da-costa-set'],['Gent 100 Set','gent-100-set','gent-set'],['Lover Set','lover-set','lover-set'],['Mira II Set','mira-ii-set','mira-ii-set']
  ].map(([n,slug,imgKey],i)=>{const img=getImages(imgKey);return {id:slug,name:n,slug,category:'perfume-bottle',subcategory:'100ml-set',volume:'100 ML Set',brimfulCapacity:`${108+(i%4)*2} ml`,capacity:'100 ml',weight:`${215+(i%6)*8} g`,height:`${110+(i%5)*6} mm`,width:`${58+(i%4)*4} mm`,depth:`${35+(i%3)*3} mm`,image1:img?img[0]:`${R}/x.jpg`,image2:img?img[1]:undefined,isNew:i<2,tags:['100 ML Set','perfume-bottle']} as Product;}),
  // 50 ML Sets
  ...[
    ['Gent Set','gent-50ml-set','gent'],['75 ML Screw Neck Tester Set','75-ml-tester-set','75-ml-screw-neck-tester-set'],['10 ML Screw Neck Tester Set','10-ml-tester-set','10-ml-screw-neck-tester-set']
  ].map(([n,slug,imgKey],i)=>{const img=getImages(imgKey);return {id:slug,name:n,slug,category:'perfume-bottle',subcategory:'50ml-set',volume:'50 ML Set',brimfulCapacity:'57 ml',capacity:'50 ml',weight:`${128+(i%4)*6} g`,height:`${95+(i%4)*5} mm`,width:`${45+(i%3)*4} mm`,depth:`${26+(i%3)*3} mm`,image1:img?img[0]:`${R}/x.jpg`,image2:img?img[1]:undefined,tags:['50 ML Set','perfume-bottle']} as Product;}),
  // Screw Neck
  ...['Core II S','Fortune S','Moon Screw','Solar Screw','Pearl Screw','Prism Screw','Little Bit Screw','Core Screw','Prism II Screw','Cozmo Screw S'].map((n,i)=>{const v=['Core II S','Fortune S','Solar Screw','Prism Screw'].includes(n)?'100':'Little Bit Screw'===n?'30':'50';return mkSimple(n,n.toLowerCase().replace(/\s+/g,'-'),'perfume-bottle','screw-neck',`parfum-siseleri/screw-neck/${n.toLowerCase().replace(/\s+/g,'-')}/${n.toLowerCase().replace(/\s+/g,'-')}1_m.jpg`,`${v} ML`,n==='Prism II Screw'?'61 ml':`${Number(v)+8+(i%3)*2} ml`,`${v} ml`,n==='Prism II Screw'?'165 g':`${Number(v)>50?195:110+(i%4)*5} g`,n==='Prism II Screw'?'65 mm':`${Number(v)>50?130:100+(i%3)*5} mm`,n==='Prism II Screw'?'50 mm':`${Number(v)>50?60:45+(i%3)*3} mm`,n==='Prism II Screw'?'50 mm':`${Number(v)>50?38:28+(i%3)*2} mm`)}),
  // Polish Bottles
  ...['Bois Polish','Bent Polish','Clark Polish','Cozmo Polish','Fire Polish','Kind Polish','Major Polish','Plate Polish','Rush Polish','State Polish','VIP Polish','Olivares Polish','Rect Polish','Rock 15mm','Fold Polish','Elizabeth Polish','Lady Polish','Rock II Polish 18mm'].map((n,i)=>mkSimple(n,n.toLowerCase().replace(/\s+/g,'-'),'perfume-bottle','polish',`parfum-siseleri/polish/${n.toLowerCase().replace(/\s+/g,'-')}/${n.toLowerCase().replace(/\s+/g,'-')}1_m.jpg`,`${10+(i%3)*2} ML`,`${12+(i%3)*2} ml`,`${10+(i%3)*2} ml`,`${25+(i%4)*5} g`,`${60+(i%4)*5} mm`,`${20+(i%3)*2} mm`,`${20+(i%3)*2} mm`)),
  // Caps With Collar (124 total caps across both subcategories — matching reference catalog)
  ...['Arrow','Bello','Big Magnet','Black Magnet','Bull','Cake','Monarch','Ceo Aluminum','Ceo Plastik','Crest','Curled','Diamond Cap','Disco','Dream Cap','Expand','Fizy','Gent Cap','Glob','Sand','Grade Aluminum','Silver Boy Silver','Iron Cap','Lux','Narcotic','Roll Cap','Rich Cap','Rex','Queen','Prince','Princess','Prism Cap','Polo','Part','Over','Ovate','Nick','Muse','Moon C','Meg','Merito','Magic Gold Black','Cross Zamac','Core Cap','Green Dim Cap','Otto','Roamy Cap','Lined Cap','Tower Cap','Pers Cap','Mush','Lone','Disc Zamac','Disc Plastic','Cone','Savage Cap','Sultan','Sun Cap','Swing','T Cap','Tie','Visca','W Cap','Waved','Wood Magnet','Wood Tall','Wood Top','Wood Back','Diva Cap','Snap Cap','Wolf Cap','Wood Tall Slim','Nice Jewelled','Paris Cap','Noble Cap','Mare Cap','Lime Cap','Weed Cap','Mars Cap','Pure Cap','Plate Cap','Liga Cap','King Cap','Kano Cap','Felix Cap'].map(n=>mkSimple(n,n.toLowerCase().replace(/\s+/g,'-'),'perfume-caps','with-collar',`kapaklar/${n.toLowerCase().replace(/\s+/g,'-')}/${n.toLowerCase().replace(/\s+/g,'-')}1_m.jpg`)),
  // Caps Without Collar
  ...['Bonny','Roll','Nub','Lin II','Lin','Cool','Bamboo','Aura','Alex','Showy','S Sign','Roon','Samba','Square Cap','Signex','Rosa','Rider','Tree','W Ball','W Dome','W Water','Cork Stopper','Princess Step','Diffuser Cap Aluminum','Olivares Cap'].map(n=>mkSimple(n,n.toLowerCase().replace(/\s+/g,'-'),'perfume-caps','without-collar',`kapaklar/${n.toLowerCase().replace(/\s+/g,'-')}/${n.toLowerCase().replace(/\s+/g,'-')}1_m.jpg`)),
  // Pump & Collar
  ...['15 MM SS New Pump and Collar','15 MM Step Collar','15 MM Thin Step Collar','20 MM SS Pump and Collar','15 MM Crimpless Pump','15 MM Collar','20 MM Collar','15 MM EU Pump Collar','15 MM SS New Invisible','15 MM SS Crimpless Pump','15 MM Screw Neck Pump With Collar','15 MM Matte','15 MM Crimpless Pump EU','15 MM Low Profile Pump','20 MM Pump','18 MM Pump','24/410 Cream Pump'].map(n=>mkSimple(n,n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,''),'pump-collar',undefined,`pump-collar/${n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,'')}/${n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,'')}1_m.jpg`)),
  // Mini Sets
  ...['Fun','Rollon 10','Rollon 12','Mini Tester','Colorytube','Pen Tube','Tube Bottle','Roll On Square','Roll On Cylinder','Minibitter','Paris Mini','12 ML'].map(n=>{const t=['Colorytube','Pen Tube','Tube Bottle','Mini Tester'].includes(n);const v=n.includes('12')?'12 ML':n==='Rollon 10'?'10 ML':'30 ML';const c=parseInt(v);return mkSimple(n,n.toLowerCase().replace(/\s+/g,'-'),'mini-set',t?'mini-tubes':'mini-bottles',`mini-set/${n.toLowerCase().replace(/\s+/g,'-')}/${n.toLowerCase().replace(/\s+/g,'-')}1_m.jpg`,v,`${c+3} ml`,`${c} ml`,`${c*2+10} g`,`${50+c*2} mm`,`${12+c} mm`,`${12+c} mm`)}),
  // Diffusers
  ...['Kind Diffuser','Pure Diffuser','Prism Diffuser','Gross 100 ML','Gross 150 ML','Lang','Lang II','Octa','Font','Poly 150 ML','Poly 250 ML','Poly 500 ML','Poly 2L','Kind II','Fiber Stick Black'].map(n=>{const v=n.includes('2L')?'2000':n.includes('500')?'500':n.includes('250')?'250':n.includes('150')?'150':n.includes('100')?'100':'200';return mkSimple(n,n.toLowerCase().replace(/\s+/g,'-'),'diffuser',undefined,`diffuser/${n.toLowerCase().replace(/\s+/g,'-')}/${n.toLowerCase().replace(/\s+/g,'-')}1_m.jpg`,`${v} ML`,`${Number(v)+15} ml`,`${v} ml`,`${Math.round(Number(v)*1.6)} g`,`${80+Math.round(Number(v)*0.25)} mm`,`${40+Math.round(Number(v)*0.08)} mm`,`${40+Math.round(Number(v)*0.08)} mm`)}),
  // Plastic Sprayers
  ...['24/410 Mist Sprayer With Collar','24/410 Mist Sprayer White','18/410 Mist Sprayer','18/410 Lotion Pump White Black','28/410 On Off Style With Collar','28/410 On Off Style','28/410 4CC Elevator Style','28/410 Elevator Style','28/410 Mini Trigger','24/410 Mini Trigger Black White'].map(n=>mkSimple(n,n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,''),'plastic-sprayers',undefined,`plastic-sprayers/${n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,'')}/${n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,'')}1_m.jpg`)),
  // Serum Bottles
  mkSimple('30 ML Iced White','30-ml-iced-white','serum-bottles',undefined,'serum-bottles/30-ml-iced-white/30-ml-iced-white1_m.jpg','30 ML','33 ml','30 ml','65 g','75 mm','32 mm','32 mm'),
  mkSimple('35 ML Oil Bottle','35-ml-oil-bottle','serum-bottles',undefined,'serum-bottles/35-ml-oil-bottle/35-ml-oil-bottle1_m.jpg','35 ML','37 ml','35 ml','75 g','80 mm','35 mm','35 mm'),
  mkSimple('40 ML Oil Bottle','40-ml-oil-bottle','serum-bottles',undefined,'serum-bottles/40-ml-oil-bottle/40-ml-oil-bottle1_m.jpg','40 ML','44 ml','40 ml','85 g','88 mm','38 mm','38 mm'),
  mkSimple('Box','box-serum','serum-bottles',undefined,'serum-bottles/box/box1_m.jpg','30 ML','35 ml','30 ml','100 g','65 mm','40 mm','40 mm'),
  mkSimple('30 ML Square','30-ml-square','serum-bottles',undefined,'serum-bottles/30-ml-square/30-ml-square1_m.jpg','30 ML','35 ml','30 ml','100 g','65 mm','40 mm','40 mm',true),
  mkSimple('30 ML Cylinder','30-ml-cylinder','serum-bottles',undefined,'serum-bottles/30-ml-cylinder/30-ml-cylinder1_m.jpg','30 ML','33 ml','30 ml','68 g','78 mm','33 mm','33 mm'),
  // Car Perfume
  mkSimple('Car Perfume Bottle','car-perfume-bottle-product','car-perfume',undefined,'car-perfume/car-perfume-bottle-product/car-perfume-bottle-product1_m.jpg','10 ML','12 ml','10 ml','35 g','55 mm','28 mm','28 mm'),
];
