setInterval(function () {
    let losAngelesElement = document.querySelector("#losAngeles");
    let losAngelesDate = losAngelesElement.querySelector(".date")
    let losAngelesTime = losAngelesElement.querySelector(".time")
    losAngelesDate.innerHTML = moment().format("MMMM DD YYYY");
    losAngelesTime.innerHTML = moment().tz("America/Los_Angeles").format("hh:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function() {
    let philadelphiaElement = document.querySelector("#philadelphia");
    let philaDate = philadelphiaElement.querySelector(".date");
    let philaTime = philadelphiaElement.querySelector(".time");
    philaDate.innerHTML = moment().format("MMMM DD YYYY");
    philaTime.innerHTML = moment().tz("America/New_York").format("hh:mm:ss [<small>]A[</small>]");
}, 1000);