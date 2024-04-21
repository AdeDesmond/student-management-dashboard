import Image from "next/image";
import { SignInOptions } from "./signin-options";
import { SignUpOptions } from "./signup-options";

export const MarketingHeader = () => {
  return (
    <div className="sticky left-0 top-0 flex h-[5rem] w-full items-center justify-between bg-white shadow-sm lg:px-20 2xl:px-[10rem]">
      <div>
        <Image src={"/svgs/cap.svg"} alt="cap logo" height={80} width={80} />
      </div>

      <div className="flex items-center gap-x-2">
        <SignInOptions />
        <SignUpOptions />
      </div>
    </div>
  );
};
