import { StaticImageData } from "next/image";

import spicyJollofRice from "./images/spicyJollofRice.png";
import edikaikongSoup from "./images/edikaikongSoup.png";
import ofadaStew from "./images/ofadaStew.png";
import pepperedJollofRice from "./images/pepperedJollofRice.png";
import efoRiro from "./images/efoRiro.png";
import ofeOha from "./images/ofeOha.png";

type Meal = {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
};

export const meals: Meal[] = [
  {
    name: "Spicy jollof rice",
    price: 100000,
    image: spicyJollofRice,
    id: 1,
  },
  {
    name: "Edikaikong soup",
    price: 100000,
    image: edikaikongSoup,
    id: 2,
  },
  {
    name: "Ofada stew",
    price: 100000,
    image: ofadaStew,
    id: 3,
  },
  {
    name: "Spicy jollof rice",
    price: 100000,
    image: pepperedJollofRice,
    id: 4,
  },
  {
    name: "Spicy jollof rice",
    price: 100000,
    image: efoRiro,
    id: 5,
  },
  {
    name: "Spicy jollof rice",
    price: 100000,
    image: ofeOha,
    id: 6,
  },
];
