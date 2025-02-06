import {Store} from './store';

export const Centrecom: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.prod_stores_stock > li:nth-child(1) > span:nth-child(2)',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'div.prod_price_current.product-price > span',
      euroFormat: false,
    },
    outOfStock: {
      container: '.prod_stores_stock > li:nth-child(1) > span:nth-child(2)',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '5090',
      url: 'https://www.centrecom.com.au/gigabyte-aorus-geforce-rtx-5090-master-32g-graphics-card',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '5090',
      url: 'https://www.centrecom.com.au/palit-gamerock-geforce-rtx-5090-32gb-gddr7-graphics-card',
    },
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5090',
      url: 'https://www.centrecom.com.au/gigabyte-aorus-geforce-rtx-5090-master-ice-32g-graphics-card',
    },
  ],
  name: 'centrecom',
  country: 'AU',
};
