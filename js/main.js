console.log('JavaScript is running!');

// step 1 - select element to enteract with 
let bitmapGraphic = document.querySelector("#bitmapGraphic");

// step 3- what happens when events are triggered
function logID() {
    console.log(this.id);
}

// step 2 - how do users interact with element
bitmapGraphic.addEventListener('click', logID);

