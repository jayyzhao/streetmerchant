import {Store} from './store';

export const Msy: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '#add_product_btn > button',
      text: ['Add To Cart'],
    },
    maxPrice: {
      container: '#shop_price > span.goods-price.ele-goods-price',
      euroFormat: false,
    },
    outOfStock: {
      container: '#add_product_btn > button',
      text: ['📢 Notify Me When Available!'],
    },
  },
  links: [
    {
      brand: 'amd',
      model: '7800x3d',
      series: 'ryzen7800x3d',
      url: 'https://www.msy.com.au/product/amd-ryzen-7-7800x3d-8-core-am5-5ghz-cpu-processor-100-100000910wof-69583',
    },
    {
      brand: 'msi',
      model: 'vanguard soc',
      series: '5090',
      url: 'https://www.msy.com.au/product/msi-geforce-rtx-5090-32g-vanguard-soc-graphics-card-geforce-rtx-5090-32g-vanguard-soc-81405',
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.msy.com.au/product/msi-geforce-rtx-5090-32g-suprim-soc-graphics-card-geforce-rtx-5090-32g-suprim-soc-81403',
    },
    {
      brand: 'asus',
      model: 'rog astral',
      series: '5090',
      url: 'https://www.msy.com.au/product/asus-rog-astral-geforce-rtx-5090-oc-32g-gaming-graphics-card-rog-astral-rtx5090-o32g-gaming-81415',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '5090',
      url: 'https://www.msy.com.au/product/asus-tuf-geforce-rtx-5090-32g-gaming-graphics-card-tuf-rtx5090-32g-gaming-81417',
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.msy.com.au/product/msi-geforce-rtx-5080-16g-suprim-soc-graphics-card-geforce-rtx-5080-16g-suprim-soc-81408',
    },
    {
      brand: 'msi',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://www.msy.com.au/product/msi-geforce-rtx-5080-16g-inspire-3x-oc-graphics-card-geforce-rtx-5080-16g-inspire-3x-oc-81410',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc white',
      series: '5080',
      url: 'https://www.msy.com.au/product/msi-geforce-rtx-5080-16g-ventus-3x-oc-white-graphics-card-geforce-rtx-5080-16g-ventus-3x-oc-white-81411',
    },
    {
      brand: 'asus',
      model: 'rog astral',
      series: '5080',
      url: 'https://www.msy.com.au/product/asus-rog-astral-geforce-rtx-5080-16g-oc-graphics-card-rog-astral-rtx5080-o16g-gaming-81331',
    },
    {
      brand: 'asus',
      model: 'prime',
      series: '5080',
      url: 'https://www.msy.com.au/product/asus-prime-geforce-rtx-5080-16g-graphics-card-prime-rtx5080-16g-81418',
    },
  ],
  name: 'msy',
  country: 'AU',
};