import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  uniqueIndex,
  pgTable,
  timestamp,
  uuid,
  varchar,
  char,
  boolean,
} from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const subscribers = pgTable(
  "subscribers",
  {
    id: char("id", { length: 7 })
      .primaryKey()
      .$default(() => nanoid(7)),
    resendId: uuid("resend_id").unique(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }),
    verified: boolean("verified").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at"),
  },
  (t) => [uniqueIndex("idx_subs_contact_id").on(t.resendId)]
);

export type InsertsubscriberParams = InferInsertModel<typeof subscribers>;
export type Subscriber = InferSelectModel<typeof subscribers>;
