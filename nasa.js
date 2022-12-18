// let fetchImage = document.getElementById('fetch-image'),
//    imageContainer = document.getElementById('image-container');

// //call bakc funtion to make an api call
// function displayImage() {  
//    //creating an xhr object to hold data
//    let xhrReaquest = new XMLHttpRequest();

//    //Resposne handler, what to do with api response data
//    xhrReaquest.onload = () => {
//       console.log(xhrReaquest.response);
//       //collect response data and convert into json format so it is readable and easy to use
//       let responseJson = JSON.parse(xhrReaquest.response);
//       // extract all those data we need
//       let imageUrl = responseJson.url;
//       let title = responseJson.title;
//       let about = responseJson.explanation;

//       // make image card and append into image container with help of templet literals( ` your content ` )
//       imageContainer.innerHTML += `
//       <div id="card">
//          <div class="left">
//             <img src=${imageUrl} alt="" height="200px" width="200px">
//          </div>
//          <div class="right">
//             <h2>${title}</h2>
//             <div> ${about}</div>
//             <button type="button">Favourite</button>
//          </div>
//       </div>
//       `
//    }

//    // handle error
//    xhrReaquest.onerror = () => {
//       console.log("We are sorry, not able to fetch data !!");
//    }

//    //initiate/open the request
//    xhrReaquest.open(
//       'get',
//       'https://api.nasa.gov/planetary/apod?api_key=aSLnR6cwIJEBGzZGPQnVgEdVY8wc7Mh113FaE8TC',
//       true 
//    );

//    //send the request to api
//    xhrReaquest.send();
// }


// // fire an event to fetch data via making an api call
// fetchImage.addEventListener('click', displayImage);


let fetchImage = document.getElementById('fetch-image'),
   imageContainer = document.getElementById('image-container');

function getFetch() {
   let choice = document.querySelector('input').value;
   console.log(choice);

   const url = `https://api.nasa.gov/planetary/apod?api_key=aSLnR6cwIJEBGzZGPQnVgEdVY8wc7Mh113FaE8TC&date=${choice}`;
   fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(data);
      imageContainer.innerHTML += `
      <div>
         <img src=${data.url}> 
         <p>${data.explanation}</p>
      </div> `
   })
   .catch((error) => {
      console.log("error in fetching data");
   })
}

fetchImage.addEventListener('click', getFetch);
