import "server-only";

import { db } from "~/server/db";

export const getTeacherByEmail = async (email: string) => {
  try {
    const userWithEmail = await db.query.teachers.findFirst({
      where: (model, { eq }) => eq(model.emailAddress, email),
    });
    if (!userWithEmail) {
      return "teacher not found";
    }
    return userWithEmail;
  } catch (err) {
    console.log(err);
  }
};

export const getStudentByEmail = async (email: string) => {
  try {
    const userWithEmail = await db.query.students.findFirst({
      where: (model, { eq }) => eq(model.emailAddess, email),
    });

    if (!userWithEmail) {
      return "Student not found";
    }

    return userWithEmail;
  } catch (err) {
    console.log(err);
  }
};
