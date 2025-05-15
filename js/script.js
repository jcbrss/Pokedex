const fetchpokemon = async (pokemon) => {
    const apiresponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();)
    return data;
}



