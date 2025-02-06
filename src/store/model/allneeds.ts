import {Store} from './store';

export const Allneeds: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.amstockstatus',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'span.price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.amstockstatus',
      text: ['sold out'],
    },
  },
  links: [
    {
      brand: 'msi',
      model: 'vanguard soc launch edition',
      series: '5080',
      url: 'https://allneeds.com.au/msi-geforce-rtx-5080-vanguard-soc-launch-edition-gddr7-16gb',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '5090',
      url: 'https://allneeds.com.au/palit-geforce-rtx-5090-gamerock-32gb-3-5-slot-recommended-system-power-1200w',
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5080',
      url: 'https://allneeds.com.au/gigabyte-geforce-rtx-5080-windforce-oc-gddr7-16gb-gv-n5080wf3oc-16gd',
    },
    {
      brand: 'gigabyte',
      model: 'aero oc sff',
      series: '5080',
      url: 'https://allneeds.com.au/gigabyte-geforce-rtx-5080-aero-oc-sff-gddr7-16gb-gv-n5080aero-oc-16gd',
    },
  ],
  name: 'allneeds',
  country: 'AU',
};
