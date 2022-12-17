let imageContainer = document.getElementById('image-container');
let image = document.getElementById('image');
let fetchImage = document.getElementById('fetch-image');

// making an api call to get an image
function fetchRandomImage(){
   //create new object to make request
   let xhrRequest =  new XMLHttpRequest();

   // Response handler, when get response from server process the response
   xhrRequest.onload = function(){
      console.log(xhrRequest.response);
      var responseJson = JSON.parse(xhrRequest.response);
      var imageUrl = responseJson.message;
      // adding fetched image into image container one by one
      imageContainer.innerHTML += `<div id="card">
         <div class="left">
            <img src=${imageUrl} alt="" height="200px" width="200px">
         </div>
         <div class="right">
            <h2>Title</h2>
            <div> about</div>
            <button type="button">Favourite</button>
         </div>
      </div>`
   }

   // initialise the request
   xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true)

   // make request to server
   xhrRequest.send();
}

// adding eventlistener to image fetch button
fetchImage.addEventListener('click', fetchRandomImage);
