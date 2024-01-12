import { TWeatherData } from '@/interface/weatherDataType'
import { API_KEY } from '@/utils/constant'
import { useEffect, useState } from 'react'

const useGetWeather = (lat: number, lon: number, units: string) => {
  const [weatherData, setWeatherData] = useState<TWeatherData | null>(null)

  const fetchWeather = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}=${units}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    setWeatherData(data)
  }
  
  useEffect(() => {
    fetchWeather()
  }, [])
  return { weatherData, setWeatherData }
}
export default useGetWeather
