import Image from "next/image";

export const CopyWrite = () => {
  const date = new Date();
  return (
    <div>
      <Image
        src="/svgs/class.svg"
        alt="student"
        width={300}
        height={300}
        className=" object-cover"
      />
      <p className="text-start text-white">
        @{date.getFullYear()} All rights reserved{" "}
      </p>
    </div>
  );
};
