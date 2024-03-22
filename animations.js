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

function showPosition(position) {
  x.innerHTML = "Passcode: " + position.coords.latitude +
    "<br>Passphrase: " + position.coords.longitude;
  localStorage.setItem('myList', JSON.stringify(x.innerHTML))
}



const myElement = document.getElementById("testBtn");
myElement.innerHTML = "Clicked";


document.getElementById("main-img").style.display = "none";
alert("Hello Fam")

  (function () {
    setTimeout(function () {
      document.getElementById("main-img").style.display = "none";
    }, 4000);

  })();


alert("Hello")

console.log("Is it Working?")


