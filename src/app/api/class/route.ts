import { NextResponse, type NextRequest } from "next/server";
import { ClassFormSchema } from "~/lib/schema";
import { db } from "~/server/db";
import { classes } from "~/server/db/schema";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await req.json();
    const validatedFields = ClassFormSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json({ err: "Invalid fields" }, { status: 400 });
    }

    const { data } = validatedFields;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    await db.insert(classes).values({
      id: uuidv4() as string,
      name: data.className,
      classSize: parseInt(data.classSize),
    });
    return NextResponse.json({ status: "success" }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return NextResponse.json({ err: err.message }, { status: 500 });
    } else {
      console.log(err);
      return NextResponse.json(
        { err: "Something went wrong" },
        { status: 500 },
      );
    }
  }
}
