import express from "express";

const cars = {};

const app = express();

app.use(express.json());

app.get("/cars", (req, res) => {
  res.json({ cars });
});

app.post("/cars", (req, res) => {
  const newCar = req.body.car;

  const carId = Date.now();
  cars[carId] = newCar;

  res.json({ message: `Car with id ${carId} created!` });
});

app.delete("/cars", (req, res) => {
  const carId = req.body.id;

  delete cars[carId];

  res.json({ message: `Car with id ${carId} deleted!` });
});

app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});
