import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "@/env";

import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  client: Pool | undefined;
};

export const client =
  globalForDb.client ?? new Pool({ connectionString: env.DATABASE_URL });
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
