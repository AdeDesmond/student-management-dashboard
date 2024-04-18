import React from "react";
import { Search } from "~/components/search";
import { StudentForm } from "~/components/student-form";
import { Button } from "~/components/ui/button";

function StudentPage() {
  return (
    <div className="grid min-h-screen grid-cols-4 bg-purple-50/90 lg:p-6 2xl:p-4">
      <div className=" col-span-3  ">
        <div className="mb-3  flex justify-between">
          <div className="flex flex-col">
            <h2>Student Database</h2>
            <p>Hi Desmond welcome to the edu-center dashboard</p>
          </div>
          <div className="flex gap-2">
            <Button>Add form</Button>
            <StudentForm />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button>students</Button>
          <Button>teacher</Button>
          <Search className="bg-white" divClass="bg-white" />
        </div>
      </div>
      <div className=" col-span-1 bg-emerald-200">second part</div>
    </div>
  );
}

export default StudentPage;
