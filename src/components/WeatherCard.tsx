// import useGetWeather from '@/hooks/useGetWeather'
import { useWeatherContext } from './WeatherProvider'
import { H2 } from './typography/H2'
import { Card } from './ui/card'

const WeatherCard = () => {
  const { weatherData } = useWeatherContext()

  return (
    <Card className="p-6">
      <H2>{weatherData?.name}</H2>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-between p-6 w-full lg:w-1/2  aspect-square">
          <div></div>
          <div className="flex justify-center text-5xl font-thin">
            {weatherData?.main.temp}° C
          </div>
          <div></div>
        </div>
        <div className="p-6 w-full lg:w-1/2 border rounded-xl border-slate-400 aspect-square">
          <div className="text-3xl font-thin">
            {weatherData?.weather[0].main}
          </div>
          <div className="flex justify-center w-full py-4">
            {weatherData?.weather[0].main === 'Rain' && (
              <img
                src="../src/assets/Rain.svg"
                alt="Rain"
                className="w-3/5 aspect-square"
              />
            )}
            {weatherData?.weather[0].main === 'Clear' && (
              <img
                src="../src/assets/sun.svg"
                alt="Clear"
                className="w-3/5 aspect-square"
              />
            )}
            {weatherData?.weather[0].main === 'Drizzle' && (
              <img
                src="../src/assets/Drizzle.svg"
                alt="Drizzle"
                className="w-3/5 aspect-square"
              />
            )}
            {weatherData?.weather[0].main === 'Thunderstorm' && (
              <img
                src="../src/assets/Thunderstorm.svg"
                alt="Thunderstorm"
                className="w-3/5 aspect-square"
              />
            )}
            {weatherData?.weather[0].main === 'Clouds' && (
              <img
                src="../src/assets/Clouds.svg"
                alt="Clouds"
                className="w-3/5 aspect-square"
              />
            )}
            {weatherData?.weather[0].main === 'Snow' && (
              <img
                src="../src/assets/sun.svg"
                alt="Snow"
                className="w-3/5 aspect-square"
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
export default WeatherCard
