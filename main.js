// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeButton(evt) {
  console.log(evt)
  const heartButton = evt.target
  mimicServerCall("invalidServer")
  .then(function(response){
      if (heartButton.innerText == EMPTY_HEART) {
        heartButton.innerText = FULL_HEART;
        heartButton.classList.add("activated-heart")
      } else {
        heartButton.innerText = EMPTY_HEART;
        heartButton.classList.remove("activated-heart")
      }

  })
    
  .catch(function(error){
    const modal = document.getElementById("modal")
    modal.classList.remove("hidden")
    modal.innerText = error
    setTimeout(() => modal.classList.add("hidden"), 3000);
    // debugger
    // Display the error modal by removing the .hidden class
    // Display the server error message in the modal
    // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
  })
    
}

glyphs = document.querySelectorAll(".like-glyph")
glyphs.forEach(glyph => glyph.addEventListener("click", likeButton));




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
