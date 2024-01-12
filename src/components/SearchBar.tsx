import { Button } from '@/components/ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ScrollArea } from './ui/scroll-area'
import { cityData } from '@/utils/dummy-data'
import { useWeatherContext } from './WeatherProvider'

const SearchBar = () => {
  const { fetchWeatherData } = useWeatherContext()

  const handleWeather = (lat: number, lon: number, units = 'matric') => {
    fetchWeatherData(lat, lon, units)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className="w-[200px] justify-between">
          <span>Search...</span> <MagnifyingGlassIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search City</DialogTitle>
        </DialogHeader>
        <form className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" placeholder="search city" />
          </div>
          <Button type="submit" size="sm" className="px-3 py-5">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </form>
        <ScrollArea className=" h-32 w-auto rounded-md ">
          <div className="p-0">
            {cityData?.map((city, index) => (
              <DialogClose className='w-full'>
                <Button
                  key={index}
                  variant={'outline'}
                  className=" w-full py-3 px-4 my-1"
                  onClick={() => handleWeather(city.lat, city.lon)}
                >
                  {city.name}, {city.country},
                </Button>
              </DialogClose>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar
