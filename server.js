const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Handmade Wooden Lamp",
    seller: "John Doe",
    contact: "123-456-7890",
    location: "123 Main St, Anytown, USA",
    price: "$25.99",
  },
  {
    id: 2,
    name: "Vintage Metal Clock",
    seller: "Jane Smith",
    contact: "987-654-3210",
    location: "456 Elm St, Anytown, USA",
    price: "$15.99",
  },
  {
    id: 3,
    name: "Handmade Leather Journal",
    seller: "Bob Johnson",
    contact: "555-555-5555",
    location: "789 Oak St, Anytown, USA",
    price: "$19.99",
  },
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/search", (req, res) => {
  const query = req.query.q;
  const results = products.filter((p) => p.name.toLowerCase().includes(query));
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
