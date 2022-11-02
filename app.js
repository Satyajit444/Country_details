let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    // console.log(finalURL);

    fetch(finalURL).then((response) => response.json()).then((data) => {
        // console.log(data[0]) 
        // console.log(data[0].capital)
        // console.log(data[0].flags.svg)
        // console.log(data[0].name.common)
        // console.log(data[0].continents[0])

        result.innerHTML =
            ` <img src="${data[0].flags.svg}" class="flag-img" alt="country image">
        <h2>${data[0].name.common}</h2>

        <div class="wrapper">

            <div class="data-wrapper">

                <h4>Capital :</h4>
                <span>${data[0].capital[0]}</span>             <br> 

                <h4> Continent :</h4>
                <span>${data[0].continents[0]}</span>        <br>

                <h4> Population :</h4>
                <span>${data[0].population}</span>             <br>

                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name}<br>

                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>

            </div>

        </div>`

    }).catch(() => {
        if (countryName.length == 0) {
            result.innerHTML = `<h3>The input field cannot be empty</h3>`;
        } else {
            result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
        }
    })

})