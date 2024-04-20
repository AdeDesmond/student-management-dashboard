import React from "react";
import { cn } from "~/lib/utils";
import localfont from "next/font/local";

const teacherFontId = localfont({
  src: "../../../../public/notosan/static/NotoSans-Bold.ttf",
});

interface TeacherPageIdProps {
  params: {
    teachersId: string;
  };
}

function TeacherPageId({ params }: TeacherPageIdProps) {
  console.log(params);
  return (
    <div className="min-h-screen bg-purple-50/90 lg:p-6 2xl:p-4">
      <div className="flex flex-col gap-2">
        <h2 className={cn(teacherFontId.className, "font-bold")}>
          Teacher Profile
        </h2>
        <p>Hi Desmond! welcome to the Edu-Center Dashboard</p>
      </div>
    </div>
  );
}

export default TeacherPageId;
