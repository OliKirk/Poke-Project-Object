"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp is running");
  const allPokemon = await getPokémon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");

  // allPokemon.forEach(showPokemon);
  for (const pokemon of allPokemon) {
    viewPokémon(pokemon);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDialog();
    }
  });
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
  <h3>Description: ${pokémon.description}</h3>
  <li>Ability: ${pokémon.ability}</li>
  <li><img class="pokémoninfo-img" src="${pokémon.image}"></li>
  <li>Footprint: <img class="footprint" src="${pokémon.footprint}"></li>
  <li>Dexindex: ${pokémon.dexindex}</li>
  <li>Type: ${pokémon.type}</li>
  <li>Subtype: ${pokémon.subtype}</li>
  <li>Weaknesses: ${pokémon.weaknesses}</li>
  <li>Gender: ${pokémon.gender}</li>
  <li>Weight: ${pokémon.weight} grams</li>
  <li>Height: ${pokémon.height} centimeters</li>
  <li>Generation: ${pokémon.generation}</li>
  <li>Spilversion: ${pokémon.spilversion}</li>
  <li>Can Evolve: ${pokémon.canEvolve}</li>
  <li>HP: ${pokémon.statsHP}</li>
  <li>Attack: ${pokémon.statsAttack}</li>
  <li>Defence: ${pokémon.statsDefence}</li>
  <li>SP Attack: ${pokémon.statsSpecialAttack}</li>
  <li>SP Defence: ${pokémon.statsSpecialDefence}</li>
  <li>Speed: ${pokémon.statsSpeed}</li> 
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
