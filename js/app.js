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
    url = "https://wa.me/" + phoneNumber
    var visibility = document.getElementById("messageShowHide").innerHTML
    if (visibility === "- Add message"){
      var message = document.getElementById("messageData").value
      message = message.replaceAll("\n", "%0A")
      message = message.replaceAll(" ", "%20")
      url += "?text=" + message
    }
    window.open(url);
  }
}

document.getElementById("submit").addEventListener("click", onClick)

function messageShowHide() {
  var visibility = document.getElementById("messageShowHide").innerHTML
  if (visibility === "+ Add message") {
    document.getElementById("messageShowHide").innerHTML = "- Add message";
    document.getElementById("messageData").style.display = "block"
  } else {
    document.getElementById("messageShowHide").innerHTML = "+ Add message";
    document.getElementById("messageData").style.display = "none"
  }
}

document.getElementById("messageShowHide").addEventListener("click", messageShowHide);