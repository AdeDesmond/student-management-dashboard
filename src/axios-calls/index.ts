import { type ClassFormSchema, type TeacherFormSchema } from "~/lib/schema";
import type * as z from "zod";
import axios from "axios";

//TODO deal with errors check eslint setup for no unsafe return
export async function createTeacher(data: z.infer<typeof TeacherFormSchema>) {
  try {
    const response = await axios.post("/api/teacher", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createClass(data: z.infer<typeof ClassFormSchema>) {
  try {
    const response = await axios.post("/api/class", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
