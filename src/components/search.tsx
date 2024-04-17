import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="flex h-[2.5rem] w-[40%] items-center rounded-sm bg-gray-200 p-4">
      <SearchIcon className="text-muted-foreground h-4 w-4" />
      <input
        type="text"
        name="search"
        id="search"
        className="h-[2rem] w-full bg-gray-200 outline-none"
      />
    </div>
  );
};
