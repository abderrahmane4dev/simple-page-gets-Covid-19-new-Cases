async function get() {
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    console.log(data);
    document.querySelector(".cases").innerHTML = ` <h1> New cases number is : ${data.Global.NewConfirmed} <h1> `;
    document.querySelector(".death").innerHTML = ` <h1> New deaths number is : ${data.Global.NewDeaths} <h1> `;
    document.querySelector(".recovered").innerHTML = ` <h1> New recovered number is : ${data.Global.NewRecovered} <h1> `;
    document.querySelector("button").onclick = function() {
        location.reload();
    }

}



get();