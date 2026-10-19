
document.getElementById("actualitzar").addEventListener("click",function(){


    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("bitcoin").innerHTML=data.bpi.EUR.rate+" €"
  });

})

document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });
  
})
document.getElementById("NouUsuari").addEventListener("click",function(){

    fetch('https://api.randomuser.me')
  .then(response => response.json())
  .then(data => {console.log(data)
        document.getElementById("Usuari").innerHTML=data.results[0].name.first
        document.getElementById("CognomUsuari").innerHTML=data.results[0].name.last
        document.getElementById("imatge").src=data.results[0].picture.thumbnail
        document.getElementById("Telefon").innerHTML=data.results[0].phone
    });
  
})
