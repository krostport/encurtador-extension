const form = document.querySelector("form")
const myInput = document.getElementById("my-url")

form.addEventListener("submit", async(event) => {
    event.preventDefault()

    let apis = [ // Pegar API no site da Rebrand.Ly
        'xxx',
        'xx',
        'x'
    ]

    let apisRandom = apis[Math.floor(Math.random() * apis.length)]

    let headers = {
        "Content-Type": "application/json",
        "apikey": `${apisRandom}`,
    }

    console.log(apisRandom)
 
    let linkRequest = {
        destination: myInput.value,
        domain: { fullName: "rebrand.ly" }
      }
 
    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    }).then(response => response.json()).then(json => { 

        if(json.shortUrl === undefined) {
            alert('❌ Isto não é uma URL valida.')
        } else {

        myInput.value = json.shortUrl
    }
     });
})