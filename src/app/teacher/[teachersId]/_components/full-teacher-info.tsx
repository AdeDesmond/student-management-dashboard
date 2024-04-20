import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { type TeacherType } from "../../_components/column";
import { ShowContactInfo } from "~/components/show-contact-info";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import localfont from "next/font/local";
import { cn } from "~/lib/utils";

const teacherfont = localfont({
  src: "../../../../../public/notosan/static/NotoSans-Bold.ttf",
});

interface FullTeacherInfoProps {
  data: TeacherType;
}

export const FullTeacherInfo = ({ data }: FullTeacherInfoProps) => {
  return (
    <div className="flex h-[25rem] w-[100%] justify-between">
      <div className="flex basis-1/2 flex-col">
        <div className="flex flex-col items-center gap-y-5">
          <Avatar>
            <AvatarImage
              src="/svgs/teacher.svg"
              className="h-[4rem] w-[4rem] rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3
            className={cn(
              teacherfont.className,
              "flex items-center gap-x-2 text-lg font-bold",
            )}
          >
            <span>{data?.firtName}</span>
            <span>{data?.lastName}</span>
          </h3>
          <div className="flex items-center gap-x-2">
            <ShowContactInfo
              Icon={PhoneCallIcon}
              info={String(data?.phoneNumber)}
              IconColor="purple"
              IconSize={20}
            />
            <ShowContactInfo
              Icon={MailIcon}
              info={data?.emailAddress}
              IconColor="purple"
              IconSize={20}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            corporis error doloribus ipsa vel. Voluptatum neque cum sit et
            commodi explicabo enim! Error aliquid quia, mollitia quas hic quasi
            odio.
          </p>
        </div>
      </div>
      {/* more details */}
      <div className="grid basis-1/2 grid-cols-2 grid-rows-2">
        <div>
          <h2 className="text-lg font-extrabold">Class</h2>
          <p>{data?.classes?.name}</p>
        </div>
        <div>
          <h2 className="text-lg font-extrabold">Class Size</h2>
          <p>{data?.classes?.classSize}</p>
        </div>
        <div>
          <h2 className="text-lg font-extrabold">City/State</h2>
          <p>
            {data?.city}/{data?.state}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-extrabold">StreetAddress</h2>
          <p>{data?.streetAddress}</p>
        </div>
      </div>
    </div>
  );
};
