import "server-only";
import { db } from "./db";

export const getClasses = async () => {
  try {
    const classes = await db.query.classes.findMany({
      orderBy: (model, { desc }) => desc(model.createdAt),
    });
    return classes;
  } catch (err) {
    console.log(err);
  }
};
