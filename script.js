"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp is running");
  const groudon = await getPokémon("data/pokémon.json");
  viewPokémon(groudon);
}

async function getPokémon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function viewPokémon(pokémon) {
  console.log("showPokémon");
  const pokemonHTML = /*HTML*/ `<article class="grid-item">
  <image src="${pokémon.image}"></image>
  <h2>${pokémon.name}</h2>
  <p>${pokémon.type}</p> 
  </article>`;
  document.querySelector("#pokémon").insertAdjacentHTML("beforeend", pokemonHTML);
  document.querySelector("#pokémon article:last-child").addEventListener("click", clickPokémon);

  function clickPokémon() {
    document.querySelector("#pokémondetails").showModal();
    const myHTML = /*HTML*/ `
  <h2>Name: ${pokémon.name}</h2>
  <h3>${pokémon.description}</h3>
  <li>${pokémon.ability}</li>
  <li><img src="${pokémon.image}"></li>
  <li><img src="${pokémon.footprint}"</li>
  <li>${pokémon.dexindex}</li>
  <li>${pokémon.type}</li>
  <li>${pokémon.subtype}</li>
  <li>${pokémon.weaknesses}</li>
  <li>${pokémon.gender}</li>
  <li>${pokémon.weight}</li>
  <li>${pokémon.height}</li>
  <li>${pokémon.generation}</li>
  <li>${pokémon.spilversion}</li>
  <li>${pokémon.canEvolve}</li>
  <li>${pokémon.statsHP}</li>
  <li>${pokémon.statsAttack}</li>
  <li>${pokémon.statsSpecialAttack}</li>
  <li>${pokémon.atsSpecialDefence}</li>
  <li>${pokémon.statsSpeed}</li>`;
    document.querySelector("#pokémondetails").insertAdjacentHTML("beforeend", myHTML);
  }
}

// name: tekst
// description: tekst
// ability: tekst
// image: url
// footprint: url (til et andet billede)
// dexindex: tal
// type: tekst – begrænset til: fire, ice, flying, etc …
// subtype: tekst
// weaknesses: tekst – en kommasepareret liste over types
// gender: tekst: male eller female
// weight: tal – vægt i gram
// height: tal – højde i cm
// generation: tal
// spilversion: tekst
// canEvolve: boolean
// statsHP: tal 0-10
// statsAttack: tal 0-10
// statsDefence: tal 0-10
// statsSpecialAttack: tal 0-10
// statsSpecialDefence: tal 0-10
// statsSpeed: 0-10
