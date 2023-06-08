import http from "http";

const host = "localhost";
const port = 4000;

const sportsCars = [
  "Ferrari 488 GTB",
  "Porsche 911 GT3",
  "Lamborghini Huracan Evo",
  "Audi R8",
  "Chevrolet Corvette",
  "BMW M3",
  "Fiat 126",
];

const getRandomCarHtml = () => {
  const randomIndex = Math.floor(Math.random() * sportsCars.length);
  const randomCar = sportsCars[randomIndex];
  const carHtml = ""; // CHANGE THIS SO THAT RANDOM CAR IS DISPLAYED IN A DIV (with changed font-size to 64px)

  return carHtml;
};

// TODO: create a node server which will be displaying a random car name HTML
