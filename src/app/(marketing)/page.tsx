import React from "react";
import { WelcomeShowCase } from "./_components/welcome-showcase";
import localfont from "next/font/local";
import { cn } from "~/lib/utils";
import { Medal } from "./_components/medal";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const marketingFont = localfont({
  src: "../../../public/notosan/static/NotoSans-Bold.ttf",
});
function MarketingPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2  lg:pb-28 ">
      <Medal />
      <div className="rounded border-2 border-slate-950 p-2">
        <h2
          className={cn(
            marketingFont.className,
            "bg-gradient-to-r from-[#8C4AF2] to-[#6B56F6] bg-clip-text pb-2 text-5xl text-transparent",
          )}
        >
          Welcome to Edu Management
        </h2>
      </div>
      <WelcomeShowCase />
      <Button size="sm" asChild className="bg-[#6B56F6]">
        <Link href={"/"}>Kick start your experience</Link>
      </Button>
      <p className="text-lg font-extrabold">
        Management made easy with, all students and teachers all <br /> come
        together under one umbrella for maximum productivity.
      </p>
    </div>
  );
}

export default MarketingPage;
