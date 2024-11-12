import { db } from "@/server/db";
import {
  subscribers,
  type InsertsubscriberParams,
  type Subscriber,
} from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function insertOne(sub: InsertsubscriberParams) {
  const resp = await db
    .insert(subscribers)
    .values(sub)
    .returning({ subId: subscribers.id });

  return resp[0];
}

export async function insertMany(...subs: InsertsubscriberParams[]) {
  return await db
    .insert(subscribers)
    .values(subs)
    .returning({ subId: subscribers.id });
}

export async function retrieveOne(id: string): Promise<Subscriber | undefined> {
  return db.query.subscribers.findFirst({
    where: eq(subscribers.id, id),
  });
}

export async function retrieveAll(): Promise<Subscriber[]> {
  return db.query.subscribers.findMany();
}

export async function update(
  id: string,
  sub: Omit<Partial<InsertsubscriberParams>, "id">
) {
  return db.update(subscribers).set(sub).where(eq(subscribers.id, id));
}

export async function deleteOne(id: string) {
  return db.delete(subscribers).where(eq(subscribers.id, id));
}

export async function deleteAll() {
  return db.delete(subscribers);
}
