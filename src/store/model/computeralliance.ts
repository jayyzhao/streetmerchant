import {Store} from './store';

export const ComputerAlliance: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container:
        '#main > div:nth-child(8) > div:nth-child(1) > div.col-sm-7.product-information > div:nth-child(5) > div:nth-child(1) > a',
      text: ['In Stock'],
    },
    maxPrice: {
      container: 'span.price',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '#main > div:nth-child(8) > div:nth-child(1) > div.col-sm-7.product-information > div:nth-child(5) > div:nth-child(1) > a',
      text: ['Out of Stock'],
    },
  },
  links: [
    {
      brand: 'palit', 
      model: 'gamerock', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/palit-rtx-5090-gamerock-graphics-card'},
    {
      brand: 'gigabyte', 
      model: 'windforce oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/gigabyte-rtx-5090-windforce-oc-32g-graphics-card'},
    {
      brand: 'msi', 
      model: 'ventus 3x oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/msi-rtx-5090-32g-ventus-3x-oc-graphics-card'},
    {
      brand: 'zotac', 
      model: 'solid', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/zotac-geforce-rtx-5090-solid-32gb-gddr7-graphics-card'},
    {
      brand: 'asus', 
      model: 'tuf gaming', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/asus-tuf-gaming-rtx-5090-32gb-gddr7-graphics-card'},
    {
      brand: 'msi', 
      model: 'gaming trio oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/msi-rtx-5090-32g-gaming-trio-oc-graphics-card'},
    {
      brand: 'zotac', 
      model: 'solid oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/zotac-geforce-rtx-5090-solid-oc-32gb-gddr7-graphics-card'},
    {
      brand: 'msi', 
      model: 'vanguard soc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/msi-rtx-5090-32g-vanguard-soc-graphics-card'},
    {
      brand: 'msi', 
      model: 'suprim soc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/msi-rtx-5090-32g-suprim-soc-graphics-card'},
    {
      brand: 'asus', 
      model: 'tuf gaming oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/asus-tuf-gaming-rtx-5090-32gb-gddr7-oc-graphics-card'},
    {
      brand: 'gigabyte', 
      model: 'gaming oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/gigabyte-rtx-5090-gaming-oc-32g-graphics-card'},
    {
      brand: 'msi', 
      model: 'suprim liquid soc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/msi-rtx-5090-32g-suprim-liquid-soc-graphics-card'},
    {
      brand: 'zotac', 
      model: 'amp extreme infinity', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/zotac-geforce-rtx-5090-amp-extreme-infinity-32gb-gddr7-graphics-card'},
    {
      brand: 'gigabyte', 
      model: 'master ice', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5090-master-ice-32g-graphics-card'},
    {
      brand: 'gigabyte', 
      model: 'aorus master', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5090-master-32g-graphics-card'},
    {
      brand: 'gigabyte', 
      model: 'aorus xtreme waterforce wb', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5090-xtreme-waterforce-wb-32g-graphics-card'},
    {
      brand: 'gigabyte', 
      model: 'aorus xtreme waterforce', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5090-xtreme-waterforce-32g-graphics-card'},
    {
      brand: 'asus', 
      model: 'astral oc', 
      series: '5090', 
      url: 'https://www.computeralliance.com.au/asus-rog-astral-rtx-5090-32gb-gddr7-oc-edition-graphics-card'},
    {
      brand: 'zotac',
      model: 'solid',
      series: '5080',
      url: 'https://www.computeralliance.com.au/zotac-geforce-rtx-5080-solid-32gb-gddr7-graphics-card'},
    {
      brand: 'msi',
      model: 'shadow 3x oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-shadow-3x-oc-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'windforce oc sff',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx-5080-windforce-oc-sff-16g-graphics-card'},
    {
      brand: 'msi',
      model: 'ventus 3x oc white',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-ventus-3x-oc-white-graphics-card'},
    {
      brand: 'msi',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-ventus-3x-oc-plus-graphics-card'},
    {
      brand: 'msi',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-inspire-3x-oc-graphics-card'},
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '5080',
      url: 'https://www.computeralliance.com.au/palit-rtx-5080-gamingpro-graphics-card'},
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-ventus-3x-oc-graphics-card'},
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-gaming-trio-oc-graphics-card'},
    {
      brand: 'asus',
      model: 'prime oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/asus-prime-rtx-5080-16gb-gddr7-oc-graphics-card'},
    {
      brand: 'msi',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-gaming-trio-oc-white-graphics-card'},
    {
      brand: 'galax',
      model: '1 click oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/galax-geforce-rtx-5080-1-click-oc-16gb-gddr7-graphics-card'},
    {
      brand: 'zotac',
      model: 'solid oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/zotac-geforce-rtx-5080-solid-oc-32gb-gddr7-graphics-card'},
    {
      brand: 'palit',
      model: 'gamerock',
      series: '5080',
      url: 'https://www.computeralliance.com.au/palit-rtx-5080-gamerock-graphics-card'},
    {
      brand: 'msi',
      model: 'vanguard soc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-vanguard-soc-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx-5080-gaming-oc-16g-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'aero oc sff',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx-5080-aero-oc-sff-16g-graphics-card'},
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-suprim-soc-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5080-master-16g-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5080-master-ice-16g-graphics-card'},
    {
      brand: 'zotac',
      model: 'amp extreme infinity',
      series: '5080',
      url: 'https://www.computeralliance.com.au/zotac-geforce-rtx-5080-amp-extreme-infinity-16g-gddr7'},
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/msi-rtx-5080-16g-suprim-liquid-soc-graphics-card'},
    {
      brand: 'asus',
      model: 'tuf gaming oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/asus-tuf-gaming-rtx-5080-16gb-gddr7-oc-graphics-card'},
    {
      brand: 'pny',
      model: 'triple fan',
      series: '5080',
      url: 'https://www.computeralliance.com.au/pny-rtx-5080-triple-fan-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5080-xtreme-waterforce-wb-16g-custom-loop-graphics-card'},
    {
      brand: 'pny',
      model: 'epic-x oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/pny-rtx-5080-argb-epic-x-oc-triple-fan-graphics-card'},
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce liquid',
      series: '5080',
      url: 'https://www.computeralliance.com.au/gigabyte-aorus-rtx-5080-xtreme-waterforce-16g-liquid-cooled-graphics-card'},
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5080',
      url: 'https://www.computeralliance.com.au/asus-rog-astral-rtx-5080-16gb-gddr7-oc-graphics-card'},
  ],
  name: 'computeralliance',
  country: 'AU',
};
