"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp is running");
  const allPokemon = await getPokémon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");

  // allPokemon.forEach(showPokemon);
  for (const pokemon of allPokemon) {
    viewPokémon(pokemon);
  }
}

async function getPokémon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function viewPokémon(pokémon) {
  console.log("showPokémon");
  const pokemonHTML = /*HTML*/ `<article class="grid-item">
  <img src="${pokémon.image}">
  <h2>${pokémon.name}</h2>
  <p>${pokémon.type}</p> 
  </article>`;
  document.querySelector("#pokémon").insertAdjacentHTML("beforeend", pokemonHTML);
  document.querySelector("#pokémon article:last-child").addEventListener("click", clickPokémon);

  function clickPokémon() {
    const myHTML = /*HTML*/ ` <article id="pokémoninfo">
  <h2>Name: ${pokémon.name}</h2>
  <h3>${pokémon.description}</h3>
  <li>${pokémon.ability}</li>
  <li><img src="${pokémon.image}"></li>
  <li><img class="footprint" src="${pokémon.footprint}"></li>
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
  <li>${pokémon.statsSpeed}</li> 
  <button id="close-btn">Close</button>
  </article>`;
    document.querySelector("#pokémondetails").insertAdjacentHTML("beforeend", myHTML);
    document.querySelector("#pokémondetails").showModal();
    document.querySelector("#close-btn").addEventListener("click", closeDialog);
  }
}

function closeDialog() {
  console.log("closeDialog");
  document.querySelector("#pokémondetails").close();
  document.querySelector("#pokémoninfo").remove();
}
