import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p38/p3a/25524695.jpeg?format=gallery-medium',
      name: 'iPhone 16 Pro Max 1Tb',
      description: 'Смартфон Apple iPhone 16 Pro Max 1Tb Dual Sim серебристый',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-dual-sim-serebristyi-134907464/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
      name: 'Macbook Pro 14 2024',
      description:
        'Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / MX2H3',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/hf6/84416105611294.jpg?format=gallery-medium',
      name: 'Giant Reign',
      description:
        'Велосипед Giant Reign Advanced Pro 29 дюйм 2022 M мультиколор',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/giant-reign-advanced-pro-29-djuim-2022-m-mul-tikolor-114226546/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p72/10519782.jpg?format=gallery-medium',
      name: 'LINE skis',
      description: 'Лыжи LINE 19K0021.101.1 2025 178 см мультиколор',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/line-19k0021-101-1-2025-178-sm-mul-tikolor-130666070/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p42/p9e/25655000.png?format=gallery-medium',
      name: 'RTX 5090',
      description: 'Видеокарта GIGABYTE Gigabyte RTX 5090 Windforce OC 32 Гб',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/gigabyte-gigabyte-rtx-5090-windforce-oc-32-gb-134944211/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h92/84075916361758.png?format=gallery-medium',
      name: 'Moza r5',
      description: 'Игровой контроллер Moza R5 черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/moza-r5-chernyi-113585363/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h0f/69632195624990.jpg?format=gallery-medium',
      name: 'VARMILO Beijing Opera',
      description: 'Клавиатура VARMILO Beijing Opera V2 VEA87 красный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/varmilo-beijing-opera-v2-vea87-krasnyi-109172931/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h34/85091910582302.jpg?format=gallery-medium',
      name: 'Valentino Uomo Born In Roma Intense',
      description:
        'Valentino Uomo Born In Roma Intense парфюмерная вода EDP 100 мл, для мужчин',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/valentino-uomo-born-in-roma-intense-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-116425637/',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/hc7/84707098820638.jpg?format=gallery-medium',
      name: 'Wrigley’s Five',
      description:
        'Жевательная резинка Wrigley’s Five Вкус сладкие ягоды 12 шт',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/zhevatel-naja-rezinka-wrigley-s-five-vkus-sladkie-jagody-12-sht-115294284/?c=750000000',
    },

    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h95/65130565042206.jpg?format=gallery-medium',
      name: 'Dreame v16',
      description: 'Пылесос Xiaomi Dreame v16 серый',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/xiaomi-dreame-v16-seryi-104775024/?c=750000000',
    },
  ];

  shareOnWhatsApp(product: Product) {
    window.open(
      `https://wa.me/?text=Check this product from new store!: ${product.link}`,
      '_blank'
    );
  }

  shareOnTelegram(product: Product) {
    window.open(
      `https://t.me/share/url?url=${product.link}&text=Check this product from new store!`,
      '_blank'
    );
  }
}
