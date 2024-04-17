import { cn } from "~/lib/utils";
import { ShowPosition } from "./show-position";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserProfileItemProps {
  name?: string;
  title?: string;
  className?: string;
  classPosition?: string;
  classHeader?: string;
}

export const UserProfileItem = ({
  name,
  title,
  className,
  classPosition,
  classHeader,
}: UserProfileItemProps) => {
  return (
    <div
      className={cn(
        className,
        "flex h-10 items-center gap-x-4 overflow-hidden rounded-lg p-2",
      )}
    >
      <Avatar>
        <AvatarImage />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ShowPosition
        name={name}
        title={title}
        classPosition={classPosition}
        classHeader={classHeader}
      />
    </div>
  );
};
