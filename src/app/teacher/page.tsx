import React from "react";
import { TeacherForm } from "~/components/teacher-form";
import { cn } from "~/lib/utils";
import { getClasses, getTeachers } from "~/server/queries";
import { TeacherClient } from "./_components/teacher-client";
import localfont from "next/font/local";
import { type TeacherType } from "./_components/column";

const teacherFont = localfont({
  src: "../../../public/notosan/static/NotoSans-Bold.ttf",
});

async function TeacherPage() {
  const classes = await getClasses();
  const teachers = (await getTeachers()) as TeacherType[];

  return (
    <div className="min-h-screen bg-purple-50/90 lg:p-6 2xl:p-4">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className={cn(teacherFont.className, "font-bold")}>Teacher</h2>
          <p>Hi Desmond! welcome to the Edu-Center Dashboard</p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <TeacherForm classes={classes} />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className=" col-span-3">
          <TeacherClient data={teachers} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default TeacherPage;
