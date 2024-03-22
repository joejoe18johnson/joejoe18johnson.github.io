

const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// function showPosition(position) {
//   x.innerHTML = "Passcode: " + position.coords.latitude +
//     "<br>Passphrase: " + position.coords.longitude;
//   localStorage.setItem('myList', JSON.stringify(x.innerHTML))
// }


const showPosition = (position) => {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  localStorage.setItem('myDataStorage', JSON.stringify(x.innerHTML))

}

const button = document.getElementById("btn")
button.addEventListener("click", () => {
  getLocation();

})
// const myValue = 

var myData = localStorage.getItem('myDataStorage');
const userInput = document.getElementById('input').value = myData;

// const userInput = document.getElementById('input').value =













