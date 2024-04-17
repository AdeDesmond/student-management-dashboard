import { cn } from "~/lib/utils";

interface ShowPositionProps {
  name?: string;
  title?: string;
  classPosition?: string;
  classHeader?: string;
}

export const ShowPosition = ({
  name,
  title,
  classPosition,
  classHeader,
}: ShowPositionProps) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className={cn(classHeader, "text-sm font-bold")}>{name}</h2>
      <p className={cn(classPosition, "text-xs")}>{title}</p>
    </div>
  );
};
