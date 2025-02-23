export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  likes: number;
}

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Fragrances' },
  { id: 4, name: 'Food' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    categoryId: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p38/p3a/25524695.jpeg?format=gallery-medium',
    name: 'iPhone 16 Pro Max 1Tb',
    description: 'Смартфон Apple iPhone 16 Pro Max 1Tb Dual Sim серебристый',
    rating: 0.0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-dual-sim-serebristyi-134907464/?c=750000000',
    likes: 0,
  },
  {
    id: 2,
    categoryId: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
    name: 'Macbook Pro 14 2024',
    description:
      'Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / MX2H3',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000',
    likes: 0,
  },
  {
    id: 3,
    categoryId: 2,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hdf/hf6/84416105611294.jpg?format=gallery-medium',
    name: 'Giant Reign',
    description:
      'Велосипед Giant Reign Advanced Pro 29 дюйм 2022 M мультиколор',
    rating: 0.0,
    link: 'https://kaspi.kz/shop/p/giant-reign-advanced-pro-29-djuim-2022-m-mul-tikolor-114226546/?c=750000000',
    likes: 0,
  },
  {
    id: 4,
    categoryId: 2,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p60/p72/10519782.jpg?format=gallery-medium',
    name: 'LINE skis',
    description: 'Лыжи LINE 19K0021.101.1 2025 178 см мультиколор',
    rating: 0,
    link: 'https://kaspi.kz/shop/p/line-19k0021-101-1-2025-178-sm-mul-tikolor-130666070/?c=750000000',
    likes: 0,
  },
  {
    id: 5,
    categoryId: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/p42/p9e/25655000.png?format=gallery-medium',
    name: 'RTX 5090',
    description: 'Видеокарта GIGABYTE Gigabyte RTX 5090 Windforce OC 32 Гб',
    rating: 0,
    link: 'https://kaspi.kz/shop/p/gigabyte-gigabyte-rtx-5090-windforce-oc-32-gb-134944211/?c=750000000',
    likes: 0,
  },
  {
    id: 6,
    categoryId: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hf6/h92/84075916361758.png?format=gallery-medium',
    name: 'Moza r5',
    description: 'Игровой контроллер Moza R5 черный',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/moza-r5-chernyi-113585363/?c=750000000',
    likes: 0,
  },
  {
    id: 7,
    categoryId: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/h0f/69632195624990.jpg?format=gallery-medium',
    name: 'VARMILO Beijing Opera',
    description: 'Клавиатура VARMILO Beijing Opera V2 VEA87 красный',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/varmilo-beijing-opera-v2-vea87-krasnyi-109172931/?c=750000000',
    likes: 0,
  },
  {
    id: 8,
    categoryId: 3,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/he0/h34/85091910582302.jpg?format=gallery-medium',
    name: 'Valentino Uomo Born In Roma Intense',
    description:
      'Valentino Uomo Born In Roma Intense парфюмерная вода EDP 100 мл, для мужчин',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/valentino-uomo-born-in-roma-intense-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-116425637/',
    likes: 0,
  },
  {
    id: 9,
    categoryId: 4,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/hc7/84707098820638.jpg?format=gallery-medium',
    name: 'Wrigley’s Five',
    description: 'Жевательная резинка Wrigley’s Five Вкус сладкие ягоды 12 шт',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/zhevatel-naja-rezinka-wrigley-s-five-vkus-sladkie-jagody-12-sht-115294284/?c=750000000',
    likes: 0,
  },
  {
    id: 10,
    categoryId: 1,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h61/h95/65130565042206.jpg?format=gallery-medium',
    name: 'Dreame v16',
    description: 'Пылесос Xiaomi Dreame v16 серый',
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/xiaomi-dreame-v16-seryi-104775024/?c=750000000',
    likes: 0,
  },

  {
    id: 11,
    categoryId: 2,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd6/h67/64376673730590.jpg?format=gallery-medium',
    name: 'Wilson basketball',
    description: 'Мяч Wilson WFiba3x3 для баскетбола 6 Done size',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/wilson-wfiba3x3-dlja-basketbola-6-done-size-102740624/?m=16852168&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1AU5l15Ggsr_NdplpEKYCu1m3BQVKg0UxHNbs22Kh6lq5U9hYRZJcaAtH2EALw_wcB',
    likes: 0,
  },
  {
    id: 12,
    categoryId: 2,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hff/hd4/85871521005598.png?format=gallery-medium',
    name: 'Hemet',
    description: 'Шлем Giant Path Mips Asian, 800002604 серый M, XL',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/giant-path-mips-asian-800002604-seryi-m-xl-105125594/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0V44MUG6j-r_FcaZ1INCDdfJyLkH1Nxv0P_UoVbM8Ktbn3BZ0OiuEaAqHTEALw_wcB',
    likes: 0,
  },
  {
    id: 13,
    categoryId: 2,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h75/hdd/86894262059038.png?format=gallery-medium',
    name: 'Creatine',
    description: 'Креатин MuscleLab Nutrition Creatine 300 г',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/musclelab-nutrition-creatine-300-g-103952104/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1AU5l15Ggsr_NdplpEKYCu1m3BQVKg0UxHNbs22Kh6lq5U9hYRZJcaAtH2EALw_wcB',
    likes: 0,
  },
  {
    id: 14,
    categoryId: 3,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h82/h1c/63807063687198.jpg?format=gallery-medium',
    name: 'Bleu de chanel',
    description:
      'CHANEL Bleu De Chanel парфюмерная вода EDP 100 мл, для мужчин',
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/chanel-bleu-de-chanel-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-17302509/?m=1072001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0SuLYfU84COD1EE1DjAdFUPpm-bwQGVeZfVyona6lnT7xNA39lovgaApw0EALw_wcB',
    likes: 0,
  },
  {
    id: 15,
    categoryId: 3,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h90/h99/63826979946526.jpg?format=gallery-medium',
    name: 'Armani Stronger With You',
    description:
      'Giorgio Armani Stronger With You Intensely парфюмерная вода EDP 100 мл, для мужчин',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/giorgio-armani-stronger-with-you-intensely-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-100014430/?srsltid=AfmBOooMPkdkgeQ1dcvkllezGYdlbkyEcSN0pyU-FhXTREj5yd3hZe52',
    likes: 0,
  },
  {
    id: 16,
    categoryId: 3,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h68/h40/64367566651422.jpg?format=gallery-medium',
    name: 'Versace Eros',
    description:
      'Versace Eros Parfum Pour Homme духи PARFUM 100 мл, для мужчин',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/versace-eros-parfum-pour-homme-duhi-parfum-100-ml-dlja-muzhchin-104512345/?c=750000000',
    likes: 0,
  },
  {
    id: 17,
    categoryId: 3,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h87/hb3/82158425440286.jpg?format=gallery-medium',
    name: 'LV Imagination',
    description:
      'Louis Vuitton Imagination парфюмерная вода EDP 100 мл, для мужчин',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/louis-vuitton-imagination-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-112031840/?c=750000000',
    likes: 0,
  },
  {
    id: 18,
    categoryId: 4,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pad/p22/4983576.jpeg?format=gallery-medium',
    name: 'Nutella',
    description: 'NUTELLA паста шоколадная с лесным орехом 350 г',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/nutella-pasta-shokoladnaja-s-lesnym-orehom-350-g-100227055/?c=750000000',
    likes: 26,
  },
  {
    id: 19,
    categoryId: 4,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pec/p3e/5871312.jpg?format=gallery-medium',
    name: 'Borjomi',
    description: 'Borjomi лечебно-столовая газированная 0.5 л',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/borjomi-lechebno-stolovaja-gazirovannaja-0-5-l-100803209/?c=750000000',
    likes: 61,
  },
  {
    id: 20,
    categoryId: 4,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/pfe/p5b/11814849.jpg?format=gallery-medium',
    name: 'Snickers',
    description: 'Snickers лесной орех шоколадный батончик молочный 81 г',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/snickers-lesnoi-oreh-shokoladnyi-batonchik-molochnyi-81-g-100222670/?c=750000000',
    likes: 0,
  },
  {
    id: 21,
    categoryId: 4,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/hd5/64106050486302.jpg?format=gallery-medium',
    name: 'Fuse-tea',
    description: 'Холодный чай Fuse-tea зеленый манго, ананас 1 л',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/holodnyi-chai-fuse-tea-zelenyi-mango-ananas-1-l-101004234/?c=750000000',
    likes: 22,
  },
];
