/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dot = [".com", ".net"];
  let coun = [".us", ".es"];

  let domain = [];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < dot.length; d++) {
          for (let c = 0; c < coun.length; c++) {
            domain.push(pronoun[p] + adj[a] + noun[n] + dot[d] + coun[c]);
          }
        }
      }
    }
  }
  document.querySelector("#domain").innerHTML = domain.join("\r");
};
