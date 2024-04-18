import React from "react";
import { TeacherForm } from "~/components/teacher-form";
import { cn } from "~/lib/utils";
import { getClasses } from "~/server/queries";

async function TeacherPage() {
  const classes = await getClasses();
  return (
    <div className="min-h-screen bg-purple-50/90 lg:p-6 2xl:p-4">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Teacher</h2>
          <p>Hi Desmond! welcome to the Edu-Center Dashboard</p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <TeacherForm classes={classes} />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default TeacherPage;
