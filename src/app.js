/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function GetDomain(element) {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let webs = [".com", ".it", ".es"];
  let pro = [];
  let adj = [];
  let noun = [];
  let web = [];

  for (let i = 0; i < pronouns.length; i++) {
    pro = pronouns[i];

    for (let j = 0; j < adjs.length; j++) {
      adj = adjs[j];

      for (let x = 0; x < nouns.length; x++) {
        noun = nouns[x];

        for (let y = 0; y < webs.length; y++) {
          web = webs[y];

          console.log(pro + adj + noun + web);
        }
      }
    }
  }
};
