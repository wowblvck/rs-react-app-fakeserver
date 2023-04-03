import PlacesInfo from "./places.interface";

const places: PlacesInfo[] = [
  {
    id: 1,
    country: "Turkey",
    location: "Hagia Sophia",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEGsnBieihtSMKyNpTeFErn1ubvvK75frVo_j0kWmttwu5JBAR6bwd3LyLukPdnVqxaGuhPRSaS1iIo5vgYWhgPA",
    description: "Famed Byzantine mosque with a dome",
    date: "2023-03-13",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
      first_name: "Tracie",
      last_name: "Colebrook",
    },
  },
  {
    id: 2,
    country: "Turkey",
    location: "The Blue Mosque",
    category: "Architecture",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIc_Uh1zFVagmGzvJ5ayZHmMjZejF9dowRQdJSk8-Ov7dZrS6YgQFXQCh74sy8xed_pXZSsNGS1tXM4zAoNOKawA",
    description: "Iconic Blue Mosque with 6 minarets",
    date: "2022-10-11",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
      first_name: "Buckminster",
      last_name: "Leblanc",
    },
  },
  {
    id: 3,
    country: "Russia",
    location: "State Hermitage Museum",
    category: "Architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8X7cXH21WYx5xI8FD_7P2ZJKMH4IPe3_pVpu8yn6VPlyTSS6jKV6o7q4-W73Wd7_sOTgRTaB4EsE6svglsRZDQ",
    description: "Art & culture museum founded in 1764",
    date: "2023-03-14",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/29.jpg",
      first_name: "Phelan",
      last_name: "Blackburn",
    },
  },
  {
    id: 4,
    country: "Russia",
    location: "Red Square",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8gA4gYjbZBXQbn1h2aHTuCXdZNL8Cxd7hhMHz9Rwt8hn8hSBldk2C8tqxoA0LYjR83_syEmHCEZkLlw2GaUd6_A",
    description: "Iconic square with St. Basil's cathedral",
    date: "2017-08-05",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/52.jpg",
      first_name: "Maisie",
      last_name: "Dudley",
    },
  },
  {
    id: 5,
    country: "Switzerland",
    location: "Chillon Castle",
    category: "Architecture",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6h8EMLDzIXvQhsmGhb_lIA2zh9J9sRp3kZb_5VJ4ogfymMythhebc01av2UGZrMidCK_gqNFzuwd3zP0vEygkNg",
    description: "Lakeside castle & cultural center",
    date: "2015-04-18",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/65.jpg",
      first_name: "Marvin",
      last_name: "Vance",
    },
  },
  {
    id: 6,
    country: "Thailand",
    location: "The Grand Palace",
    category: "Architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-W1e7iyUkteKjzl4yqSdPRmzyqRceWg7QmNKJ3HyXAwR-CnM1fVlr1T5T08Yf5waJDoUNbhZTKjJlvpSad4EsnA",
    description: "Opulent former royal residence & museum",
    date: "2016-05-18",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/64.jpg",
      first_name: "Katelyn",
      last_name: "Rodriguez",
    },
  },
  {
    id: 7,
    country: "France",
    location: "Eiffel Tower",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvnB0dD_MCmdoIGVGsC5tJdMxu5hjKag-mVuc8ZcbcBsJO0Yr-EtxTIU5Md9h3qoFaynWEh-qz4iuOwAbP_f7_7A",
    description: "Landmark 330m-high 19th-century tower",
    date: "2020-10-19",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
      first_name: "Evangeline",
      last_name: "Wheeler",
    },
  },
  {
    id: 8,
    country: "Ukraine",
    location: "Kiev Pechersk Lavra",
    category: "Architecture",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRzPncDCPTP0Liuc5Qtoq8Rmk-yd3JiQraowFhnyjO7PAnB-AehZP1p1rhlCKcs7SoznEWeuSyHsmmSJgIK0XDiQw",
    description: "Landmark monastery & cave system",
    date: "2017-07-09",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
      first_name: "Evangeline",
      last_name: "Wheeler",
    },
  },
  {
    id: 9,
    country: "Kazakhstan",
    location: "Baiterek",
    category: "Architecture",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxChJQaMc7Ndoxm5_cq38xPbFONLYCNxeEydgRliISVMDPBilXyH3KyA6ZxvcwB-i_HrcdIFe14ofPNrpb6QEvYg",
    description: "Iconic viewing tower & monument",
    date: "2013-11-28",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
      first_name: "Rafael",
      last_name: "Solomon",
    },
  },
  {
    id: 10,
    country: "Australia",
    location: "Sydney Opera House",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhFDpQMX6wrLn0Nedf5k7k9tLB6eBaztgmBx7XYDose0pDv7lAfCTvb988suo_YKHgT4WXS5MvadTfMHlLDmsAhg",
    description: "Australia's iconic performing arts venue",
    date: "2010-02-12",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/63.jpg",
      first_name: "Nola",
      last_name: "Perry",
    },
  },
];

export default places;