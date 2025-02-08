import {Store} from './store';

export const Pccg: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: 'div.price-box > div.stock-label',
      text: ['IN STOCK'],
    },
    outOfStock: {
      container: 'div.price-box > div.stock-label',
      text: ['CHECK BACK LATER!'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'tuf gaming',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68108/asus-geforce-rtx-5090-tuf-gaming-gddr7-32gb'},
    {
      brand: 'asus',
      model: 'tuf gaming oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68109/asus-geforce-rtx-5090-tuf-gaming-oc-gddr7-32gb'},
    {
      brand: 'asus',
      model: 'astral liquid oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68302/asus-rog-astral-geforce-rtx-5090-liquid-oc-gddr7-32gb'},
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68107/asus-rog-astral-geforce-rtx-5090-oc-gddr7-32gb'},
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68082/gigabyte-aorus-geforce-rtx-5090-master-gddr7-32gb'},
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68081/gigabyte-aorus-geforce-rtx-5090-master-ice-gddr7-32gb'},
    {
      brand: 'gigabyte',
      model: 'xtreme waterforce',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68294/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-gddr7-32gb'},
    {
      brand: 'gigabyte',
      model: 'xtreme waterforce wb',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68295/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-wb-gddr7-32gb'},
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68086/gigabyte-geforce-rtx-5090-gaming-oc-gddr7-32gb'},
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68089/gigabyte-geforce-rtx-5090-windforce-oc-gddr7-32gb'},
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68150/msi-geforce-rtx-5090-gaming-trio-oc-gddr7-32gb'},
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68148/msi-geforce-rtx-5090-suprim-liquid-soc-gddr7-32gb'},
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68091/msi-geforce-rtx-5090-suprim-soc-gddr7-32gb'},
    {
      brand: 'msi',
      model: 'vanguard soc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68299/msi-geforce-rtx-5090-vanguard-soc-gddr7-32gb'},
    {
      brand: 'msi',
      model: 'vanguard soc launch edition',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68149/msi-geforce-rtx-5090-vanguard-soc-launch-edition-gddr7-32gb'},
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68151/msi-geforce-rtx-5090-ventus-3x-oc-gddr7-32gb'},
    {
      brand: 'zotac',
      model: 'gaming',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68096/zotac-gaming-geforce-rtx-5090-amp-extreme-infinity-gddr7-32gb'},
    {
      brand: 'zotac',
      model: 'gaming solid',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68100/zotac-gaming-geforce-rtx-5090-solid-gddr7-32gb'},
    {
      brand: 'zotac',
      model: 'gaming solid oc',
      series: '5090',
      url: 'https://www.pccasegear.com/products/68098/zotac-gaming-geforce-rtx-5090-solid-oc-gddr7-32gb'},
    {
      brand: 'asus',
      model: 'prime',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68301/asus-geforce-rtx-5080-prime-gddr7-16gb'},
    {
      brand: 'asus',
      model: 'prime oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68056/asus-geforce-rtx-5080-prime-oc-gddr7-16gb'},
    {
      brand: 'asus',
      model: 'tuf gaming oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68055/asus-geforce-rtx-5080-tuf-gaming-oc-gddr7-16gb'},
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68054/asus-rog-astral-geforce-rtx-5080-oc-gddr7-16gb'},
    {
      brand: 'galax',
      model: '1 click oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68336/galax-geforce-rtx-5080-1-click-oc-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68084/gigabyte-aorus-geforce-rtx-5080-master-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68083/gigabyte-aorus-geforce-rtx-5080-master-ice-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'xtreme waterforce',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68303/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68304/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-wb-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'aero oc sff',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68088/gigabyte-geforce-rtx-5080-aero-oc-sff-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68087/gigabyte-geforce-rtx-5080-gaming-oc-gddr7-16gb'},
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68242/gigabyte-geforce-rtx-5080-windforce-oc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68284/msi-geforce-rtx-5080-gaming-trio-oc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68289/msi-geforce-rtx-5080-gaming-trio-oc-gddr7-16gb-white'},
    {
      brand: 'msi',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68128/msi-geforce-rtx-5080-inspire-3x-oc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'shadow 3x oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68297/msi-geforce-rtx-5080-shadow-3x-oc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68126/msi-geforce-rtx-5080-suprim-liquid-soc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68092/msi-geforce-rtx-5080-suprim-soc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'vanguard soc launch edition',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68127/msi-geforce-rtx-5080-vanguard-soc-launch-edition-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68298/msi-geforce-rtx-5080-ventus-3x-oc-16gb-gddr7-white'},
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68129/msi-geforce-rtx-5080-ventus-3x-oc-gddr7-16gb'},
    {
      brand: 'msi',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68130/msi-geforce-rtx-5080-ventus-3x-oc-plus-gddr7-16gb'},
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68364/palit-geforce-rtx-5080-gaming-pro-gddr7-16gb'},
    {
      brand: 'pny',
      model: 'triple fan',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68291/pny-geforce-rtx-5080-triple-fan-gddr7-16gb'},
    {
      brand: 'zotac',
      model: 'gaming',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68099/zotac-gaming-geforce-rtx-5080-amp-extreme-infinity-gddr7-16gb'},
    {
      brand: 'zotac',
      model: 'gaming solid',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68085/zotac-gaming-geforce-rtx-5080-solid-16gb-gddr7'},
    {
      brand: 'zotac',
      model: 'gaming solid oc',
      series: '5080',
      url: 'https://www.pccasegear.com/products/68097/zotac-gaming-geforce-rtx-5080-solid-oc-gddr7-16gb'},
  ],
  name: 'pccg',
  country: 'AU',
};
