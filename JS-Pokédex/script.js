async function fetchData(url) {
  try {
    const response = await fetch(url);    

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function loadPokemon() {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const data = await response.json()

  const container = document.getElementById("pokedex")

  data.results.forEach((pokemon, index) => {

    const id = index + 1

    const card = document.createElement("div")

    card.className = "bg-white rounded-xl shadow-md p-4 text-center"

    card.innerHTML = `
    <div class="border w-30 py-5">
      <img class="mx-auto"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
      
      <h2 class="capitalize font-semibold mt-2">${pokemon.name}</h2>
      <p class="text-sm text-gray-500">#${id}</p>
    </div>
    `

    container.appendChild(card)

  })
}

loadPokemon()