import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
const API_KEY='ca2c000ab7ec6ac54de508c2fe54781d'


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://api.openweathermap.org/data/2.5/forcast?id=524901&appid=${API_KEY}`
      );
      setWeatherData(result.data);
    };
    fetchData();
  }, []);

  console.log( weatherData)
  return (
    
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              {weatherData?.name && (
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    <p>Location: {weatherData.name}</p>{' '}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {' '}
                    Temperature: {weatherData.main.temp}{' '}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Weather;
