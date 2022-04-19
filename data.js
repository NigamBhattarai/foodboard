const bcrypt = require("bcryptjs");
const data = {
  users: [
    {
      firstname: "anmol",
      lastname: "pradhan",
      email: "anamol@gmail.com",
      mobile: "9846075945",
      profile_img: "profile_img.jpg",
      password: bcrypt.hashSync("123456"),
    },
  ],
  categories: [
    {
      //id: 1,
      name: "Bread",
      foodCount: 4,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      status: "active",
    },
    {
      //id: 2,
      name: "Curry",
      foodCount: 4,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      status: "inactive",
    },
    {
      //id: 3,
      name: "Appetizers",
      foodCount: 10,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      status: "active",
    },
    {
      //id: 4,
      name: "Fastfood",
      foodCount: 11,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      status: "inactive",
    },
    {
      //id: 5,
      name: "Drinks",
      foodCount: 9,
      image:
        "https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_JholMoMoVegSoup.jpg",
      status: "active",
    },
  ],
  orders: [
    {
      id: 1,
      token_number: "#4383",
      ordered_time: "23 Feb 2022,8:26PM",
      status: "pending",
      grand_total: 3000,
      foodItems: [
        {
          id: 1,
          foodName: "momo",
          addOns: ["extra jhol", "extra achar"],
          final_price: 3000,
          qty: 3,
          status: "pending",
        },
        {
          id: 2,
          foodName: "chowmien",
          addOns: ["extra jhol", "extra achar"],
          final_price: 3000,
          qty: 3,
          status: "pending",
        },
        {
          id: 3,
          foodName: "chowmien",
          addOns: ["extra jhol", "extra achar"],
          final_price: 3000,
          qty: 3,
          status: "pending",
        },
      ],
    },
    {
      id: 2,
      token_number: "#4381",
      ordered_time: "22 Feb 2022,8:26PM",
      status: "served",
      grand_total: 1000,
      foodItems: [
        {
          id: 1,
          foodName: "Naan",
          addOns: ["extra jhol", "extra achar"],
          final_price: 3000,
          qty: 3,
          status: "pending",
        },
        {
          id: 2,
          foodName: "Chicken Curry",
          addOns: ["extra jhol", "extra achar"],
          final_price: 3000,
          qty: 3,
          status: "pending",
        },
      ],
    },
  ],
};

module.exports = data;
