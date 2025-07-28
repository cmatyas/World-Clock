setInterval(function () {
    let londonElement = document.querySelector("#london");
    let londonDate = londonElement.querySelector(".date")
    let londonTime = londonElement.querySelector(".time")
    londonDate.innerHTML = moment().format("MMMM DD YYYY");
    londonTime.innerHTML = moment().tz("Europe/London").format("hh:mm:ss [<small>]A[</small>]");
}, 1000);

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

function updateCity (event) {
    let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = "";
    setInterval(function() {
        let cityTimeZone = event.target.value;
        if (cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
        }
            let cityTime = moment.tz(cityTimeZone);
            let citiesElement = document.querySelector("#cities");
            citiesElement.innerHTML = `
            <div class="city">
                <div>
                    <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
                    <div class="date">${cityTime.format("MMMM DD YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
            </div>
            <a href="/">Back to All Cities</a>
            `;
    }, 1000);

}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);