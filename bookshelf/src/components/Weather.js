import React, { useState } from "react";
import axios from "axios";

function Weather() {
    
    
    
    
    const [citySearch, setCitySearch] = useState("")
    
    const options = {
        method: 'GET',
        url: "https://forecast9.p.rapidapi.com/rapidapi/forecast/" + citySearch + "/hourly/",
        headers: {
          'X-RapidAPI-Key': 'c7a133d59fmshea257f82c0e98aep1f9aebjsn14d2e87371d8',
          'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
        }
      };
      
      const forecastSearch = (event) => {
          if (event.key === "Enter") {
              axios.request(options).then(function (response) {
                  console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
                
            }
            
        }

    return (
        <>
            <div className="main-weather-container">
                <div className="main-weather-container-forecast">
                    <input type="text" value={citySearch} onChange={(event) => setCitySearch(event.target.value)} onKeyDown={forecastSearch}></input>
                </div>
            </div>
        </>
    )
}

export default Weather;