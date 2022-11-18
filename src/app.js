/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "dog", "raocon", "driver", "picone"];
  let action = ["took my", "threw away", "ride my bike"];
  let possesion = ["homework", "shoes", "car", "book"];
  let where = ["in my room", "on the streat", "at my office"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    "  " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
};
console.log(generateExcuse());

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#then_excuse").innerHTML = generateExcuse();
  });
};
