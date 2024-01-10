import SearchBar from "@/components/SearchBar";
import { H1 } from "@/components/typography/H1";

const Weather = () => {
  return (
    <div className="py-8 md:w-[800px]">
        <H1 className=" text-4xl mb-8">Current Weather</H1>
      <SearchBar />
    </div>
  );
};

export default Weather;
