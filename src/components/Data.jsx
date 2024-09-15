    
export const products = [
    {
      id: 1,
      imgURL: "/productImg1.webp",
      hoverImgURL: "/hoverImg1.webp",
      extraImg:"/productExta1.webp",
      title: "Blueberry Muffin",
      mrp: "Rs. 119.00",
      price: 99.00,
      color:'linear-gradient(#71b1ea, #104993)',
      size: "Pack of 6"
    },
    {
      id: 2,
      imgURL: "/productImg2.webp",
      hoverImgURL: "/hoverImg2.webp",
      extraImg:"/productExtra2.webp",
      title: "Banana & Peanut Butter",
      mrp: "Rs. 119.00",
      price: 99.00,
      special:"PaddingStylesForhandling",
      color:'linear-gradient(#e1e345, #c7b157)',
      size: "Pack of 6"
    },
    {
      id: 3,
      imgURL: "/productImg3.webp",
      hoverImgURL: "/hoverImg3.webp",
      extraImg:"/productExtra3.webp",
      title: "Chocolate & Cinnamon",
      mrp: "Rs. 119.00",
      price: 99.00,
      special:"PaddingStylesForhandling",
      color:'linear-gradient(#ce8c3e, #733b0e)',
      size: "Pack of 6"
    },
    {
      id: 4,
      imgURL: "/Straw.png",
      hoverImgURL: "/Straw.png",
      extraImg:"/Straw.png",
      title: "Strawberry Muffin",
      mrp: "Rs. 119.00",
      price: 99.00,
      color:'linear-gradient(#da5429, #f3a06b)',
      size: "Pack of 6"
    },
    // {
    //   id: 5,
    //   imgURL: "/banana1.webp",
    //   hoverImgURL: "/banana2.webp",
    //   extraImg:"/banana3.webp",
    //   title: "Peanut Butter & Banana",
    //   mrp: "Rs. 119.00",
    //   price: 99.00,
    // size: "Pack of 6"
    // }
  ]

  export const categories = [
    {
      imageUrl: "/ExploreImg1.webp",
      value: "Shop All",
      urlLink: "/product/1"
    },
    {
      imageUrl: "/ExploreImg2.webp",
      value: "C.Y.O.C: Choose What You Crave",
      urlLink: "/cyoc"
    },
    {
      imageUrl: "/ExploreImg3.webp",
      value:  "Giftings",
      urlLink: "/gifting"
    },
    {
      imageUrl: "/ExploreImg4.webp",
      value: "Track your Order",
      urlLink: "/track"
    },
  ];


    
  export const suggestedProducts = [
    {
      id: 1,
      imgURL: "/productImg1.webp",
      hoverImgURL: "/hoverImg1.webp",
      extraImg:"/productExta1.webp",
      title: "More than Oats: Blueberry Muffin",
      mrp: "Rs. 119.00",
      price: 99.00,
      size: "Pack of 6"
    },
    {
      id: 2,
      imgURL: "/productImg2.webp",
      hoverImgURL: "/hoverImg2.webp",
      extraImg:"/productExtra2.webp",
      title: "More than Oats: Caffè Mocha",
      mrp: "Rs. 119.00",
      price: 99.00,
      size: "Pack of 6"
    },
    {
      id: 3,
      imgURL: "/productImg3.webp",
      hoverImgURL: "/hoverImg3.webp",
      extraImg:"/productExtra3.webp",
      title: "More than Oats: Chocolate & Cinnamon",
      mrp: "Rs. 119.00",
      price: 99.00,
      size: "Pack of 6"
    },
    {
      id: 4,
      imgURL: "/productImg4.webp",
      hoverImgURL: "/hoverImg4.webp",
      extraImg:"/productExtra4.webp",
      title: "More than Oats: Strawberry Muffin",
      mrp: "Rs. 119.00",
      price: 99.00,
      size: "Pack of 6"
    },
    {
      id: 5,
      imgURL: "/banana1.webp",
      hoverImgURL: "/banana2.webp",
      extraImg:"/banana3.webp",
      title: "Peanut Butter & Banana",
      mrp: "Rs. 119.00",
      price: 99.00,
      size: "Pack of 6"
    },

  ]


export const customProducts = [
  {id: 1, flavour: 'Caffè Mocha',short:"CM", bgColor: "#db9e85", buttonColor: "#702d1a", quantity: 0},
  {id: 2, flavour: 'Blueberry Muffin', short:"BM", bgColor: "#a8d6fd", buttonColor: "#032047", quantity: 0},
  {id: 3, flavour: 'Chocolate & Cinnamon', short:"CC", bgColor: "#c6a855", buttonColor: "#7e411c", quantity: 0},
  {id: 4, flavour: 'Strawberry Muffin', short:"SM", bgColor: "#fdd5ff", buttonColor: "#7b0f45", quantity: 0},
  {id: 5, flavour: 'Peanut Butter & Banana', short:"PBB", bgColor: "#dfe660", buttonColor: "#d8c327", quantity: 0}
]


export const cyocItem = [{
  id: 6,
  imgURL: "/ExploreImg2.webp",
  title: `Customised Product` ,
  mrp: "Rs. 119.00",
  price: 99.00,
  size: "Pack of 6",
  items: [],
},
]


export const suggestions = [
  {id:1,text:"Track Your Order",urlLink:"/track"},
  {id:2,text:"Shop All",urlLink:"/product/1"},
  {id:3,text:"Giftings x",urlLink:"/gifting"},
  {id:4,text:"C.Y.O.C: Choose What You Crave",urlLink:"/cyoc"},
  {id:5,text:"",urlLink:"/track"},
  {id:6,text:"Caffè Mocha",urlLink:"/cyoc"},
  {id:7,text:"Blueberry Muffin",urlLink:"/cyoc"},
  {id:8,text:"Chocolate  Cinnamon",urlLink:"/cyoc"},
  {id:9,text:"Strawberry Muffin",urlLink:"/cyoc"},
  {id:10,text:"Peanut Butter  Banana",urlLink:"/cyoc"},
]

export const pages = [
  {id:1,text:"About us", urlLink:"/about"}
]