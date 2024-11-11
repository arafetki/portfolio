import { db } from "@/server/db";
import {
  subscribers,
  type InsertsubscriberParams,
  type Subscriber,
} from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function insertSubscriber(sub: InsertsubscriberParams) {
  return db
    .insert(subscribers)
    .values(sub)
    .returning({ subId: subscribers.id });
}

export async function retrieveSubscriber(
  id: string
): Promise<Subscriber | undefined> {
  return db.query.subscribers.findFirst({
    where: eq(subscribers.id, id),
  });
}

export async function updateSubscriber(
  id: string,
  sub: Omit<Partial<InsertsubscriberParams>, "id">
) {
  return db.update(subscribers).set(sub).where(eq(subscribers.id, id));
}
