import useGetWeather from '@/hooks/useGetWeather'
import { Card } from './ui/card'

const WeatherCard = () => {
  const { weatherData } = useGetWeather(51.5073219, -0.1276474, 'metric')

  return (
    <Card className="p-6">
      <div className=" w-full h-[200px]">weather data</div>
      <p>{weatherData?.weather[0].main}</p>
    </Card>
  )
}
export default WeatherCard
