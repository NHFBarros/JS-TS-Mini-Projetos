async function fetchData(url) {
  try {
    const response = await fetch(url); // Wait for the server response
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const data = await response.json(); // Parse the response body as JSON
    console.log(data);
    return data;
    
  } catch (error) {
    console.error('Error fetching data:', error); // Handle network errors or non-ok responses
  }
}

// Example usage:
fetchData('https://api.example.com');
