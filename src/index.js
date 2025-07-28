setInterval(function() {
}, 1000);

function updateCity (event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment.tz(cityTimeZone);
    let citiesEleemnt = document.querySelector("#cities");
    citiesEleemnt.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
            <div class="date">${cityTime.format("MMMM DD YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
    </div>
    `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);