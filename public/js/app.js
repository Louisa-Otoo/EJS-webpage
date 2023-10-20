
// Using the fetch API
fetch('/api/data')
  .then((response) => response.json())
  .then((data) => {
    // Use the data in your frontend, e.g., update the UI
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });