const food = [
    {
        id: 0,
        continent:'europe',
        country:'Italy',
        group:'main courses',
        name:'Pizza',
        img: 'https://static.takeaway.com/images/chains/pl/mastergrupa_stopiatka/products/pizza_farelka.png?timestamp=1693159715'
    },
    {
        id: 1,
        continent:'europe',
        country:'Turkey',
        group:'Fast Food',
        name:'Kebab',
        img: 'https://www.hammurabielk.eu/wp-content/uploads/2021/12/Bez-nazwy-11.png'
    },
    {
        id: 2,
        continent:'europe',
        country:'Poland',
        group:'soups',
        name:'Żurek',
        img: 'https://www.jemyjemy.com/images/zupy/zurek/talerz.png'
    },
    {
        id: 3,
        continent:'Asia',
        country:'Japan',
        group:'soups',
        name:'Ramen',
        img: 'https://www.pandaramen.pl/wp-content/uploads/2021/05/paitan.png'
    },
    {
        id: 4,
        continent:'europe',
        country:'Spain',
        group:'main courses',
        name:'Paella',
        img: 'https://fotw.com.au/wp-content/uploads/2021/07/FOTW_Recipe_SpanishPaellaWithChickenAndPrawns_fotw00302.png'
    },
    {
        id: 5,
        continent:'North America',
        country:'USA',
        group:'Fast Food',
        name:'Burger',
        img: 'https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-beef-burger-3000px2-1-768x768.png'
    },
    {
        id: 6,
        continent:'europe',
        country:'Greec',
        group:'main courses',
        name:'Moussaka',
        img: 'https://rootkitchen.uk/cdn/shop/products/moussaka-942515.png?v=1658210958'
    },
    {
        id: 7,
        continent:'europe',
        country:'Poland',
        group:'main courses',
        name:'Dumplings ',
        img: 'https://craftyramen.com/cdn/shop/files/Dumplings_Floating_1080x1080_fe7dbab3-f1ab-49e9-87f0-10367626f763.png?v=1693416529'
    },
    {
        id: 8,
        continent:'South America',
        country:'Wenezuela',
        group:'main courses',
        name:'Arepa',
        img: 'https://i.pinimg.com/originals/53/a9/34/53a934488a996b3232da2ee34108da0d.png'
    },
    {
        id: 9,
        continent:'South America',
        country:'Chile',
        group:'main courses',
        name:'Curanto',
        img: 'https://domicilios116.carneslossauces.com/wp-content/uploads/2020/09/Cazuela-de-Mariscos_Mesa-de-trabajo-1-300x300.png'
    },
    {
        id: 10,
        continent:'South America',
        country:'Brasil',
        group:'main courses',
        name:'Feijoada',
        img: 'https://vapza.vteximg.com.br/arquivos/ids/155604/bowl-feijoada.png?v=637256854531270000'
    },
    {
        id: 11,
        continent: 'Africa',
        country: 'Ethiopia',
        group: 'main courses',
        name: 'Injera with Wot',
        img: 'https://static.wixstatic.com/media/71ec36_da2b17c954364773bbcb2a27368a1664~mv2.png/v1/fill/w_560,h_562,al_c,lg_1,q_85,enc_auto/2qw1w8tvbko4wgk8g0g4owggw2e7nwn483ujoc0s80wwc4wsw4c2a3k5ms3rscos8gsokwkkowo.png'
      },
      {
        id: 12,
        continent: 'Asia',
        country: 'India',
        group: 'main courses',
        name: 'Butter Chicken',
        img: 'https://www.karimsnewtown.com/wp-content/uploads/2021/12/Butter_Chicken-1.png'
      },
      {
        id: 13,
        continent: 'South America',
        country: 'Peru',
        group: 'main courses',
        name: 'Ceviche',
        img: 'https://elsupermarkets.com/wp-content/uploads/2022/03/My-diet-3.png'
      },
      {
        id: 14,
        continent: 'Europe',
        country: 'France',
        group: 'main courses',
        name: 'Boeuf Bourguignon',
        img: 'https://epicier.ca/wp-content/uploads/2022/04/boeuf_bourguignon04.png'
      },
      {
        id: 15,
        continent: 'Asia',
        country: 'China',
        group: 'main courses',
        name: 'Kung Pao Chicken',
        img: 'https://png.pngtree.com/png-clipart/20230419/ourmid/pngtree-a-steaming-plate-of-kung-pao-chicken-png-image_6711247.png'
      },
      {
        id: 16,
        continent:'europe',
        country:'Greece',
        group:'appetizers',
        name:'Tzatziki',
        img: 'https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/xzltskuo/16ad5b63-a621-49bd-8171-3cb8bfa6ea5e.png'
    },
    {
        id: 17,
        continent:'Africa',
        country:'Morocco',
        group:'main courses',
        name:'Tagine',
        img: 'https://uploads-ssl.webflow.com/5eef57db89bb1904bcc0af61/5f74a4ff0eec21067248f414_VEGETABLES-TAGINE.png'
    },
    {
        id: 18,
        continent:'North America',
        country:'Mexico',
        group:'main courses',
        name:'Tacos al Pastor',
        img: 'https://cateringtasteboutique.com/cdn/shop/files/Fotos-Catering-Pag-Web_0003_Capa-1_600x.png?v=1693937585'
    },
    {
        id: 19,
        continent:'Europe',
        country:'France',
        group:'desserts',
        name:'Crème brûlée',
        img: 'https://clyrolinx.co.za/wp-content/uploads/2020/09/Creme-brulee.png'
    },
    {
        id: 20,
        continent:'Australia',
        country:'Australia',
        group:'main courses',
        name:'Fish and Chips',
        img: 'https://jbistro.sg/wp-content/uploads/2021/05/fish-chips.png'
    },
    {
        id: 21,
        continent:'Asia',
        country:'Thailand',
        group:'soups',
        name:'Tom Yum Goong',
        img: 'https://thaiexpress.ca/wp-content/uploads/2023/08/tom-yum-soup-1.png'
    },
    {
        id: 22,
        continent:'Africa',
        country:'Nigeria',
        group:'main courses',
        name:'Jollof Rice',
        img: 'https://mamaashanti.co.ke/wp-content/uploads/2022/06/Jollof-rice.png'
    },
    {
        id: 23,
        continent:'Australia',
        country:'Australia',
        group:'desserts',
        name:'Pavlova',
        img: 'https://www.anastate.ro/storage/products/torturi/tort-pavlova/thumbs/tort-pavlova_1630922893_0.png'
    },
    {
        id: 24,
        continent:'Australia',
        country:'Australia',
        group:'main courses',
        name:'Meat Pie',
        img: 'https://www.chrisanthidis.gr/en/assets/components/phpthumbof/cache/39.bed2192c9ad92904a9cc89e9725fd7a9.png'
    },
    {
        id: 25,
        continent:'Asia',
        country:'Thailand',
        group:'main courses',
        name:'Pad Thai',
        img: 'https://sushifriendswroclaw.pl/wp-content/uploads/2022/01/pad-thai-vege.png'
    },
    {
        id: 26,
        continent:'Africa',
        country:'Ethiopia',
        group:'main courses',
        name:'Injera',
        img: 'https://amarinjera.com/assets/img/hero-img.png'
    },
    {
        id: 27,
        continent:'Asia',
        country:'Vietnam',
        group:'main courses',
        name:'Pho',
        img: 'https://rolld.com.au/wp-content/uploads/2022/07/Sliced_Beef_Pho.png'
    },
    {
        id: 28,
        continent:'Europe',
        country:'Greece',
        group:'desserts',
        name:'Baklava',
        img: 'https://www.baklavaandpitebya.co.uk/wp-content/uploads/2021/04/baklava_woo2transparent.png'
    },
    {
        id: 29,
        continent:'Europe',
        country:'Ireland',
        group:'main courses',
        name:'Irish Stew',
        img: 'https://cdn.shopify.com/s/files/1/0085/1171/7440/t/2/assets/beef-stew-freeze-dried-food-aerial-1605207962503.png'
    },
    {
    id: 30,
    continent:'South America',
    country:'Argentina',
    group:'main courses',
    name:'Asado',
    img: 'https://yastatic.net/avatars/get-grocery-goods/2756334/cb796ad8-dd5f-4c6f-8569-82219fe6f163/750x500?webp=true'
    },
    {
        id: 31,
        continent: 'Asia',
        country: 'South Korea',
        group: 'main courses',
        name: 'Bibimbap',
        img: 'https://niedzielnykucharz.pl/wp-content/uploads/2021/05/5-Obiad%C3%B3w-za-10-z%C5%82-2021-05-18T223659.105-1.png'
    },
    {
        id: 32,
        continent: 'North America',
        country: 'Mexico',
        group: 'appetizers',
        name: 'Guacamole',
        img: 'https://blog.misfitsmarket.com/wp-content/uploads/2021/04/basic-guacamole-2021.png'
    },
    {
        id: 33,
        continent: 'Africa',
        country: 'Morocco',
        group: 'desserts',
        name: 'Baklava',
        img: 'https://www.imamcagdas.com/iyi-baklavanin-sesi-5-blog.png'
    },
    {
        id: 34,
        continent: 'Asia',
        country: 'Vietnam',
        group: 'desserts',
        name: 'Che Ba Mau',
        img: 'https://delitasty.nl/wp-content/uploads/2014/06/29-che-ba-mau.png'
    },
    {
        id: 35,
        continent: 'Europe',
        country: 'Spain',
        group: 'desserts',
        name: 'Churros',
        img: 'https://loschurroshermanos.ch/wp-content/uploads/2021/06/Untitled-3.png'
    },
    {
        id: 36,
        continent: 'North America',
        country: 'USA',
        group: 'desserts',
        name: 'Key Lime Pie',
        img: 'https://8e9d5b8b8dcb9208ef3f-01db2a53ae0368d03387780ee86ead55.ssl.cf2.rackcdn.com/0263624000000_CF_hyvee_default_large.png'
    },
    {
        id: 37,
        continent: 'Europe',
        country: 'Germany',
        group: 'main courses',
        name: 'Sauerbraten',
        img: 'https://hofmanns-shop.de/cdn/shop/products/zarter-sauerbraten_48108_1.png?v=1667739098&width=533'
    },
    {
        id: 38,
        continent: 'Asia',
        country: 'Indonesia',
        group: 'main courses',
        name: 'Nasi Goreng',
        img: 'https://www.klein-java.nl/wp-content/uploads/2020/12/klein-java-indisch-eten-breda-Rames-nasi-goreng.png'
    },
    {
        id: 39,
        continent: 'Europe',
        country: 'Italy',
        group: 'desserts',
        name: 'Tiramisu',
        img: 'https://kultowealkohole.pl/uploads/images/7g/604769f70c2f7.png'
    },
    {
        id: 40,
        continent: 'South America',
        country: 'Peru',
        group: 'main courses',
        name: 'Lomo Saltado',
        img: 'https://recreolagranjita.com/wp-content/uploads/2023/07/Carta-Extra_Lomo-Saltado.png'
      }
]
