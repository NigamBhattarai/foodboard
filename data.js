const data = {
  categories: [
    {
      id: 1,
      name: "Bread",
      foodCount: 4,
      status: "active",
    },
    {
      id: 2,
      name: "Curry",
      foodCount: 4,
      status: "inactive",
    },
    {
      id: 3,
      name: "Appetizers",
      foodCount: 10,
      status: "active",
    },
    {
      id: 4,
      name: "Fastfood",
      foodCount: 11,
      status: "inactive",
    },
    {
      id: 5,
      name: "Drinks",
      foodCount: 9,
      status: "active",
    },
  ],orders:[
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
      ],
    },
    {
      id: 2,
      token_number: "#4383",
      ordered_time: "23 Feb 2022,8:26PM",
      status: "served",
      grand_total: 3000,
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
  ]
};

module.exports= data;