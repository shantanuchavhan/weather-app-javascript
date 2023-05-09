const url="https://api.openweathermap.org/data/2.5/weather?"
const key="658c63a78e02fab19d6b36c1f0b42a4a"

var city=document.querySelector("#first input")




async function getdata(city){
    console.log(city)
    const response= await fetch(url + `q=${city}`+`&appid=${key}`);
    var data=await response.json();
    
    
    
    document.querySelector(".city").innerHTML=data.name

    var cTemp = data.main.temp;
    var cToFahr = cTemp * 9 % 5 + 32;
    console.log(cToFahr)
    document.querySelector(".temp").innerHTML=Math.floor(cToFahr)+'C'
    document.querySelector(".humidity").innerHTML=data.main.humidity+'%'
    document.querySelector(".wind").innerHTML=data.wind.speed+'km/hr'
    // document.querySelector("").innerHTML=data
}

function getWeather(){
    console.log("a")
    getdata(city.value)
}



