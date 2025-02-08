import { Store } from './store';

export const Umart: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '#youhuo_delivery',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.goods-price',
      euroFormat: false,
    },
    outOfStock: {
      container: 'div.price-box > div.stock-label',
      text: ['out of stock'],
    },
  },
  links: [
    { 
      brand: 'gigabyte', 
      model: 'aorus xtreme waterforce', 
      series: '5090', 
      url: 'https://umart.com.au/product/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-32g-graphics-card-gv-n5090aorusx-w-32gd-81385' 
    },
    { 
      brand: 'gigabyte', 
      model: 'aorus xtreme waterforce', 
      series: '5090', 
      url: 'https://umart.com.au/product/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-wb-32g-graphics-card-gv-n5090aorusx-wb-32gd-81386' 
    },
    { 
      brand: 'gigabyte', 
      model: 'master ice', 
      series: '5090', 
      url: 'https://umart.com.au/product/gigabyte-aorus-geforce-rtx-5090-master-ice-32g-graphics-card-gv-n5090aorusm-ice-32gd-81387'
    },
    { 
      brand: 'gigabyte', 
      model: 'aorus master', 
      series: '5090', 
      url: 'https://umart.com.au/product/gigabyte-aorus-geforce-rtx-5090-master-32g-graphics-card-gv-n5090aorus-m-32gd-81388' 
    },
    { 
      brand: 'gigabyte', 
      model: 'gaming oc', 
      series: '5090', 
      url: 'https://umart.com.au/product/gigabyte-geforce-rtx-5090-gaming-oc-32g-graphics-card-gv-n5090gaming-oc-32gd-81389' 
    },
    { 
      brand: 'gigabyte', 
      model: 'windforce', 
      series: '5090', 
      url: 'https://umart.com.au/product/gigabyte-geforce-rtx-5090-windforce-oc-32g-graphics-card-gv-n5090wf3oc-32gd-81390' 
    },
    { 
      brand: 'msi', 
      model: 'suprim liquid soc', 
      series: '5090', 
      url: 'https://umart.com.au/product/msi-geforce-rtx-5090-32g-suprim-liquid-soc-graphics-card-geforce-rtx-5090-32g-suprim-liquid-soc-81402' 
    },
    { 
      brand: 'msi', 
      model: 'suprim soc', 
      series: '5090', 
      url: 'https://umart.com.au/product/msi-geforce-rtx-5090-32g-suprim-soc-graphics-card-geforce-rtx-5090-32g-suprim-soc-81403'
    },
    { 
      brand: 'msi', 
      model: 'vanguard soc', 
      series: '5090', 
      url: 'https://umart.com.au/product/msi-geforce-rtx-5090-32g-vanguard-soc-launch-edition-graphics-card-geforce-rtx-5090-32g-vanguard-soc-launch-edition-81404'
    },
    { 
      brand: 'msi', 
      model: 'vanguard soc', 
      series: '5090', 
      url: 'https://umart.com.au/product/msi-geforce-rtx-5090-32g-vanguard-soc-graphics-card-geforce-rtx-5090-32g-vanguard-soc-81405' 
    },
    { 
      brand: 'msi', 
      model: 'gaming trio oc', 
      series: '5090', 
      url: 'https://umart.com.au/product/msi-geforce-rtx-5090-32g-gaming-trio-oc-graphics-card-geforce-rtx-5090-32g-gaming-trio-oc-81406'
    },
    { 
      brand: 'msi', 
      model: 'ventus 3x oc', 
      series: '5090', 
      url: 'https://umart.com.au/product/msi-geforce-rtx-5090-32g-ventus-3x-oc-graphics-card-geforce-rtx-5090-32g-ventus-3x-oc-81407'
    },
    { 
      brand: 'asus', 
      model: 'rog astral', series: '5090', url: 'https://umart.com.au/product/asus-rog-astral-lc-geforce-rtx-5090-oc-32g-gaming-graphics-card-rog-astral-lc-rtx5090-o32g-gaming-81414' },
    { 
      brand: 'asus', 
      model: 'astral oc', 
      series: '5090',
      url: 'https://umart.com.au/product/asus-rog-astral-geforce-rtx-5090-oc-32g-gaming-graphics-card-rog-astral-rtx5090-o32g-gaming-81415'
    },
    { 
      brand: 'asus', 
      model: 'tuf oc', 
      series: '5090', 
      url: 'https://umart.com.au/product/asus-tuf-geforce-rtx-5090-oc-32g-gaming-graphics-card-tuf-rtx5090-o32g-gaming-81416'
    },
    { 
      brand: 'asus', 
      model: 'tuf gaming', 
      series: '5090', 
      url: 'https://umart.com.au/product/asus-tuf-geforce-rtx-5090-32g-gaming-graphics-card-tuf-rtx5090-32g-gaming-81417' 
    },
  ],
  name: 'umart',
  country: 'AU',
};
