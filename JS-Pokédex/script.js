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

// Example usage:
fetchData("https://pokeapi.co/api/v2/");
