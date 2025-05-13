import {Store} from './store';

export const Gymshark: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '#MainContent > div > div.pdp_main__rR2_6 > div.default_productInformation__X7E3W > div.add-to-cart_button-container__bHRuV > button',
      text: ['Add to bag'],
    },
    maxPrice: {
      container: '#MainContent > div > div.pdp_main__rR2_6 > div.default_productInformation__X7E3W > section.product-information_information__3DX7m > div.product-information_price__LJWYG > div',
      euroFormat: false,
    },
    outOfStock: {
      container: '#MainContent > div > div.pdp_main__rR2_6 > div.default_productInformation__X7E3W > div.add-to-cart_button-container__bHRuV > button',
      text: ['Notify me'],
    },
  },
  links: [
    {
      brand: 'gymshark',
      model: 'v5 t-shirt blue',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-t-shirt-ss-tops-black-aw25",
    },
    {
      brand: 'gymshark',
      model: 'v5 t-shirt red',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-t-shirt-ss-tops-black-ss24-1",
    },
    {
      brand: 'gymshark',
      model: 'v5 t-shirt grey',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-t-shirt-ss-tops-black-ss24",
    },
    {
      brand: 'gymshark',
      model: 'v5 tank grey',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-tank-sleeveless-tops-black-aw24-1",
    },
    {
      brand: 'gymshark',
      model: 'v5 tank red',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-tank-sleeveless-tops-black-aw24",
    },
    {
      brand: 'gymshark',
      model: 'v5 tank blue',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-tank-sleeveless-tops-black-aw25-1",
    },
    {
      brand: 'gymshark',
      model: 'v5 long grey',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-long-sleeve-t-shirt-ls-tops-black-ss24-1",
    },
    {
      brand: 'gymshark',
      model: 'v5 long red',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-long-sleeve-t-shirt-ls-tops-black-ss24",
    },
    {
      brand: 'gymshark',
      model: 'v5 long blue',
      series: 'onyx',
      url: "https://au.gymshark.com/products/gymshark-onyx-5-0-seamless-long-sleeve-t-shirt-ls-tops-black-aw25",
    },


    
  ],
  name: 'gymshark',
  country: 'AU',
};