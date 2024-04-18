import { type NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { TeacherFormSchema } from "~/lib/schema";
export async function POST(req: NextRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await req.json();
    console.log(body);
    const validatedFields = TeacherFormSchema.safeParse(body);
    console.log(validatedFields);

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
