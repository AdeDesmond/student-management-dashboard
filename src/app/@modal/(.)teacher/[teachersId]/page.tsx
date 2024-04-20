import Link from "next/link";
import { Modal } from "./modal";
import { getTeacher } from "~/server/queries";
import { FullTeacherInfo } from "~/app/teacher/[teachersId]/_components/full-teacher-info";

interface TeacherPageIdViewProps {
  params: {
    teachersId: string;
  };
}
export default async function TeacherPageIdView({
  params,
}: TeacherPageIdViewProps) {
  const teacher = await getTeacher(params.teachersId);
  return (
    <Modal title={teacher?.firtName}>
      <div>
        <FullTeacherInfo data={teacher} />
      </div>
    </Modal>
  );
}
