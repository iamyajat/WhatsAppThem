if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

function onClick() {
    var phoneNumber = document.getElementById("phone").value;
    const countryCode = phoneNumber.slice(0, 3).match(/^(\+?\d{1,3}|\d{1,4})$/gm);
    if (countryCode[0] != "+91") {
        alert("We noticed that you haven't added the country and we did that for you.");
        phoneNumber = "+91" + phoneNumber;
    }
    url = "https://wa.me/" + phoneNumber + "/"
    window.open(url);
}

document.getElementById("submit").addEventListener("click", onClick)