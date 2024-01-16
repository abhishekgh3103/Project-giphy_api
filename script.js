const img = document.querySelector('img');
  // fetch('https://api.giphy.com/v1/gifs/translate?api_key=coUy1EvqmfOytwcIxBLpW82wumrGdC9n&s=cats', {mode: 'cors'})
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(response) {
  //       console.log(response.data.images.original.url);
  //       img.src = response.data.images.original.url;
  //   });
// **********  Async / Await ***********
async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=coUy1EvqmfOytwcIxBLpW82wumrGdC9n&s=cats', {mode: 'cors'});
  const catData = await response.json();
  console.log(catData.data.images.original.url);
  console.log('Async/Await');
  img.src = catData.data.images.original.url;
}

getCats();