/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainGen();
  });
};
let domainGen = () => {
  let who = ["bear", "mom", "dad", "wife"];
  let action = ["chased", "attacked", "ripped", "ate"];
  let what = ["homework", "project", "test", "report"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]}`;
};
