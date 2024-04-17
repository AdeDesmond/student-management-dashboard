import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

import { UserProfileItem } from "./user-profile-item";

export const Userprofile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <UserProfileItem
          name="Desmond"
          title="Super Admin"
          className="bg-gray-200"
          classPosition="text-muted-foreground"
        />
      </PopoverTrigger>
      <PopoverContent>there will be some contents here</PopoverContent>
    </Popover>
  );
};
