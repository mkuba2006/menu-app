const food = [
    {
        id: 0,
        continent:'europe',
        country:'Italy',
        group:'main courses',
        name:'Pizza',
        img: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/pizza-sycylijska.jpg'
    },
    {
        id: 1,
        continent:'europe',
        country:'Turkey',
        group:'Fast Food',
        name:'Kebab',
        img: 'https://www.pyszne.pl/foodwiki/uploads/sites/7/2018/03/kebab-2.jpg'
    },
    {
        id: 2,
        continent:'europe',
        country:'Poland',
        group:'soups',
        name:'Żurek',
        img: 'https://szefpoleca.pl/wp-content/uploads/2022/10/tradycyjny-zurek-na-zakwasie-900x575.webp'
    },
    {
        id: 3,
        continent:'Asia',
        country:'Japan',
        group:'soups',
        name:'Ramen',
        img: 'https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/811/ramen.jpg'
    },
    {
        id: 4,
        continent:'europe',
        country:'Spain',
        group:'main courses',
        name:'Paella',
        img: 'https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/3085/paella-z-owocami-morza.jpg'
    },
    {
        id: 5,
        continent:'North America',
        country:'USA',
        group:'Fast Food',
        name:'Burger',
        img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-fCGi-H1PR-KYKb_amerykanski-burger-z-francuskim-sosem-jak-zrobic-664x442-nocrop.jpg'
    },
    {
        id: 6,
        continent:'europe',
        country:'Greec',
        group:'main courses',
        name:'Moussaka',
        img: 'https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/8557/moussaka.jpg'
    },
    {
        id: 7,
        continent:'europe',
        country:'Poland',
        group:'main courses',
        name:'Dumplings ',
        img: 'https://ychef.files.bbci.co.uk/976x549/p06vw6pp.jpg'
    },
    {
        id: 8,
        continent:'South America',
        country:'Wenezuela',
        group:'main courses',
        name:'Arepa',
        img: 'https://assets.aws.londynek.net/images/jdnews-lite/2719994/109423-201903041421-lg2.jpg.webp?t='
    },
    {
        id: 9,
        continent:'South America',
        country:'Chile',
        group:'main courses',
        name:'Curanto',
        img: 'https://st3.depositphotos.com/6052770/34644/i/600/depositphotos_346442220-stock-photo-famous-traditional-dish-of-the.jpg'
    },
    {
        id: 10,
        continent:'South America',
        country:'Brasil',
        group:'main courses',
        name:'Feijoada',
        img: 'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/43/feijoada.jpg'
    },
    {
        id: 11,
        continent: 'Africa',
        country: 'Ethiopia',
        group: 'main courses',
        name: 'Injera with Wot',
        img: 'https://live.staticflickr.com/65535/46978019654_dd344b3195_b.jpg'
      },
      {
        id: 12,
        continent: 'Asia',
        country: 'India',
        group: 'main courses',
        name: 'Butter Chicken',
        img: 'https://na-talerzu.pl/wp-content/uploads/2021/11/Butter-chicken-9867.jpg'
      },
      {
        id: 13,
        continent: 'South America',
        country: 'Peru',
        group: 'main courses',
        name: 'Ceviche',
        img: 'https://blix.pl/gotuj/wp-content/uploads/2018/11/ceviche-ryb-po-peruwia%C5%84sku.jpg'
      },
      {
        id: 14,
        continent: 'Europe',
        country: 'France',
        group: 'main courses',
        name: 'Boeuf Bourguignon',
        img: 'https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg'
      },
      {
        id: 15,
        continent: 'Asia',
        country: 'China',
        group: 'main courses',
        name: 'Kung Pao Chicken',
        img: 'https://leitesculinaria.com/wp-content/uploads/2020/06/kung-pao-chicken-fp.jpg'
      },
      {
        id: 16,
        continent:'europe',
        country:'Greece',
        group:'appetizers',
        name:'Tzatziki',
        img: 'https://zielonywagon.pl/wp-content/uploads/2021/11/sos-tzatziki.jpeg'
    },
    {
        id: 17,
        continent:'Africa',
        country:'Morocco',
        group:'main courses',
        name:'Tagine',
        img: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/warzywa-tagine-09485755921.jpg'
    },
    {
        id: 18,
        continent:'North America',
        country:'Mexico',
        group:'main courses',
        name:'Tacos al Pastor',
        img: 'https://www.culinaryhill.com/wp-content/uploads/2022/12/Tacos-al-Pastor-Culinary-Hill-1200x800-1.jpg'
    },
    {
        id: 19,
        continent:'Europe',
        country:'France',
        group:'desserts',
        name:'Crème brûlée',
        img: 'https://keto-mojo.com/wp-content/uploads/2020/03/Keto-Creme-Brulee.jpg'
    },
    {
        id: 20,
        continent:'Australia',
        country:'Australia',
        group:'main courses',
        name:'Fish and Chips',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/01/Next-level-fish-and-chips-f0ad0c4.jpg?resize=768,574'
    },
    {
        id: 21,
        continent:'Asia',
        country:'Thailand',
        group:'soups',
        name:'Tom Yum Goong',
        img: 'https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2021/03/Tom-Yum-07-mini.jpg?fit=1000%2C667&ssl=1'
    },
    {
        id: 22,
        continent:'Africa',
        country:'Nigeria',
        group:'main courses',
        name:'Jollof Rice',
        img: 'https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/08/12258-jollof-rice.jpg?v=1-0'
    },
    {
        id: 23,
        continent:'Australia',
        country:'Australia',
        group:'desserts',
        name:'Pavlova',
        img: 'https://akademiatortu.pl/wp-content/uploads/2021/10/Akademia_Tortu_Beza_Pavlova.png.webp'
    },
    {
        id: 24,
        continent:'Australia',
        country:'Australia',
        group:'main courses',
        name:'Meat Pie',
        img: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/mmie_1019_steakstoutpie_h.jpg?itok=5m_zNd7H'
    },
    {
        id: 25,
        continent:'Asia',
        country:'Thailand',
        group:'main courses',
        name:'Pad Thai',
        img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7DE647CE-2E09-4CBE-88EE-CFFCC70D7440/Derivates/F8CA1C89-596A-4EC0-9A63-6505DDBD528C.jpg'
    },
    {
        id: 26,
        continent:'Africa',
        country:'Ethiopia',
        group:'main courses',
        name:'Injera',
        img: 'https://images.squarespace-cdn.com/content/v1/5db48cdef991e52a49075819/1603835994712-FJ0150LEMHFG5AVC0099/Rolled+Injera.jpg?format=1000w'
    },
    {
        id: 27,
        continent:'Asia',
        country:'Vietnam',
        group:'main courses',
        name:'Pho',
        img: 'https://staticsmaker.iplsc.com/smaker_production_2022_02_14/a09cc7a3921861a28dfdc8eb884032b8-lg.jpg'
    },
    {
        id: 28,
        continent:'Europe',
        country:'Greece',
        group:'desserts',
        name:'Baklava',
        img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7C64C8C0-5802-4D57-A227-CCB7D8659B49/Derivates/bfce5898-2257-4061-8785-a37931d7f49a.jpg'
    },
    {
        id: 29,
        continent:'Europe',
        country:'Ireland',
        group:'main courses',
        name:'Irish Stew',
        img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/31C252BF-B464-487F-B715-CD5C50BC138D/Derivates/544aa073-9f68-488a-b226-02c1b38093ff.jpg'
    },
    {
    id: 9,
    continent:'South America',
    country:'Argentina',
    group:'main courses',
    name:'Asado',
    img: 'https://uploads-ssl.webflow.com/603e957e210fe9beee0dc084/603e957e210fe909a70dc0c4_Asado-Gaucho_Menu1.jpg'
    }
]
