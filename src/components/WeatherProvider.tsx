import { TWeatherData } from '@/interface/weatherDataType'
import { API_KEY } from '@/utils/constant'
import { ReactNode, createContext, useContext, useState } from 'react'

interface WeatherContextProps {
  weatherData: TWeatherData | null
  fetchWeatherData: (lat: number, lon: number, units: string) => Promise<void>
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined)

export const useWeatherContext = (): WeatherContextProps => {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider')
  }
  return context
}

interface WeatherProviderProps {
  children: ReactNode
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [weatherData, setWeatherData] = useState<TWeatherData | null>(null)

  const fetchWeatherData = async (lat: number, lon: number, units: string) => {
    const API_URL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}=${units}`
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  const contextValue = { weatherData, fetchWeatherData }

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  )
}
