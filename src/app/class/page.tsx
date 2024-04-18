import React from "react";
import { ClassForm } from "~/components/class-form";
import { cn } from "~/lib/utils";

function ClassPage() {
  return (
    <div className="min-h-screen bg-purple-50/90 lg:p-6 2xl:p-4">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Class</h2>
          <p>Hi Desmond! welcome to the Edu-Center Dashboard</p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <ClassForm />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ClassPage;
