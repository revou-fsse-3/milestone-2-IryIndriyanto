import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = () => {
  return (
    <Button variant={"outline"} className="w-[300px] justify-between">
      <span>Search...</span> <MagnifyingGlassIcon/>
    </Button>
  );
};

export default SearchBar;
