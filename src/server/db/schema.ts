// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
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
  id: text("cuid").primaryKey().notNull(),
  firtName: varchar("name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
  emailAddress: varchar("email_address", { length: 100 }).notNull(),
  streetAddress: varchar("street_address", { length: 200 }).notNull(),
  streetAddressLine: varchar("street_address_line", { length: 200 }),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  postalCode: varchar("postal_code", { length: 30 }),
  classId: text("class_id").references((): AnyPgColumn => classes.id),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const teacherRelations = relations(teachers, ({ one }) => ({
  classes: one(classes, {
    fields: [teachers.classId],
    references: [classes.id],
  }),
}));

export const students = createTable("students", {
  id: text("cuid").primaryKey(),
  name: varchar("name", { length: 120 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

export const classes = createTable("classes", {
  id: text("cuid").primaryKey().notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  teacherId: text("teacher_id").references(() => teachers.id),
  studentId: text("student_id").references(() => students.id),
  classSize: integer("class_size"),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});
