import Image from "next/image";

export const Medal = () => {
  return (
    <div>
      <Image src={"/svgs/medal.svg"} alt="medal" width={100} height={100} />
    </div>
  );
};
