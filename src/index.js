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
            `;
    }, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);