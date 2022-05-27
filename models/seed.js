const bcrypt = require("bcryptjs");
const UserType = require("./usertype.model");
const User = require("./user.model");
const DiscountCoupon = require("./discountCoupon.model");
const CouponDetail = require("./couponDetail.model");
const Category = require("./category.model");
const Food = require("./food.model");
const Variant = require("./variant.model");
const AddOn = require("./addon.model");
const Order = require("./order.model");
const OrderDetail = require("./orderDetail.model");
const Package = require("./package.model");
var Database = require("../config/db.config");
var db = Database._connect;

const data = {
  usertype: [
    {
      _id: "5d725a4a7b292f5f8ceff789",
      alias: "admin",
    },
    {
      alias: "manager",
    },
    {
      alias: "kitchen",
    },
    {
      alias: "waiter",
    },
    {
      alias: "counter",
    },
  ],
  user: [
    {
      _id: "5d7a514b5d2c12c7449be045",
      firstname: "Admin",
      lastname: "User",
      username: "admin",
      email: "inigambhattarai@gmail.com",
      mobile: "9846065409",
      profile_image: "/images/user.png",
      password: bcrypt.hashSync("Fo0dBo@rd"),
      lastlogin: Date.now(),
      counter: 0,
      status: true,
      usertype: "5d725a4a7b292f5f8ceff789",
    },
  ],
  discount_coupon: [
    {
      _id: "626e3c093a187a74d58e2ff6",
      name: "Summer",
      valid_till: "",
      description: "For Summer",
      isFixed: false,
      value: 7,
      minOrder: 400,
      max_users: null,
      createdAt: new Date(),
      startedAt: new Date().setFullYear(2022, 5, 6),
      updatedAt: new Date(),
    },
    {
      _id: "626e3c4312912f10bb4bde8a",
      name: "Winter",
      valid_till: "",
      description: "For Winter",
      isFixed: true,
      value: 200,
      minOrder: 800,
      max_users: null,
      createdAt: new Date(),
      startedAt: new Date().setFullYear(2022, 11, 1),
      updatedAt: new Date(),
    },
    {
      _id: "626e3c52f20ec999072a49e7",
      name: "All time",
      valid_till: "",
      description: "Our Specials",
      isFixed: false,
      value: 5,
      minOrder: null,
      max_users: 30,
      createdAt: new Date(),
      startedAt: new Date().setFullYear(2022, 5, 1),
      updatedAt: new Date(),
    },
  ],
  coupon_detail: [
    {
      _id: "626e3c5fc7088688f83d6362",
      discount_code: "WNTRRN78",
      maxCount: 65,
      count: 0,
      usedDates: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      discount_coupon: "626e3c4312912f10bb4bde8a",
    },
    {
      _id: "626e3c6a2f5e3ce74bfee1b3",
      discount_code: "SPCL7642",
      maxCount: null,
      count: 0,
      usedDates: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      discount_coupon: "626e3c52f20ec999072a49e7",
    },
    {
      _id: "626e3c75ab48a6ea06fe995e",
      discount_code: "WNTR62R7",
      maxCount: 35,
      count: 0,
      usedDates: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      discount_coupon: "626e3c4312912f10bb4bde8a",
    },
    {
      _id: "626e3c7f7c76d7861e202676",
      discount_code: "SMMRCFLK",
      maxCount: 80,
      count: 1,
      usedDates: [new Date().setFullYear(2022, 5, 1)],
      createdAt: new Date(),
      updatedAt: new Date(),
      discount_coupon: "626e3c093a187a74d58e2ff6",
    },
    {
      _id: "626e3c9d94832b24bf46c37b",
      discount_code: "SMMRFN62",
      maxCount: 80,
      count: 0,
      usedDates: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      discount_coupon: "626e3c093a187a74d58e2ff6",
    },
    {
      _id: "626e3ca712cbb85cb2a97d77",
      discount_code: "WNTRJK2B",
      maxCount: 50,
      count: 0,
      usedDates: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      discount_coupon: "626e3c4312912f10bb4bde8a",
    },
  ],
  category: [
    {
      _id: "627091aee718b5308cf1a1b9",
      name: "Fast Food",
      image:
        "https://images.theconversation.com/files/440609/original/file-20220113-25-gp1b39.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "6270922ed6f8ec0b1452e96f",
      name: "Beverages",
      image:
        "https://www.schlotzskys.com/-/media/schlotzskys/menu/beverages/coke-products_874x440.jpg?v=1&d=20210630T085825Z",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "62709231de6b70b3a3bb8827",
      name: "Beverages ( Alcoholic )",
      image:
        "https://hmhelp.in/blog/wp-content/uploads/2020/04/66049893_ml.jpg",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "62709239f92396d252afe17c",
      name: "Continental",
      image:
        "https://i0.wp.com/menuprices.pk/wp-content/uploads/2021/03/What-Dishes-Come-In-Continental-Food.png?ssl=1",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "6270923e7817067af6394e33",
      name: "European",
      image:
        "https://image.shutterstock.com/image-photo/food-set-european-cuisine-pizza-260nw-1173866344.jpg",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  food: [
    {
      _id: "6270954e96bcfe5816b00a12",
      name: "Chicken Momo",
      code: "CKNMOMO",
      desc: "1 plate chicken momo with various variants",
      veg: false,
      image: "https://static.toiimg.com/photo/60275824.cms",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "627091aee718b5308cf1a1b9",
    },
    {
      _id: "627095569baa97c06fd920e4",
      name: "Old Durbar",
      code: "OLDDBR",
      desc: "Old Durbar Whiskey",
      veg: true,
      image:
        "https://expresssaga.com/wp-content/uploads/2020/08/old-durbar-750ml.jpg",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "62709231de6b70b3a3bb8827",
    },
    {
      _id: "6270955b369ccab46981842b",
      name: "Coke",
      code: "COKE",
      desc: "Coca-Cola",
      veg: true,
      image:
        "https://images.heb.com/is/image/HEBGrocery/000145537?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "6270922ed6f8ec0b1452e96f",
    },
    {
      _id: "62709560c536cf674c0cb54b",
      name: "Fanta",
      code: "FANTA",
      desc: "Fanta",
      veg: true,
      image:
        "https://cheers.com.np/uploads/products/38541399854568881481271981597874869447776.png",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "6270922ed6f8ec0b1452e96f",
    },
    {
      _id: "6270956684e6183dfc00f1bb",
      name: "Roast Chicken",
      code: "RSTCKN",
      desc: "Roasted Chicken (Deep fried)",
      veg: false,
      image:
        "https://img.taste.com.au/WJIakxwV/taste/2016/11/portuguese-style-roast-chicken-pieces-87814-1.jpeg",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "62709239f92396d252afe17c",
    },
    {
      _id: "6270956ebbfc4a49aeebcf7c",
      name: "Chicken Sizzler",
      code: "CKNSZLR",
      desc: "Chicken Sizzler palate",
      veg: false,
      image: "https://i.ytimg.com/vi/5wCwJWpO9LE/maxresdefault.jpg",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "62709239f92396d252afe17c",
    },
    {
      _id: "62709573e183120feb31460f",
      name: "Greek Salad",
      code: "GRKSLD",
      desc: "Ingredients: Cheese, Feta, Tomato, Olive, Cucumber, Olive Oil, Lemon, Bell Pepper, Salt, Kalamata olive, Red Onion, Black Pepper, Red wine Vinegar, English Cucumber",
      veg: true,
      image:
        "https://img.taste.com.au/HfYVip4L/w1200-h630-cfill/taste/2016/11/greek-salad-3814-1.jpeg",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "6270923e7817067af6394e33",
    },
    {
      _id: "62709578df8c98c97e754365",
      name: "Oysters",
      code: "OYSTR",
      desc: "Oysters with tomato sauce, mayonnaise, oyster sauce",
      veg: false,
      image:
        "https://static01.nyt.com/images/2021/12/22/dining/17oysters1/merlin_199179588_01080aa2-1b35-43cb-94e3-d0e28c288b2d-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "6270923e7817067af6394e33",
    },
  ],
  variant: [
    {
      _id: "6270a079fbffced1dd75a5a0",
      name: "Jhol",
      price: 120,
      default: true,
      sourLevel: 1,
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/10/0/DV2802_Nepali-Momo_s4x3.jpg.rend.hgtvcom.616.462.suffix/1515644556794.jpeg",
      desc: "Momo and soup with 10 pieces",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270954e96bcfe5816b00a12",
    },
    {
      _id: "6270a08535e93ce914a77999",
      name: "C",
      price: 180,
      default: false,
      sourLevel: 3,
      image:
        "https://fililiconnect.com/uploads/food/2021-01-11-09-02-09-Chicken-C.Momo.jpg",
      desc: "C Momo with 9 pieces",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270954e96bcfe5816b00a12",
    },
    {
      _id: "6270a08c96823dd0f6af3119",
      name: "60ml",
      price: 200,
      default: true,
      sourLevel: null,
      image:
        "https://qph.fs.quoracdn.net/main-qimg-8fc5653349f64eac0a31babed1b05981.webp",
      desc: "60ml Old Durbar Whiskey",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "627095569baa97c06fd920e4",
    },
    {
      _id: "6270a095d175ea0182c222f5",
      name: "90ml",
      price: 300,
      default: false,
      sourLevel: null,
      image: "https://m.media-amazon.com/images/I/61vIp7-4fsL._SX569_.jpg",
      desc: "90ml Old Durbar Whiskey",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "627095569baa97c06fd920e4",
    },
    {
      _id: "6270a09a1b968e91fac75361",
      name: "With oats",
      price: 320,
      default: true,
      sourLevel: 2,
      image: "https://s3.amazonaws.com/yummy_uploads2/recipes/full/5.jpg",
      desc: "Roasted chicken deep fried with oats",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270956684e6183dfc00f1bb",
    },
    {
      _id: "6270a0a043e1f60e8b41b093",
      name: "Small",
      price: 60,
      default: true,
      sourLevel: null,
      image:
        "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_CokeClassic.png",
      desc: "Small coke 100ml",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270955b369ccab46981842b",
    },
    {
      _id: "6270a0a611462f5679ce333c",
      name: "Medium",
      default: false,
      price: 100,
      sourLevel: null,
      image:
        "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_CokeClassic.png",
      desc: "Medium coke 150ml",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270955b369ccab46981842b",
    },
    {
      _id: "6270a0ac895311106a7af82a",
      name: "Large",
      price: 130,
      default: false,
      sourLevel: null,
      image:
        "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_CokeClassic.png",
      desc: "Small coke 250ml",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270955b369ccab46981842b",
    },
    {
      _id: "6270acacbe1a91ba8022275b",
      name: "Small",
      price: 60,
      default: true,
      sourLevel: null,
      image:
        "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero-pdt-Fanta-201703_0.png",
      desc: "Small fanta 100ml",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "62709560c536cf674c0cb54b",
    },
    {
      _id: "6270acb10368780e64c6db04",
      name: "Medium",
      price: 100,
      default: false,
      sourLevel: null,
      image:
        "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero-pdt-Fanta-201703_0.png",
      desc: "Medium fanta 150ml",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "62709560c536cf674c0cb54b",
    },
    {
      _id: "6270acb6113861cce8603900",
      name: "Large",
      price: 130,
      default: false,
      sourLevel: null,
      image:
        "https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero-pdt-Fanta-201703_0.png",
      desc: "Small fanta 250ml",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "62709560c536cf674c0cb54b",
    },
    {
      _id: "6270a0c47a26c94c5f0bc67c",
      name: "Default",
      price: 320,
      default: true,
      sourLevel: 3,
      image: "https://i.ytimg.com/vi/5wCwJWpO9LE/maxresdefault.jpg",
      desc: "Ingredients: chicken breasts, garlic, rice, black pepper",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "6270956ebbfc4a49aeebcf7c",
    },
    {
      _id: "6270a0c9b828faf3a19bb8ac",
      name: "Default",
      price: 200,
      default: true,
      sourLevel: 2,
      image:
        "https://img.taste.com.au/HfYVip4L/w1200-h630-cfill/taste/2016/11/greek-salad-3814-1.jpeg",
      desc: "Ingredients: Cheese, Feta, Tomato, Olive, Cucumber, Olive Oil, Lemon, Bell Pepper, Salt, Kalamata olive, Red Onion, Black Pepper, Red wine Vinegar, English Cucumber",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "62709573e183120feb31460f",
    },
    {
      _id: "6270a0cf82bfbd85e27a9da1",
      name: "Default",
      price: 550,
      default: true,
      sourLevel: 2,
      image:
        "https://static01.nyt.com/images/2021/12/22/dining/17oysters1/merlin_199179588_01080aa2-1b35-43cb-94e3-d0e28c288b2d-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      desc: "Oysters with tomato sauce, mayonnaise, oyster sauce",
      createdAt: new Date(),
      updatedAt: new Date(),
      food: "62709578df8c98c97e754365",
    },
  ],
  addon: [
    {
      _id: "6270a53f2502726e0699bf48",
      name: "extra jhol",
      image:
        "https://quikrfood.com/uploads/products/thumbnail/5e19b023613f7.jpg",
      price: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
      variant: "6270a079fbffced1dd75a5a0",
    },
    {
      _id: "6270a54435dc0b6456694138",
      name: "with cheese",
      image:
        "https://pediaa.com/wp-content/uploads/2022/01/Shredded-Cheese.jpg",
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
      variant: "6270a09a1b968e91fac75361",
    },
    {
      _id: "6270a54728770a7264a00f3e",
      name: "black pepper",
      image:
        "https://facilcompra.net/wp-content/uploads/2020/05/BLACK-PEPPER-POWDER_92efaf0f-ca27-4ac7-8159-22dd665e45a5.jpg",
      price: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      variant: "6270a09a1b968e91fac75361",
    },
  ],
  order: [
    {
      _id: "6270a7420a680114f640099a",
      token_number: "246",
      customer_name: "Customer 1",
      ordered_time: new Date("May 1, 2022 12:12:36"),
      status: 0, //statuses: 0: pending, 1: preparing, 2: served, 3: canceled, 4: ready
      completed_time: null,
      payment: true,
      payment_method: "cash",
      total: 340,
      grand_total: 340,
      coupon_applied: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "6270a7463e27b954d2129710",
      token_number: "247",
      customer_name: "Customer 2",
      ordered_time: new Date("May 1, 2022 12:18:20"),
      status: 1, //statuses: 0: pending, 1: preparing, 2: served, 3: canceled, 4: ready
      completed_time: null,
      payment: true,
      payment_method: "card",
      total: 1020,
      grand_total: 948,
      coupon_applied: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      coupon_details: "626e3c7f7c76d7861e202676",
    },
  ],
  order_detail: [
    {
      _id: "6270a932abeb61e798eb845d",
      addon: true,
      addons: ["6270a53f2502726e0699bf48"],
      final_price: 140,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: "6270a7420a680114f640099a",
      variant: "6270a079fbffced1dd75a5a0",
    },
    {
      _id: "6270a936306421ecd5d3ce06",
      addon: false,
      addons: [],
      final_price: 200,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: "6270a7420a680114f640099a",
      variant: "6270a08c96823dd0f6af3119",
    },
    {
      _id: "6270a93d8058338b8d6f52ec",
      addon: false,
      addons: [],
      final_price: 320,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: "6270a7463e27b954d2129710",
      variant: "6270a09a1b968e91fac75361",
    },
    {
      _id: "6270a94d83e0d0ccd22d5cf7",
      addon: false,
      addons: [],
      final_price: 300,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: "6270a7463e27b954d2129710",
      variant: "6270a095d175ea0182c222f5",
    },
    {
      _id: "6270a953bff3c6e3eb9463ce",
      addon: false,
      addons: [],
      final_price: 400,
      qty: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: "6270a7463e27b954d2129710",
      variant: "6270a08c96823dd0f6af3119",
    },
  ],
  package: [
    {
      _id: "6270aaaa6b39bd06f6d97011",
      name: "Jado Dhamaal",
      variants: [
        "6270a079fbffced1dd75a5a0",
        "6270a079fbffced1dd75a5a0",
        "6270a0a611462f5679ce333c",
        "6270a0a611462f5679ce333c",
      ],
      image: "https://pokharabazar.com/wp-content/uploads/2020/03/momo-1.jpg",
      price: 400,
      money_saved: 40,
      last_date: new Date().setFullYear(2022, 06, 20),
    },
  ],
};

UserType.remove({});
User.remove({});
DiscountCoupon.remove({});
CouponDetail.remove({});
Category.remove({});
Food.remove({});
Variant.remove({});
AddOn.remove({});
Order.remove({});
OrderDetail.remove({});
Package.remove({});

UserType.insertMany(data.usertype);
User.insertMany(data.user);
DiscountCoupon.insertMany(data.discount_coupon);
CouponDetail.insertMany(data.coupon_detail);
Category.insertMany(data.category);
Food.insertMany(data.food);
Variant.insertMany(data.variant);
AddOn.insertMany(data.addon);
Order.insertMany(data.order);
OrderDetail.insertMany(data.order_detail);
Package.insertMany(data.package);
