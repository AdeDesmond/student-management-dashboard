// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  text,
  timestamp,
  varchar,
  type AnyPgColumn,
  integer,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `student-management-project_${name}`,
);

export const teachers = createTable("teachers", {
  id: text("cuid").primaryKey(),
  firtName: varchar("name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  phoneNumber: varchar("phone_number", { length: 20 }),
  emailAddress: varchar("email_address", { length: 100 }),
  streetAddress: varchar("street_address", { length: 200 }),
  streetAddressLine: varchar("street_address_line", { length: 200 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  postalCode: varchar("postal_code", { length: 30 }),
  classId: text("class_id").references((): AnyPgColumn => classes.id),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const students = createTable("students", {
  id: text("cuid").primaryKey(),
  name: varchar("name", { length: 120 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const classes = createTable("classes", {
  id: text("cuid").primaryKey(),
  name: varchar("name", { length: 100 }),
  teacherId: text("teacher_id").references(() => teachers.id),
  studentId: text("student_id").references(() => students.id),
  classSize: integer("class_size"),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});
