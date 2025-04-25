import {Store} from './store';

export const Popmart: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '#__next > div > div > div.layout_pcLayout__49ZwP > div.products_container__T0mpL > div.products_headerBlock__CESKr > div.products_rightBlock__bf2x5 > div > div.index_actionContainer__EqFYe > div.index_euBtn__7NmZ6.index_red__kx6Ql',
      text: ['BUY NOW'],
    },
    maxPrice: {
      container: '#__next > div > div > div.layout_pcLayout__49ZwP > div.products_container__T0mpL > div.products_headerBlock__CESKr > div.products_rightBlock__bf2x5 > div > div.index_topContainer__k3AWJ > div.index_titleContainer__lPjts > div',
      euroFormat: false,
    },
    outOfStock: {
      container: '#__next > div > div > div.layout_pcLayout__49ZwP > div.products_container__T0mpL > div.products_headerBlock__CESKr > div.products_rightBlock__bf2x5 > div > div.index_actionContainer__EqFYe > div',
      text: ['NOTIFY ME WHEN AVAILABLE!'],
    },
  },
  links: [
    {
      brand: 'popmart',
      model: 'have a seat',
      series: 'themonsters',
      url: 'https://www.popmart.com/au/products/1318/THE-MONSTERS---Have-a-Seat-Vinyl-Plush-Blind-Box',
    },
    {
      brand: 'popmart',
      model: 'lets checkmate plus hang',
      series: 'themonsters',
      url: "https://www.popmart.com/au/products/1706/THE%20MONSTERS%20Let's%20Checkmate%20Series-Vinyl%20Plush%20Hanging%20Card",
    },
    {
      brand: 'popmart',
      model: 'lets checkmate plus doll',
      series: 'themonsters',
      url: "https://www.popmart.com/au/products/1707/THE%20MONSTERS%20Let's%20Checkmate%20Series-Vinyl%20Plush%20Doll",
    },
    {
      brand: 'popmart',
      model: 'big into energy',
      series: 'themonsters',
      url: "https://www.popmart.com/au/products/1707/THE%20MONSTERS%20Let's%20Checkmate%20Series-Vinyl%20Plush%20Doll",
    }
  ],
  name: 'popmart',
  country: 'AU',
};