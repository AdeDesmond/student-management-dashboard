import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Button } from "./ui/button";

interface IconProps {
  size?: string | number;
  color?: string;
}
interface ShowContactInfoProps {
  Icon: React.ElementType<IconProps>;
  IconSize?: number;
  IconColor?: string;
  info?: string;
}

export const ShowContactInfo = ({
  Icon,
  IconColor,
  IconSize,
  info,
}: ShowContactInfoProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="h-[4rem] w-[4rem] rounded-full bg-gray-200 p-1"
          >
            <Icon size={IconSize} color={IconColor} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{info}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
