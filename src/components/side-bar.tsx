import Link from "next/link";
import { CopyWrite } from "./copy-write";
import { Logo } from "./logo";
import { Navbar } from "./nav-bar";
import { Button } from "./ui/button";
import { UserProfileItem } from "./user-profile-item";

export const SideBar = () => {
  return (
    <aside className="flex w-[20%] flex-col justify-around bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8C4AF2] to-[#6B56F6] pb-10 pl-10">
      <div>
        <Logo />
        <Navbar />
      </div>
      <CopyWrite />

      <div className=" flex flex-col gap-4 pr-4">
        <UserProfileItem
          name="Victoria"
          title="Teacher"
          classHeader="text-white"
          classPosition="text-muted"
        />
        <Button size="sm" variant="outline" asChild>
          <Link href={"/"}>log out</Link>
        </Button>
      </div>
    </aside>
  );
};

// #8C4AF2    #6B56F6
