// import useGetWeather from '@/hooks/useGetWeather'
import { useWeatherContext } from './WeatherProvider'
import { Card } from './ui/card'

const WeatherCard = () => {
  const { weatherData } = useWeatherContext()

  return (
    <Card className="p-6">
      <div className=" w-full h-[200px]">weather data</div>
      <p>{weatherData?.weather[0].main}</p>
    </Card>
  )
}
export default WeatherCard
