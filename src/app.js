/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#domain").innerHTML = GetDomain();
  console.log("Any strings");
};

function GetDomain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let web = [".com", ".it", ".es"];

  let proAle = Math.floor(Math.random() * pronoun.length);
  let adjAle = Math.floor(Math.random() * adj.length);
  let nouAle = Math.floor(Math.random() * noun.length);
  let webAle = Math.floor(Math.random() * web.length);
  let finale = [];
  finale.push(proAle, adjAle, nouAle, webAle);

  return finale;
  //for (i = 0; i < pronoun.length; i++) {
  //finale.push(Math.floor(Math.random() * pronoun.length));
  //}
  //for (j = 0; i < adj.length; i++) {
  //finale.push(Math.floor(Math.random() * adj.length));
  //}
  //for (x = 0; x < noun.length; x++) {
  //finale.push(Math.floor(Math.random() * noun.length));
  //}
  // for (y = 0; y < web.length; y++) {
  // finale.push(Math.floor(Math.random() * web.length));
  //}
  //return finale;
}

//console.log(finale);
