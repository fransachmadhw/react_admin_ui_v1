const orders = [
  {
    id: 1,
    product:
      'https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all',
    title: 'Acer Laptop 16 KL-4804',
    profile:
      'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Teddy Firgantoro',
    address: 'Jln. Gatot Subroto No. 620, Palu',
    date: '01.02.2024',
    total: '$599.99',
    status: 'Pending',
  },
  {
    id: 2,
    product:
      'https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png',
    title: 'Sony Bravia KDL-47W805A',
    profile:
      'https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600',
    recipient: 'Laila Tari Puspasari',
    address: 'Jln. Jakarta No. 468, Malang',
    date: '25.01.2024',
    total: '$879.99',
    status: 'Dispatch',
  },
  {
    id: 3,
    product:
      'https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png',
    title: 'Logitech MX Master 3',
    profile:
      'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
    recipient: 'Kezia Yulia',
    address: 'Jr. Qrisdoren No. 731, Semarang',
    date: '03.02.2024',
    total: '$879.99',
    status: 'Cancelled',
  },
  {
    id: 4,
    product:
      'https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png',
    title: 'Philips Hue Play Gradient',
    profile:
      'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Bambang Najmudin',
    address: 'Jr. Supono No. 770, DI Yogyakarta',
    date: '01.02.2024',
    total: '$45.99',
    status: 'Completed',
  },
  {
    id: 5,
    product:
      'http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front',
    title: 'Samsung TV 4K SmartTV',
    profile:
      'https://images.pexels.com/photos/681644/pexels-photo-681644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Wulan Pratiwi',
    address: 'Psr. Surapati No. 982, Denpasar',
    date: '01.02.2024',
    total: '$549.99',
    status: 'Dispatch',
  },
  {
    id: 6,
    product:
      'https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png',
    title: 'Playstation 5 Digital Edition',
    profile:
      'https://images.pexels.com/photos/623305/pexels-photo-623305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Darimin Permadi',
    address: 'Jln. Ekonomi No. 524, Palangka Raya',
    date: '15.01.2024',
    total: '$759.99',
    status: 'Completed',
  },
  {
    id: 7,
    product:
      'https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png',
    title: 'Dell Laptop KR211822',
    profile:
      'https://images.pexels.com/photos/3361154/pexels-photo-3361154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Salsabila Mutia Novitasari',
    address: 'Jln. Pasteur No. 981, Jakarta Barat',
    date: '28.01.2024',
    total: '$499.99',
    status: 'Completed',
  },
  {
    id: 8,
    product: 'https://raylo.imgix.net/iphone-14-blue.png',
    title: 'Apple Iphone 14 Pro Max',
    profile:
      'https://images.pexels.com/photos/460031/pexels-photo-460031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Lasmanto Putra',
    address: 'Ki. Bakti No. 754, Semarang',
    date: '08.02.2024',
    total: '$799.49',
    status: 'Pending',
  },
  {
    id: 9,
    product:
      'https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png',
    title: 'Logitech MX Master 3',
    profile:
      'https://images.pexels.com/photos/1083855/pexels-photo-1083855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Cawisadi Hardiansyah',
    address: 'Ds. Sutarto No. 418, Surakarta',
    date: '10.02.2024',
    total: '$79.49',
    status: 'Cancelled',
  },
  {
    id: 10,
    product:
      'http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front',
    title: 'Samsung TV 4K SmartTV',
    profile:
      'https://images.pexels.com/photos/1832326/pexels-photo-1832326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipient: 'Amelia Utami',
    address: 'Jr. Bank Dagang Negara No. 893, Denpasar',
    date: '14.02.2024',
    total: '$679.49',
    status: 'Dispatch',
  },
];

export default orders;
