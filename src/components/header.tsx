import { Notifications } from "./notifications";
import { Search } from "./search";
import { Userprofile } from "./user-profile";

export const Header = () => {
  return (
    <header className="flex h-[5rem] w-full items-center justify-between bg-white p-4 shadow">
      <Search />
      <div className="flex items-center gap-4">
        <Notifications />
        <Userprofile />
      </div>
    </header>
  );
};
