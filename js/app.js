if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

function onClick() {
  const phoneNumber = document.getElementById("phone").value
  if (phoneNumber !== "") {
    url = "https://wa.me/" + phoneNumber + "/"
    window.open(url);
  }
}

document.getElementById("submit").addEventListener("click", onClick)