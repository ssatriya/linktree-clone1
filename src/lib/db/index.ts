import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

neonConfig.fetchConnectionCache = true;
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql, { schema });

export default db;

// const result = await db.query.user.findMany()
