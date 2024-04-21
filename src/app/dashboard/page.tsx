import { DatePicker } from "~/components/date-picker";
import localfont from "next/font/local";
import { cn } from "~/lib/utils";
import { AdmissionForm } from "~/components/admission-form";

const dashboardfont = localfont({
  src: "../../../public/notosan/static/NotoSans-Bold.ttf",
});

//TODO think about the height and how to fixed that ont the student grades div
export default function DashboardPage() {
  return (
    <main className="flex min-h-screen  w-full flex-col  bg-purple-50/90 text-black lg:p-6 2xl:p-4 ">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className={cn(dashboardfont.className, "font-bold")}>
            Dashboard
          </h2>
          <p>Hi Desmond! welcome to the Edu-Center Dashboard</p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <DatePicker />
          <AdmissionForm />
        </div>
      </div>
      {/* student grades */}
      <div className="grid h-[17rem] w-full grid-flow-row-dense grid-cols-2 grid-rows-2 gap-x-4 ">
        <div className="grid  grid-cols-2 gap-4 p-1 ">
          <div className="h-[6.5rem] w-[12rem] rounded-sm bg-white shadow-sm">
            first
          </div>
          <div className="h-[6.5rem] w-[12rem] rounded-sm bg-white shadow-sm">
            second
          </div>
          <div className="h-[6.5rem] w-[12rem] rounded-sm bg-white shadow-sm">
            third
          </div>
          <div className="h-[6.5rem] w-[12rem] rounded-sm bg-white shadow-sm">
            fourth
          </div>
        </div>
        <div>
          <div className="h-[14rem] rounded-sm bg-white">this is rounded</div>
        </div>
      </div>
      {/* student charts and events  */}
      <div className="grid grid-cols-4 gap-x-4 ">
        <div className="col-span-3 h-[18rem] rounded-sm bg-white shadow-sm">
          first one
        </div>
        <div className="col-span-1 rounded-sm bg-white shadow-sm">events</div>
      </div>
      {/* School finance and calender */}
      <div className="flex w-full items-center justify-between pt-6">
        <div className="w-[45%] bg-white">school calender</div>
        <div className="w-[45%] bg-white">school finance</div>
      </div>
    </main>
  );
}
