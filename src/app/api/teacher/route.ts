import { type NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { TeacherFormSchema } from "~/lib/schema";
import { db } from "~/server/db";
import { teachers } from "~/server/db/schema";
import { v4 as uuidv4 } from "uuid";
export async function POST(req: NextRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await req.json();
    const validatedFields = TeacherFormSchema.safeParse(body);
    if (!validatedFields.success) {
      return NextResponse.json({ err: "invalid fields" }, { status: 400 });
    }

    const { data } = validatedFields;

    await db.insert(teachers).values({
      id: uuidv4(),
      firtName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      streetAddress: data.streetAddress,
      streetAddressLine: data.streetAddressLine,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      classId: data.classId,
    });

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ err: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { err: "something went wrong" },
        { status: 500 },
      );
    }
  }
}
