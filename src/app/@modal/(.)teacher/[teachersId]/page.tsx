import { Modal } from "./modal";

interface TeacherPageIdViewProps {
  params: {
    teachersId: string;
  };
}
export default function TeacherPageIdView({ params }: TeacherPageIdViewProps) {
  return (
    <Modal>
      <div>{params.teachersId}</div>
    </Modal>
  );
}
