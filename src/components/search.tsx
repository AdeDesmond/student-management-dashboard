import { SearchIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface SearchProps {
  className: string;
  divClass: string;
}

export const Search = ({ className, divClass }: SearchProps) => {
  return (
    <div
      className={cn(
        divClass,
        "flex h-[2.5rem] w-[40%] items-center rounded-sm  p-4",
      )}
    >
      <SearchIcon className="h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        name="search"
        id="search"
        className={cn(className, "h-[2rem] w-full outline-none")}
      />
    </div>
  );
};
