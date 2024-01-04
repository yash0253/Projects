function showweather(){

    let apikey='6d5bb7279116e3b7404a2af8c4eab53c ';
    let city =document.querySelector("#inputcity").value;

    if(!city){
        alert("Enter City name")
    }

    console.log(city)

    let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;


    const wdata=async()=>{


        try{
            const response= await fetch(currentWeatherUrl);
            const data = await response.json();
            console.log(data)
        }
        catch(error){
            console.error("There is a error is fetching data",error);
        }
       
    
        
    
    }
   wdata();

return
}

