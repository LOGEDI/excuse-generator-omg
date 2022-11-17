/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#then.excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["driver", "dog", "roocon", "footballer", "commedian"];
  let action = ["took my", "ate my", "ride my", "stole my", "yelled at"];
  let possesion = ["homework", "toe", "shoes", "car", "book"];
  let where = [
    "on my street",
    "in my room",
    "at my drive way",
    "im my book",
    "at my office"
  ];

  let proIndex = math.floor(math.random() * pronoun.length);
  let subjIndex = math.floor(math.random() * subject.length);
  let actionIndex = math.floor(math.random() * action.length);
  let possesionIndex = math.floor(math.random() * possesion.length);
  let whereIndex = math.floor(math.random() * where.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subjIndex] +
    "" +
    actionIndex[actionIndex] +
    "" +
    possesion[possesionIndex] +
    "" +
    where[whereIndex]
  );
};
