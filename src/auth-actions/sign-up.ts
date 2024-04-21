"use server";

import type * as z from "zod";
import { SignUpSchema } from "~/lib/schema";
import bcryptjs from "bcryptjs";
import { getStudentByEmail, getTeacherByEmail } from "~/lib/validation-helpers";
import { db } from "~/server/db";
import { students, teachers } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function SignUpNewUser(values: z.infer<typeof SignUpSchema>) {
  try {
    const validatedFields = SignUpSchema.safeParse(values);
    if (!validatedFields.success) {
      return {
        error: "invalid fields",
      };
    }

    const { data } = validatedFields;

    const teacher = await getTeacherByEmail(data.email);

    const student = await getStudentByEmail(data.email);
    const salt = bcryptjs.genSaltSync(12);

    if (teacher) {
      const hashPass = bcryptjs.hashSync(data.password, salt);

      await db
        .update(teachers)
        .set({
          isVerified: true,
        })
        .where(eq(teachers.emailAddress, data.email));

      await db
        .update(teachers)
        .set({
          password: hashPass,
        })
        .where(eq(teachers.emailAddress, data.email));

      return {
        success: "Sign up successful",
      };
    }

    if (student) {
      const hash = bcryptjs.hashSync(data.password, salt);
      await db
        .update(students)
        .set({
          isVerified: true,
        })
        .where(eq(students.emailAddess, data.email));

      await db
        .update(students)
        .set({
          password: hash,
        })
        .where(eq(teachers.emailAddress, data.email));

      return {
        success: "Sign in successful",
      };
    }
  } catch (err) {}
}
