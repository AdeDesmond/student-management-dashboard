import { FoldersIcon, GiftIcon, BellIcon, SquareCheckIcon } from "lucide-react";

export const Notifications = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
        <BellIcon className="text-muted-foreground h-4 w-4" />
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
        <GiftIcon className="text-muted-foreground h-4 w-4" />
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
        <SquareCheckIcon className="text-muted-foreground h-4 w-4" />
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
        <FoldersIcon className="text-muted-foreground h-4 w-4" />
      </div>
    </div>
  );
};
