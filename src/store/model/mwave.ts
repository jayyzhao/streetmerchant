import {Store} from './store';

export const Mwave: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: 'body > div.promotionWrapper > div > div.layoutBody > div.mwWrapperCont.mwNoHeadPadTop > div.productCommon > div.proRightBox > div.divAddCart > div.divDown > div.addToBasket.addToCarts > button',
      text: ['Add to Cart'],
    },
    maxPrice: {
      container: 'div.divPriceNormal > div',
      euroFormat: false,
    },
    outOfStock: {
      container: 'body > div.promotionWrapper > div > div.layoutBody > div.mwWrapperCont.mwNoHeadPadTop > div.productCommon > div.proRightBox > div.divAddCart > div.divDown > a',
      text: ['Currently No Stock', 'Notify Me'],
    },
  },
  links: [
    {
      brand: 'asus', 
      model: 'astral oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/asus-rog-astral-geforce-rtx-5090-32gb-gddr7-oc-edition-video-card-ac81843'},
    {
      brand: 'gigabyte', 
      model: 'master ice', 
      series: '5090', 
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5090-aorus-master-ice-32gb-video-card-ac81819'},
    {
      brand: 'gigabyte', 
      model: 'aorus master', 
      series: '5090', 
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5090-aorus-master-32gb-video-card-ac81820'},
    {
      brand: 'gigabyte', 
      model: 'gaming oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5090-gaming-oc-32gb-video-card-ac81825'},
    {
      brand: 'asus', 
      model: 'tuf gaming', 
      series: '5090', 
      url: 'https://mwave.com.au/product/asus-tuf-gaming-geforce-rtx-5090-32gb-gddr7-video-card-ac81831'},
    {
      brand: 'asus', 
      model: 'tuf gaming oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/asus-tuf-gaming-geforce-rtx-5090-32gb-gddr7-oc-edition-video-card-ac81832'},
    {
      brand: 'msi', 
      model: 'suprim soc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5090-suprim-soc-32gb-video-card-ac81849'},
    {
      brand: 'msi', 
      model: 'gaming trio oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5090-gaming-trio-oc-32gb-video-card-ac81851'},
    {
      brand: 'msi', 
      model: 'ventus 3x oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5090-ventus-3x-oc-32gb-video-card-ac81852'},
    {
      brand: 'msi', 
      model: 'vanguard soc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5090-vanguard-soc-32gb-video-card-ac81854'},
    {
      brand: 'gigabyte', 
      model: 'aorus xtreme waterforce', 
      series: '5090', 
      url: 'https://mwave.com.au/product/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-32gb-video-card-ac82180'},
    {
      brand: 'gigabyte', 
      model: 'aorus xtreme waterforce wb', 
      series: '5090', 
      url: 'https://mwave.com.au/product/gigabyte-aorus-geforce-rtx-5090-xtreme-waterforce-wb-32gb-video-card-ac82181'},
    {
      brand: 'gigabyte', 
      model: 'windforce oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5090-windforce-oc-32gb-video-card-ac82182'},
    {
      brand: 'msi', 
      model: 'suprim liquid soc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5090-suprim-liquid-soc-32gb-video-card-ac82217'},
    {
      brand: 'asus', 
      model: 'astral oc', 
      series: '5090', 
      url: 'https://mwave.com.au/product/asus-geforce-rtx-5090-rog-astral-lc-oc-32gb-video-card-ac82223'},
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-gaming-trio-oc-16gb-video-card-ac81846'},
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-suprim-soc-16gb-video-card-ac81853'},
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5080',
      url: 'https://mwave.com.au/product/asus-rog-astral-geforce-rtx-5080-16gb-gddr7-oc-edition-video-card-ac81478'},
    {
      brand: 'asus',
      model: 'tuf gaming oc',
      series: '5080',
      url: 'https://mwave.com.au/product/asus-tuf-gaming-geforce-rtx-5080-16gb-gddr7-oc-edition-video-card-ac81479'},
    {
      brand: 'asus',
      model: 'prime oc',
      series: '5080',
      url: 'https://mwave.com.au/product/asus-prime-geforce-rtx-5080-16gb-gddr7-oc-edition-video-card-ac81480'},
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5080',
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5080-aorus-master-ice-16gb-video-card-ac81821'},
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '5080',
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5080-aorus-master-16gb-video-card-ac81822'},
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5080-gaming-oc-16gb-video-card-ac81826'},
    {
      brand: 'msi',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-ventus-3x-oc-plus-16gb-video-card-ac81847'},
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-gaming-trio-oc-16gb-video-card-white-ac81848'},
    {
      brand: 'msi',
      model: 'vanguard soc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-vanguard-soc-16gb-video-card-ac81850'},
    {
      brand: 'msi',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-inspire-3x-oc-16gb-video-card-ac81859'},
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-ventus-3x-oc-16gb-video-card-ac81865'},
    {
      brand: 'gigabyte',
      model: 'aero oc',
      series: '5080',
      url: 'https://mwave.com.au/product/gigabyte-geforce-rtx-5080-aero-oc-16gb-video-card-ac81990'},
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-ventus-3x-oc-16gb-video-card-white-ac82154'},
    {
      brand: 'pny',
      model: 'triple fan',
      series: '5080',
      url: 'https://mwave.com.au/product/pny-geforce-rtx-5080-triple-fan-16gb-video-card-ac82156'},
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '5080',
      url: 'https://mwave.com.au/product/gigabyte-aorus-geforce-rtx-5080-xtreme-waterforce-16gb-video-card-ac82208'},
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-suprim-liquid-soc-16gb-video-card-ac82218'},
    {
      brand: 'msi',
      model: 'shadow 3x oc',
      series: '5080',
      url: 'https://mwave.com.au/product/msi-geforce-rtx-5080-shadow-3x-oc-16gb-video-card-ac82219'},
    {
      brand: 'pny',
      model: 'triple fan oc',
      series: '5080',
      url: 'https://mwave.com.au/product/pny-geforce-rtx-5080-triple-fan-oc-16gb-video-card-ac82277'},
  ],
  name: 'mwave',
  country: 'AU',
};
