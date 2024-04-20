import { type TeacherType, columns } from "./column";
import { DataTable } from "../../../components/data-table";

interface TeacherClientProps {
  data: TeacherType[] | undefined;
}

export const TeacherClient = ({ data }: TeacherClientProps) => {
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};
